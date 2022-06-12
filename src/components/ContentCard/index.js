import styled from 'styled-components'
import klass from '../../functions/klass'
import THEME from '../../styles/theme'
import PropTypes from 'prop-types';

const id = '__ContentCard'

const ContentCard = ({
}) => {
    return <StyledContentCard>
        <div {...klass({}, 'icon', id)}>x</div>
        <div {...klass({}, 'content', id)}>
            <span>alksdasdlj</span>
            <span>alksdasdlj</span>
            <span>alksdasdlj</span>
            <span>alksdasdlj</span>
            <span>alksdasdlj</span>
        </div>
    </StyledContentCard>
}

ContentCard.proptypes = {
}

export default ContentCard


const iconWidth = '50px'
const StyledContentCard = styled.div`
    width: 96%;
    margin: ${THEME.margin.lg} auto;
    background-color: #fff;
    border-radius: ${THEME.radius.md};
    display: flex;
    justify-content: space-between;
    box-shadow: ${THEME.shadow.sm};
    .${id}-icon {
        background-color: ${THEME.theme.bad};
        color: ${THEME.theme.badDisabled};
        font-weight: bold;
        font-size: 1.1rem;
        display: flex;
        padding: ${THEME.padding.sm} 0;
        align-items: center;
        justify-content: center;
        width: ${iconWidth};
        border-radius: ${THEME.radius.md} 0 0 ${THEME.radius.md};
    }
    .${id}-content {
        width: calc(100% - ${iconWidth});
        padding: ${THEME.padding.lg};
        display: flex;
        flex-wrap: wrap;
        & span {
            width: 50%;
        }
    }
`