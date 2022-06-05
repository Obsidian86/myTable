import styled from "styled-components";

const TableFooter = ({
  changePage,
  currentPage,
  end,
  itemsPerPage,
  totalCount,
  displayCount,
  handleItemsPerPageChange
}) => {
  return (
    <StyledTableFooter>
      <span>
        Items per page:
        <select onChange={handleItemsPerPageChange} value={itemsPerPage}>
          {displayCount.map((option) => (
            <option
              value={option}
              key={option}
            >
              {option}
            </option>
          ))}
        </select>
      </span>
      <span>
        <button onClick={() => changePage(currentPage - 1)}>&lt;</button>
        {end - itemsPerPage + 1} <span> - </span>{" "}
        {totalCount < end ? totalCount : end} of {totalCount}
        <button onClick={() => changePage(currentPage + 1)}>&gt;</button>
      </span>
    </StyledTableFooter>
  );
};

const StyledTableFooter = styled.div`
  color: gray;
  padding: 20px;
  text-align: center;
  & > span {
    padding: 10px;
  }
  button {
    color: gray;
    font-weight: bold;
    font-size: 1.2rem;
    margin-left: 8px;
    margin-right: 8px;
  }
  select {
    color: gray;
    border: none;
    background-color: none;
    background: none;
  }
`;

export default TableFooter;
