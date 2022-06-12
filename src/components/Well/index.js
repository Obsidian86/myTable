import styled from "styled-components";
import THEME from "../../styles/theme";

const Well = ({ children }) => <StyledWell>{children}</StyledWell>;

export default Well;

const StyledWell = styled.div`
  background-color: ${THEME.theme.light};
  color: ${THEME.theme.dark};
  padding: ${THEME.padding.sm};
  border-radius: ${THEME.radius.sm};
  margin: ${THEME.margin.sm} 0;
`;
