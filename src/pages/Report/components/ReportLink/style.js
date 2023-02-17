import styled from "styled-components";

const Style = styled.div`
    width: 100%;
    background: ${props => props.theme.pallet.gray300};
    border-radius: 8px;
    padding: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    .rectangle{
        width: 20%;
        aspect-ratio: 1/1;
        background: ${props => props.theme.pallet.gray200};
        margin-bottom: 40px;
    }
`

export default Style;