import styled from "styled-components";

const MENU_COL_WIDTH = "15px";
const CHECKBOX_CELL_WIDTH = "25px";

const StyledTable = styled.div`
  button {
    cursor: pointer;
    background: none;
    border: none;
  }
  .link-btn {
    text-decoration: underline;
    cursor: pointer;
  }
  .table-row {
    display: flex;
    justify-content: space-between;
    align-content: center;
    z-index: 2;
    position: relative;
    margin-bottom: 3px;
    margin-top: 3px;
    &.selected-row {
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
      z-index: 3;
    }
    &:nth-child(odd) {
      background-color: #f3f3f3;
    }
    &.table-header {
      background-color: ${(p) => p.headerColor};
      border-radius: 3px 3px 0 0;
      z-index: 4;
      & .table-cell {
        position: relative;
        padding: 0;
        .header-button {
          display: block;
          padding: 5px 10px;
          cursor: pointer;
          &:hover {
            background-color: rgba(0, 0, 0, 0.3);
          }
        }
      }
    }
    & .table-cell {
      width: calc(
        (100% / ${(p) => p.columnCount}) -
          ${(p) => (p.checkbox ? CHECKBOX_CELL_WIDTH : "0px")}
      );
      text-align: right;
      padding: 6px;
      &.first-data-cell {
        text-align: left;
      }
    }
    &.component-row .table-cell {
      width: calc(100% - ${(p) => (p.checkbox ? CHECKBOX_CELL_WIDTH : "0px")});
    }
    & .table-cell {
      &.checkbox-cell {
        width: ${CHECKBOX_CELL_WIDTH};
      }
      &.table-menu-column {
        width: ${MENU_COL_WIDTH};
        text-align: center;
      }
    }
  }
`;

export default StyledTable;
