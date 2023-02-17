import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body{
        background-color: ${props => props.theme.pallet.light200};
    }

    a{
        text-decoration: none;
    }
`

export default Global;