import styled from "styled-components";

const Style = styled.div`
    
    .back_container{
        padding: 25px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .inputs__grid{
        padding: 25px 50px;
        display: grid;
        grid-template-columns: repeat(3 , 1fr);
        gap: 30px;
    }

    .submit_container{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
        margin-bottom: 80px;
    }
`

export default Style;