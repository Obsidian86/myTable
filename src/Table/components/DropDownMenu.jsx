import { useState } from "react";
import styled from "styled-components";
import { ASC, DESC } from "../constants";
import ScrollingCheckList from "./ScrollCheckList";
import FloatMenu from "./FloatMenu";

const DropDownMenu = ({ attribute, handleUpdateSortOrder, optionsList }) => {
  const [searchText, updateSearchText] = useState("");

  const filteredOptions = Array.from(
    new Set(
      optionsList.filter((option) => {
        if (!option) return null;
        if (searchText === "") return true;
        return `${option}`.includes(searchText);
      })
    )
  );

  return (
    <FloatMenu>
      <StyledDropDownMenu>
        <button onClick={() => handleUpdateSortOrder(attribute, ASC)}>
          Sort A -&gt; Z
        </button>
        <button onClick={() => handleUpdateSortOrder(attribute, DESC)}>
          Sort Z -&gt; A
        </button>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => updateSearchText(e.target.value)}
        />
        <span>
          <span className="link-btn">Select All</span>
          <span className="link-btn" onClick={() => updateSearchText("")}>
            Clear{" "}
          </span>
        </span>
        <ScrollingCheckList
          options={filteredOptions.map((o) => ({ value: o, label: o }))}
          handleChange={(o) => console.log(o)}
          checkedItems={[]}
          maxHeight="200px"
        />
      </StyledDropDownMenu>
    </FloatMenu>
  );
};

const StyledDropDownMenu = styled.span`
  button {
    width: 100%;
    display: block;
    padding: 12px 15px 10px 15px;
    text-align: left;
    &:hover {
      background-color: #f4f4f4;
    }
  }
  input[type="text"] {
    width: calc(90% - 20px);
    margin: 10px auto;
    padding: 8px;
    margin-left: 5%;
    border-radius: 15px;
    border: 1px solid gray;
  }
  & > span {
    display: block;
    width: 100%;
    padding-left: 14px;
    padding-bottom: 12px;
    & > span {
      padding-right: 15px;
      display: inline-block;
    }
  }
`;

export default DropDownMenu;
