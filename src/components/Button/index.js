import styled from 'styled-components'
import klass from '../../functions/klass'
import THEME from '../../styles/theme'
import PropTypes from 'prop-types';

const id = '__button'

const Button = ({
    label = 'Submit',
    icon = null,
    onClick,
    color = 'good',
    circle = false
}) => {
    return <StyledButton
        onClick={onClick}
        { ...klass({ 'with-icon': !!icon, circle }, color, id) }
    >
        { icon && <span { ...klass({}, 'icon', id) }>{ icon }</span>}
        {label}
    </StyledButton>
}

Button.proptypes = {
    label: PropTypes.string,
    icon: PropTypes.node,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(['good', 'bad', 'clear']),
    circle: PropTypes.bool,
}

export default Button

const StyledButton = styled.button`
    border: none;
    border-radius: ${THEME.radius.sm};
    background: none;
    background-color: ${THEME.theme.good};
    color: ${THEME.theme.bright};
    padding: ${THEME.padding.md} ${THEME.padding.md};
    transition: all ${THEME.trans.sm};
    font-weight: bold;
    cursor: pointer;
    .${id}-icon {
        margin-right: ${THEME.margin.md};
        transition: margin ${THEME.trans.sm};
    }
    &.${id}-circle {
        border-radius: 50%;
        height: 2rem;
        width: 2rem;
    }
    &:hover {
        background-color: ${THEME.theme.goodAction};
        &.${id}-with-icon {
            padding-right: ${THEME.padding.sm};
        }
        .${id}-icon {
            margin-right: ${THEME.margin.lg};
        }
    }
    &.${id}-bad {
        background-color: ${THEME.theme.bad};
        &:hover {
            background-color: ${THEME.theme.badAction};
        }
    }
    &.${id}-clear {
        background: none;
        color: ${THEME.theme.medium};
        &:hover {
            background-color: ${THEME.theme.mediumLight};
        }
    }
`