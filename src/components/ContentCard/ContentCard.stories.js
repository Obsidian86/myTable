import React from 'react';
import ContentCard from '.';

export default {
  title: 'ContentCard',
  component: ContentCard,
  argTypes: {
  }
};

const BaseContentCard = args => <div style={{
  backgroundColor: 'gray',
  height: '100vh',
  margin: '0',
  padding: '10px 0'
}}>
    <ContentCard {...args} />
  </div>

export const BasicContentCard = BaseContentCard.bind({})
BasicContentCard.args = {
  label: 'Basic ContentCard'
}
