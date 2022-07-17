import React from "react";
import ContentCard from ".";
import Cols from "../Cols";
import Icon from "../Icon";
import Well from "../Well";
import ProgressBar from "../ProgressBar";
import THEME from "../../styles/theme";
import styled from "styled-components";

export default {
  title: "ContentCard",
  component: ContentCard,
  argTypes: {},
};

const data = [
  {
    name: "Aciejf Mjuldr",
    progress: "State 2",
    descr: "Wluui dklk ckljaslk nnceojasio",
  },
  {
    name: "Aciejf Mjuldr",
    progress: "State 2",
    descr: "Wluui dklk ckljaslk nnceojasio",
  },
  {
    name: "Aciejf Mjuldr",
    progress: "State 2",
    descr: "Wluui dklk ckljaslk nnceojasio",
  },
];

const BaseContentCard = (args) => (
  <StyledComponent>
    {data.map((cardData) => (
      <ContentCard {...args} icon={<Icon icon="x" />}>
        <>
          <Cols cols={2}>
            <span className="t-bold p-y-sm">alksdasdlj</span>
            <span className="p-y-sm">alksdasdlj</span>
            <span className="p-y-sm">alksdasdlj</span>
            <span className="p-y-sm">alksdasdlj</span>
            <hr />
            <span className="p-y-sm">alksdasdlj</span>
            <span className="p-y-sm">alksdasdlj</span>
          </Cols>
          <Well title="Content title">well content here</Well>
          <ProgressBar
            progress={80}
            color={THEME.theme.bad}
            label={cardData.progress}
          />
          <span className="p-y-sm">alksdasdlj</span>
        </>
      </ContentCard>
    ))}
  </StyledComponent>
);

const StyledComponent = styled.div`
  background-color: #d9d9d9;
  height: 100vh;
  margin: 0;
  padding: 10px 0;
`;

export const BasicContentCard = BaseContentCard.bind({});
BasicContentCard.args = {
  label: "Basic ContentCard",
};
