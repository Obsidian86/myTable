import React from 'react';
import styled from 'styled-components';
import klass from '../../functions/klass';
import THEME from '../../styles/theme';
import Button from '../Button';
import Icon from '../Icon';

const id = '__modal'

export default ({
    children,
    onClose,
    title,
    onConfirm,
    showCancel = false,
}) => {
    const [mounted, updateMounted] = React.useState(false)
    const [unMounted, updateUnMounted] = React.useState(false)

    React.useEffect(() => {
        !mounted && !unMounted && setTimeout(() => {
            updateMounted(true)
        }, 1)
    })

    const handleCloseClick = () => {
        updateUnMounted(true)
        updateMounted(false)
        setTimeout(() => onClose(), 100)
    }

    const handleConfirmClick = () => {
        onConfirm?.()
        handleCloseClick()
    }

    return <StyledModal {...klass({ 'mounted': mounted }, '', id)}>
        <div {...klass({}, 'shadow', id)} onClick={handleCloseClick} />
        <div {...klass({}, 'content', id)}>
            {title && <div {...klass({}, 'header section', id)}>
                <span {...klass({}, 'title', id)}>{title}</span>
                <Button
                    label='x'
                    onClick={handleCloseClick}
                    color='clear'
                    circle
                />
            </div>}
            <div {...klass({}, 'section body', id)}>{ children }</div>
            {
                (showCancel || onConfirm) &&
                    <div {...klass({}, 'section footer', id)}>
                        {showCancel && <Button label='Cancel' color='bad' onClick={handleCloseClick} />}
                        {onConfirm && <Button label='Confirm' onClick={handleConfirmClick} />}
                    </div>
            }
        </div>
    </StyledModal>
}

const StyledModal = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position:  fixed;
    .${id}-shadow {
        width: 100%;
        height: 100vh;
        background-color: #000;
        opacity: 0;
        position: fixed;
        top: 0;
        left: 0;
        transition: all ${THEME.trans.sm};
        z-index: 10;
    }
    .${id}-content {
        margin-top: -1200px;
        background-color: #fff;
        box-shadow: ${THEME.shadow.md};
        border-radius: ${THEME.radius.xl};
        z-index: 11;
        transition: margin ${THEME.trans.sm};
        min-width: 450px;
        .${id}-section {
            padding: ${THEME.padding.lg} ${THEME.padding.lg};
        }
        .${id}-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid ${THEME.theme.mediumLight};
            .${id}-title {
                color: ${THEME.theme.medium};
            }
        }
    }
    .${id}-footer {
        display: flex;
        justify-content: flex-end;
        button {
            margin-left: ${THEME.margin.lg};
        }
    }
    &.${id}-mounted {
        .${id}-shadow {
            opacity: .2;
        }
        .${id}-content {
            margin-top: 0;
        }
    }
`
