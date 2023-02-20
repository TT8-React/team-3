import styled from "styled-components";

const Style = styled.div`
    .popup_closer {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    
    .popup_closer {
        z-index: 998;
        cursor: pointer;
        background: rgba(0, 0, 0, 0.5);
    }

    /*   padding: 15px 36px;
 */

    .popup{
        position: absolute;
        inset-inline-end: 36px;
        /* avatar height + header padding top and bottom*/
        top:calc(57px + 15px * 2);
        background-color: ${props => props.theme.pallet.light};
        z-index: 999;
        border-radius: 5px;
        .popup_content{
            position: relative;
            padding: 20px 16px;
            .arrow_up{
                position: absolute;
                top:0;
                inset-inline-end:20px;
                height: 12px;
                width: 12px;
                background-color:${props => props.theme.pallet.light};
                border-radius: 2px;
                transform: rotateZ(45deg) translateY(-50%);
            }
        }
    }
`

export default Style;