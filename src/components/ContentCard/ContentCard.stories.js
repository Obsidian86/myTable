import React from "react";
import ContentCard from ".";
import Cols from "../Cols";
import Icon from "../Icon/";
import Well from "../Well";

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
    <ContentCard {...args} icon={<Icon icon="x" />}>
      <>
        <Cols cols={2}>
          <span>alksdasdlj</span>
          <span>alksdasdlj</span>
          <span>alksdasdlj</span>
          <span>alksdasdlj</span>
        </Cols>
        <Well>well content here</Well>
        <span>alksdasdlj</span>
      </>
    </ContentCard>
  </div>
);

export const BasicContentCard = BaseContentCard.bind({});
BasicContentCard.args = {
  label: "Basic ContentCard",
};
