import { createGlobalStyle, css } from "styled-components";
import THEME from "./theme";

const sizes = ["xs", "sm", "md", "lg", "xl"];

const marginsPaddings = css`
  ${sizes.map(
    (size) => `
      .p-${size} {
        padding: ${THEME.padding[size]};
      }
      .p-y-${size} {
        padding-top: ${THEME.padding[size]};
        padding-bottom: ${THEME.padding[size]};
      }
      .m-${size} {
        margin: ${THEME.margin[size]};
      }
      .m-y-${size} {
        margin-top: ${THEME.margin[size]};
        margin-bottom: ${THEME.margin[size]};
      }
    `
  )}
`;

const text = css`
  .t-bold {
    font-weight: bold;
  }
`;

export const bodyStyles = css`
  font-size: 14px;
  font-family: sans-serif;
  hr {
    width: 100%;
    display: block;
    border: none;
    border-bottom: 1px solid ${THEME.theme.mediumLight};
    padding: 0;
    margin: ${THEME.margin.md} 0;
  }
`;

export const GlobalStyle = createGlobalStyle`
 body {
  ${marginsPaddings}
  ${bodyStyles}
  ${text}
 }`;
