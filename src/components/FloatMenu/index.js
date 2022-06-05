import { useState, useEffect } from 'react'; 
import styled from "styled-components";
import klass from '../../functions/klass';
import THEME from '../../styles/theme'

const FloatMenu = ({ children, right }) => {
  const [mounted, updateMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      !mounted && updateMounted(true)
    }, 1)
  })

  return <StyledFloatMenu
    { ...klass({ 'menu-mounted' : mounted  }, 'drop-down-menu')}
    right={right}
  >
    {children}
  </StyledFloatMenu>
}

const StyledFloatMenu = styled.div`
  position: absolute;
  left: ${p => p.right ? 'auto' : '1px'};
  right: ${p => p.right ? '1px' : 'auto'};
  z-index: 5;
  background-color: #fff;
  box-shadow: ${THEME.shadow.sm};
  text-align: left;
  width: 0;
  transition: all ${THEME.trans.xsm};
  overflow: hidden;
  border-radius: ${THEME.radius.sm};
  max-height: 0;
  &.menu-mounted {
    width: 250px;
    max-height: 100vh;
  }
`;

export default FloatMenu;
