import styled from "styled-components";

const Style = styled.div`

    .toggle_drop_down{
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            padding: 20px;
            background: ${props => props.theme.pallet.gray300};
            border: 1px solid  ${props => props.theme.pallet.dark};
            border-radius: 6px;
    }

    .drop_down_content{
        max-height: 0;
        transition: 0.3s all ease-in-out;
        overflow: hidden;
        padding-inline-start: 33px;
        padding-top: 20px;

        &.open{
            max-height: 100vh;
        }

        .drop_down_item{
            background: ${props => props.theme.pallet.gray300};
            border-radius: 6px;
            padding: 20px 30px;
            margin-bottom: 10px;
        }
    }
`

export default Style;