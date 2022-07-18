import React from "react";
import styled, { css } from "styled-components";
import Icon from "../Icon";
import theme from "../../styles/theme";
import klass from "../../functions/klass";

const id = "__Input";

const Input = ({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  clear = true,
  inline,
}) => {
  const [xMounted, updateXMounted] = React.useState(false);
  const fieldId = React.useId();

  React.useEffect(() => {
    updateXMounted(value && value !== "");
  }, [value]);

  const handleFieldChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <StyledInput inline={inline}>
      <label htmlFor={fieldId}>{label}</label>
      <span className={`${id}-input-container`}>
        <input
          id={fieldId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleFieldChange}
        />
        {clear && (
          <span
            {...klass({ mounted: xMounted }, `input-clear`, id)}
            onClick={() => handleFieldChange({ target: { value: "" } })}
          >
            <Icon icon="x" circle color={theme.theme.bad} />
          </span>
        )}
      </span>
    </StyledInput>
  );
};

export default Input;

const paddingX = theme.padding.md;
const paddingY = theme.padding.lg;

const inlinelabel = css`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  width: 100%;
  box-shadow: ${theme.shadow.sm};
  align-items: center;
  border-radius: ${theme.radius.md};
  padding: 0;
  margin-top: ${theme.margin.md};
  .${id}-input-container {
    height: 100%;
    position: relative;
    flex: 1;
    input[type="text"] {
      width: calc(100% - ${theme.padding.lg});
      box-shadow: none;
      border: none;
      margin: 0;
      background: none;
      padding: ${theme.padding.lg} 0 ${theme.padding.lg} ${theme.padding.lg};
      border-radius: 0 ${theme.radius.md} ${theme.radius.md} 0;
    }
    .${id}-input-clear {
      top: 12px;
    }
  }
  label {
    margin: 0;
    padding: ${theme.padding.xs} ${theme.padding.lg};
    border-right: 1px solid ${theme.theme.mediumLight};
  }
`;

const columnLabel = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  .${id}-input-container {
    width: 100%;
    position: relative;
    display: block;
    input[type="text"] {
      border-radius: ${theme.radius.md};
      border: none;
      box-shadow: ${theme.shadow.sm};
      width: calc(100% - (${paddingX} * 2));
      padding: ${paddingY} ${paddingX};
      margin: ${theme.margin.sm} auto;
    }
    .${id}-input-clear {
      top: calc(${paddingY} + 5px);
    }
  }
  label {
    padding: ${theme.padding.xs};
    margin-top: ${theme.margin.md};
  }
`;

const StyledInput = styled.span`
  overflow: hidden;
  label {
    color: ${theme.theme.medium};
  }
  .${id}-input-clear {
    position: absolute;
    right: -10000px;
    cursor: pointer;
    opacity: 0;
    transition: opacity ${theme.trans.lg};
    &.${id}-mounted {
      right: calc(${paddingX} + 5px);
      opacity: 1;
    }
  }
  ${(p) => (p.inline ? inlinelabel : columnLabel)}
`;
