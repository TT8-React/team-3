import styled from "styled-components";
import getColorFromTheme from "../../utils/getColorFromTheme";

const Style = styled.span`
    a{
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        text-decoration: none;
        color: ${props => props.color ? getColorFromTheme(props.color, props.theme) : "inherit"};

        &.active{
            font-weight: 700;
        }
    }
`

export default Style;