import React from "react";
import styled from "styled-components";
import THEME from "../../styles/theme";

const id = "__ProgressBar";

const ProgressBar = ({ color, progress, showProgress = true, label }) => {
  const [isMounted, updateIsMounted] = React.useState(false);
  React.useEffect(() => {
    !isMounted &&
      setTimeout(() => {
        updateIsMounted(true);
      }, 1);
  });
  return (
    <StyledProgressBar
      color={color}
      progress={isMounted ? progress : 0}
      showProgress={showProgress}
    >
      <span className={`${id}-progress-perc`}>
        {showProgress ? `${progress}%` : ""}
        {label && <span className={`${id}-label`}>{label}</span>}
      </span>
      <span className={`${id}-progress`} />
      <span className={`${id}-progress-unfilled`} />
    </StyledProgressBar>
  );
};

const StyledProgressBar = styled.div`
  position: relative;
  margin: ${THEME.margin.md} 0;
  .${id}-progress-unfilled {
    background-color: ${(p) => p.color};
    width: 100%;
    opacity: 0.2;
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    z-index: 1;
  }
  .${id}-progress {
    background-color: ${(p) => p.color};
    width: ${(p) => p.progress}%;
    transition: width ${THEME.trans.sm};
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    z-index: 2;
  }
  .${id}-progress-perc {
    background: none;
    padding: ${(p) => (p.showProgress ? THEME.padding.xs : "10px")} 0;
    z-index: 3;
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    color: ${(p) => (p.progress < 49 ? "black" : "#fff")};
    font-weight: bold;
    opacity: 0.9;
    text-shadow: ${(p) =>
      p.progress < 49 ? "none" : "1px 1px 1px rgba(0, 0, 0, 0.6)"};
    .${id}-label {
      padding-left: ${THEME.padding.md};
    }
  }
`;

export default ProgressBar;
