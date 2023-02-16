import styled from "styled-components";

const Style = styled.div`
    background-color: ${props => props.theme.pallet.gray400};
    width: 17%;
    height: 100vh;
    padding: 20px;
    position: fixed;
    left: 0;
    top: 0;

    .logo_container{
        display: flex;
        justify-content: center;
        margin-bottom: 90px;
    }
`

export default Style;