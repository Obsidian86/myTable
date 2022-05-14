import styled from "styled-components";

const ScrollingCheckList = ({
  options,
  handleChange,
  checkedItems = [],
  maxHeight = null
}) => {
  return (
    <StyledScrollingCheckList maxHeight={maxHeight}>
      {options.map((option) =>
        option.hidden ? null : (
          <label key={option.value || option.label}>
            <input
              type="checkbox"
              checked={!checkedItems.includes(option.value)}
              onClick={() => handleChange(option)}
            />
            {option.label}
          </label>
        )
      )}
    </StyledScrollingCheckList>
  );
};

const StyledScrollingCheckList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: ${(p) => p.maxHeight || "100%"};
  overflow-y: scroll;
  overflow-x: hidden;
  label {
    padding: 5px;
    padding-left: 6%;
    input {
      margin-right: 10px;
    }
  }
`;

export default ScrollingCheckList;
