import React from 'react';
import ContentCard from '.';
import Icon from '../Icon';

export default {
  title: 'ContentCard',
  component: ContentCard,
  argTypes: {
    color: {
      options: ['good', 'bad', 'clear'],
    }
  }
};

const BaseContentCard = args => <ContentCard {...args} />

export const BasicContentCard = BaseContentCard.bind({})
BasicContentCard.args = {
  label: 'Basic ContentCard'
}
