import styled from "styled-components";
import THEME from "../../styles/theme";
import klass from "../../functions/klass";

const id = "__well";

const Well = ({ title, children }) => (
  <StyledWell>
    {title && <p className={`m-y-sm t-bold ${id}-title`}>{title}</p>}
    <div className="m-y-sm">{children}</div>
  </StyledWell>
);

export default Well;

const StyledWell = styled.div`
  background-color: ${THEME.theme.light};
  color: ${THEME.theme.dark};
  padding: ${THEME.padding.sm};
  border-radius: ${THEME.radius.sm};
  margin: ${THEME.margin.sm} 0;
  .${id}-title {
    opacity: 0.5;
  }
`;
