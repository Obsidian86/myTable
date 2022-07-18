import styled from "styled-components";
import klass from "../../functions/klass";
import THEME from "../../styles/theme";
import PropTypes from "prop-types";

const id = "__ContentCard";
const iconWidth = "70px";

const ContentCard = ({ icon = null, children, background = "#fff" }) => {
  return (
    <StyledContentCard
      iconWidth={icon ? iconWidth : "0px"}
      background={background}
    >
      {icon && <div {...klass({}, "icon", id)}>{icon}</div>}
      <div {...klass({}, "content", id)}>{children}</div>
    </StyledContentCard>
  );
};

ContentCard.proptypes = {};

export default ContentCard;

const StyledContentCard = styled.div`
  width: 96%;
  margin: ${THEME.margin.lg} auto;
  background-color: ${(p) => p.background};
  border-radius: ${THEME.radius.md};
  display: flex;
  justify-content: space-between;
  box-shadow: ${THEME.shadow.sm};
  color: ${THEME.theme.medium};
  .${id}-icon {
    background-color: ${THEME.theme.bad};
    color: ${THEME.theme.badDisabled};
    font-size: 1.1rem;
    display: flex;
    padding: ${THEME.padding.sm} 0;
    align-items: center;
    justify-content: center;
    width: ${(p) => p.iconWidth};
    border-radius: ${THEME.radius.md} 0 0 ${THEME.radius.md};
  }
  .${id}-content {
    width: calc(100% - ${(p) => p.iconWidth});
    padding: ${THEME.padding.lg};
  }
`;
