import React from 'react';
import Button from '.';
import Icon from '../Icon';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      options: ['good', 'bad', 'clear'],
    }
  }
};

const BaseButton = args => <Button {...args} />

export const BasicButton = BaseButton.bind({})
BasicButton.args = {
  label: 'Basic button'
}

export const ButtonWithIcon = BasicButton.bind({})
ButtonWithIcon.args = {
  icon: <Icon icon={<>x</>} circle />,
  label: 'Button with icon'
}

export const RedButtonWithIcon = BasicButton.bind({})
RedButtonWithIcon.args = {
  icon: <Icon icon={<>x</>} circle />,
  label: 'Red Button with icon',
  color: 'bad'
}