import { useState, useEffect } from 'react'; 
import styled from "styled-components";

const FloatMenu = ({ children, right }) => {
  const [mounted, updateMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      !mounted && updateMounted(true)
    }, 1)
  })

  return <StyledFloatMenu
    className={`drop-down-menu ${mounted ? 'menu-mounted' : ''}`}
    right={right}
  >
    {children}
  </StyledFloatMenu>
}

const StyledFloatMenu = styled.div`
  font-size: 14px;
  position: absolute;
  left: ${p => p.right ? 'auto' : '1px'};
  right: ${p => p.right ? '1px' : 'auto'};
  top: 38px;
  z-index: 5;
  background-color: #fff;
  box-shadow: 0 0 3px gray;
  text-align: left;
  width: 0;
  transition: all .1s;
  overflow: hidden;
  max-height: 0;
  &.menu-mounted {
    width: 250px;
    max-height: 100vh;
  }
`;

export default FloatMenu;
