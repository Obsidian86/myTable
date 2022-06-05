import React from 'react';
import FloatMenu from '.';
import Button from '../Button'
import Icon from '../Icon'

export default {
  title: 'FloatMenu',
  component: FloatMenu,
};

export const Primary = () => {
  const [open, updatedOpen] = React.useState(false)
  return <div
    style={{
      width: '85%',
      margin: '0 auto',
      position: 'relative'
    }}
  >
    <Button
      onClick={() => updatedOpen(!open)}
      label={open ? 'Close' : 'Open'}
      color={open ? 'bad' : 'good'}
      icon={ <Icon icon='v' rotate={open ? -180 : 0}></Icon> }
    />
    {open && 
      <FloatMenu>
        <div>123</div>
      </FloatMenu>
    }
  </div>
}