import styled from "styled-components";

const Cols = ({ children, cols = 2 }) => {
  return <StyledCols width={`${100 / cols}%`}>{children}</StyledCols>;
};

const StyledCols = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & > * {
    width: ${(p) => p.width || "100%"};
  }
`;

export default Cols;
