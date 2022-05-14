import React from "react";
import StyledTable from "./StyledTable";
import CheckBoxCell from "./components/CheckboxCell";
import TableFooter from "./components/TableFooter";
import DropDownMenu from "./components/DropDownMenu";
import ScrollingCheckList from "./components/ScrollCheckList";
import { tableSort } from "./functions";
import * as constants from "./constants";
import FloatMenu from "./components/FloatMenu";

const Table = ({
  columns,
  rows,
  perPage = 25,
  headerColor = "#8fcc99",
  checkbox = false,
  primaryKey = null,
  sort = null,
  displayCount = [25, 50, 100],
  hiddenCols = []
}) => {
  /* ------------- */
  /* --- State --- */
  /* ------------- */
  const [currentPage, updateCurrentPage] = React.useState(1);
  const [selectedItems, updateSelectedItems] = React.useState([]);
  const [sortOrder, updateSortOrder] = React.useState(sort);
  const [itemsPerPage, updateItemsPerPage] = React.useState(perPage);
  const [openMenu, updateOpenMenu] = React.useState(null);
  const [hiddenColumns, updateHiddenColumns] = React.useState(hiddenCols);
  const [selectedMenuItems, updateSelectedMenuItems] = React.useState({});
  /* ------------ */
  /* --- Vars --- */
  /* ------------ */
  const end = currentPage * itemsPerPage;
  const allRowsSelected = itemsPerPage === selectedItems.length;
  const lastPage = Math.ceil(rows.length / itemsPerPage);
  const dataKey = primaryKey || "__TABLE_UNIQUE_ID";

  // columns
  const processedColumns =
    hiddenColumns.length > 0
      ? [...columns].filter((col) => !hiddenColumns.includes(col.attribute))
      : [...columns];
  const showMainMenu = true;
  const showRowMenus = false;
  const columnCount = processedColumns.length;
  if (showMainMenu) {
    processedColumns.push({
      label: ":",
      attribute: constants.MAIN_MENU_KEY
    });
  }
  // rows
  let displayRows = [...rows];
  // If no primary key is set, add one
  if (!primaryKey) {
    displayRows = rows.map((row, index) => {
      const rowItem = {
        ...row,
        [dataKey]: `_row_key_${index}`
      };
      if (showMainMenu) {
        rowItem[constants.MAIN_MENU_KEY] = showRowMenus ? (
          <button>:</button>
        ) : (
          ""
        );
      }
      return rowItem;
    });
  }
  // Get the rows displayed in current page
  displayRows = tableSort(displayRows, sortOrder).slice(
    end - itemsPerPage,
    end
  );

  /* ----------------- */
  /* --- UseEffect --- */
  /* ----------------- */

  React.useEffect(() => {
    document.addEventListener("click", checkMenuStatus);
    return () => document.removeEventListener("click", checkMenuStatus);
  });

  /* ----------------- */
  /* --- Functions --- */
  /* ----------------- */
  const handleHiddenColCheck = (attr) => {
    updateHiddenColumns(
      hiddenColumns.includes(attr)
        ? [...hiddenColumns].filter((a) => a !== attr)
        : [...hiddenColumns, attr]
    );
  };

  const checkMenuStatus = (e) => {
    let closeMenu = true;
    let target = e.target;
    if (e.target.classList.contains("open-menu")) {
      return null;
    }
    while (target && closeMenu) {
      if (target?.classList?.contains("drop-down-menu")) {
        closeMenu = false;
      }
      target = target.parentNode;
    }
    closeMenu && updateOpenMenu(null);
  };

  const changePage = (newPage) => {
    handleSelectRowChange(false, null, true);
    updateCurrentPage(
      newPage < 1 ? 1 : newPage > lastPage ? lastPage : newPage
    );
  };
  const handleUpdateSortOrder = (attr, dir) =>
    attr && dir
      ? updateSortOrder([attr, dir])
      : attr === sortOrder[0]
      ? updateSortOrder([
          attr,
          sortOrder[1] === constants.ASC ? constants.DESC : constants.ASC
        ])
      : updateSortOrder([attr, constants.DESC]);

  const handleSelectRowChange = (allRows = false, row, clearRows) => {
    if (allRows || clearRows) {
      updateSelectedItems(
        allRowsSelected || clearRows
          ? []
          : displayRows.reduce((prev, curr) => [...prev, curr[dataKey]], [])
      );
    } else {
      const targetRowId = row[dataKey];
      updateSelectedItems(
        selectedItems.includes(targetRowId)
          ? [...selectedItems, targetRowId].filter((r) => r !== targetRowId)
          : [...selectedItems, targetRowId]
      );
    }
  };
  const handleItemsPerPageChange = (e) => {
    changePage(1);
    updateItemsPerPage(parseInt(e.target.value));
  };
  /* ------------ */
  /* --- View --- */
  /* ------------ */
  return (
    <StyledTable
      columnCount={columnCount}
      headerColor={headerColor}
      checkbox={checkbox}
    >
      <div className="table-row table-header">
        {checkbox && (
          <CheckBoxCell
            onClick={() => handleSelectRowChange(true)}
            checked={allRowsSelected}
          />
        )}
        {processedColumns.map((col, index) => (
          <span
            className={`
              open-menu
              table-cell
              ${
                col.attribute === constants.MAIN_MENU_KEY
                  ? "table-menu-column"
                  : ""
              }
              ${index === 0 ? "first-data-cell" : ""}
            `}
          >
            <span
              className="header-button open-menu"
              onClick={() =>
                openMenu === col.attribute
                  ? updateOpenMenu(null)
                  : updateOpenMenu(col.attribute)
              }
            >
              {col.label}
              {sortOrder[0] === col.attribute
                ? sortOrder[1] === constants.ASC
                  ? "- ^"
                  : "- v"
                : ""}
            </span>
            {openMenu === col.attribute ? (
              openMenu === constants.MAIN_MENU_KEY ? (
                <FloatMenu>
                  <ScrollingCheckList
                    options={columns.map((o) => ({
                      value: o.attribute,
                      label: o.label,
                      hidden: o.perm
                    }))}
                    handleChange={(o) => handleHiddenColCheck(o.value)}
                    checkedItems={hiddenColumns}
                  />
                </FloatMenu>
              ) : (
                <DropDownMenu
                  attribute={col.attribute}
                  handleUpdateSortOrder={handleUpdateSortOrder}
                  optionsList={displayRows.reduce((prev, curr) => {
                    prev.push(curr[col.attribute] || null);
                    return prev;
                  }, [])}
                />
              )
            ) : null}
          </span>
        ))}
      </div>
      {displayRows.map((row) =>
        row.component ? (
          <div
            className={`table-row component-row ${
              selectedItems.includes(row[dataKey]) ? "selected-row" : ""
            }`}
          >
            {checkbox && (
              <CheckBoxCell
                onClick={() => handleSelectRowChange(false, row)}
                checked={selectedItems.includes(row[dataKey])}
              />
            )}
            <span className="table-cell">{row.component}</span>
            <span className={`table-cell table-menu-column `} />
          </div>
        ) : (
          <div
            className={`
              table-row ${
                selectedItems.includes(row[dataKey]) ? "selected-row" : ""
              }
              `}
          >
            {checkbox && (
              <CheckBoxCell
                onClick={() => handleSelectRowChange(false, row)}
                checked={selectedItems.includes(row[dataKey])}
              />
            )}
            {processedColumns.map((col, index) => (
              <span
                className={`
                table-cell
                ${index === 0 ? "first-data-cell" : ""}
                ${
                  col.attribute === constants.MAIN_MENU_KEY
                    ? "table-menu-column"
                    : ""
                }
              `}
              >
                {row[col.attribute]}
              </span>
            ))}
          </div>
        )
      )}
      <TableFooter
        handleItemsPerPageChange={handleItemsPerPageChange}
        changePage={changePage}
        currentPage={currentPage}
        end={end}
        itemsPerPage={itemsPerPage}
        totalCount={rows.length}
        displayCount={displayCount}
      />
    </StyledTable>
  );
};

export default Table;
