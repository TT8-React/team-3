import styled from "styled-components";

const Style = styled.div`
    padding: 25px 50px;
    
    .back_container{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 75px;
    }

    .details{
        padding: 30px;
        background: ${props => props.theme.pallet.light100};
        border: 1px solid ${props => props.theme.pallet.gray500};
        border-radius: 10px;

        .one-detail{
            margin-bottom: 18px;
        }
    }
`

export default Style;