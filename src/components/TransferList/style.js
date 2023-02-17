import styled from "styled-components";

const Style = styled.div`
    display: grid;
    grid-template-columns: 1fr 150px 1fr;

    .move_buttons{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        
        button{
            padding: 15px;
            background: ${props => props.theme.pallet.dark};
            border-radius: 7px;
            cursor: pointer;
            display: grid;
            place-items: center;
            transition: 0.3s all ease-in-out ;
            &:hover{
                filter: brightness(50);
            }
        }
    }
`

export default Style;