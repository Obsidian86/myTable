import React from "react";
import ContentCard from ".";
import Icon from "../Icon/";

export default {
  title: "ContentCard",
  component: ContentCard,
  argTypes: {},
};

const BaseContentCard = (args) => (
  <div
    style={{
      backgroundColor: "#d9d9d9",
      height: "100vh",
      margin: "0",
      padding: "10px 0",
    }}
  >
    <ContentCard {...args} icon={<Icon icon="x" />} />
  </div>
);

export const BasicContentCard = BaseContentCard.bind({});
BasicContentCard.args = {
  label: "Basic ContentCard",
};
