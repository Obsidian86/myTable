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
      position: 'relative',
      backgroundColor: '#d9d9d9',
      padding: '20px'
    }}
  >
    <div style={{ position: 'relative' }}>
      <Button
        onClick={() => updatedOpen(!open)}
        label={open ? 'Close' : 'Open'}
        color={open ? 'bad' : 'good'}
        icon={ <Icon icon='v' rotate={open ? -180 : 0}></Icon> }
      />
      {open && 
        <FloatMenu>
          <ul>
            {
              [1,2,3,4,5,6,7,8,9,10,11,12,13].map(num =>
                <li
                  key={num}
                  style={{
                    padding: '5px 0'
                  }}
                >
                  {num}
                </li>
              )
            }
          </ul>
        </FloatMenu>
      }
    </div>
  </div>
}