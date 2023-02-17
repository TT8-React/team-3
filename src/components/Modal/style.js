import styled from "styled-components";

const Style = styled.div`
    ${props => !props.isOpen ? "display:none;" : ""}
    .modal_closer , .overlay{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .modal_closer {
        z-index: 998;
        cursor: pointer;
    }

    .overlay{
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal{
        background:${props => props.theme.pallet.light};
        box-shadow: 0px 7px 35px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        width: clamp(350px , 46% , 700px);
        pointer-events: auto;
        .head , .body{
            padding: 20px;
        }

        .head{
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid ${props => props.theme.pallet.dark};

            .close{
                border: none;
                outline: none;
                background-color: transparent;
                cursor: pointer;
            }
        }
    }
    
`

export default Style;