import React from "react";
import Input from "./";
import ContentCard from "../ContentCard/";
import theme from "../../styles/theme";

export default {
  title: "Input",
  component: Input,
};

const BaseInput = () => {
  const [value, updateValue] = React.useState("");
  const [value2, updateValue2] = React.useState("");
  const args = {};
  return (
    <ContentCard background={theme.theme.offBright}>
      <Input
        label="Input 1"
        placeholder="Input text"
        value={value}
        onChange={(value) => updateValue(value)}
      />
      <Input
        label="Inline input"
        placeholder="Input text"
        value={value2}
        inline
        onChange={(value) => updateValue2(value)}
      />
    </ContentCard>
  );
};

export const BasicInput = BaseInput.bind({});
