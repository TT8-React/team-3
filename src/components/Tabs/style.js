import styled from "styled-components";

const Style = styled.div`
    .tabs_toggle{
        width: 80%;
        margin: 55px auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: center;

        .tab_btn{
            padding: 23px;
            border: 1px solid #8F8F8F;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            cursor: pointer;

            &.active{
                background: #EBEBF0;
            }
        }
    }
`

export default Style;