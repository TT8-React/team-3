import styled from "styled-components";

const Style = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 30px;
    border-top: 1px solid ${props => props.theme.pallet.gray600};
    border-bottom: 1px solid ${props => props.theme.pallet.gray600};
    cursor: pointer;

    .to_left_arrow{
        transform: rotateY(180deg);
        margin-inline-end: 15px;
    }

    img{
        cursor: pointer;
    }
`

export default Style;