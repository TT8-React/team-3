import styled from "styled-components";

const Style = styled.div`
    
    .upload_input{
        opacity: 0.001;
    }

    .upload_label{
        cursor: pointer;
        padding: 15px 20px;
        background-color: ${props => props.theme.pallet.gray400};
        border: 1px solid ${props => props.theme.pallet.gray500};
        border-radius: 50px;
        display: flex;
        align-items: center;
        max-width: 450px;
        gap: 16px;
    }
`

export default Style;