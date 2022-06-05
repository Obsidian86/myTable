import React from 'react';
import Button from '.';
import Icon from '../Icon';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () =>
    <Button>Button</Button>;

export const WithIcon = () =>
    <Button
      icon={<Icon icon={<>x</>} circle />}
    >
      Button
    </Button>;