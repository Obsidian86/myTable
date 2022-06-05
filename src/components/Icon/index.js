import React from 'react';
import styled from 'styled-components';
import THEME from '../../styles/theme';

export default ({ icon, circle, rotate = 0 }) => {
    const [iconRotate, updateIconRotate] = React.useState(rotate)

    React.useEffect(() => {
        iconRotate !== rotate && updateIconRotate(rotate)
    }, [iconRotate, rotate, icon, circle])

    return <StyledIcon
        circle={circle}
        rotate={iconRotate}
    >
        { icon }
    </StyledIcon>
}

const StyledIcon = styled.i`
    font-style: normal;
    border-radius: ${p => p.circle ? '50%' : '0'};
    font-weight: 'bold';
    text-align: center;
    display: inline-block;
    transition: transform ${THEME.trans.sm};
    transform: rotate(${p => p.rotate}deg);
`

