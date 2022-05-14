import styled from "styled-components";

const FloatMenu = ({ children }) => (
  <StyledFloatMenu className="drop-down-menu">{children}</StyledFloatMenu>
);

const StyledFloatMenu = styled.div`
  font-size: 14px;
  min-width: 250px;
  position: absolute;
  left: 0;
  top: 30px;
  z-index: 5;
  background-color: #fff;
  box-shadow: 0 0 3px gray;
  text-align: left;
`;

export default FloatMenu;
