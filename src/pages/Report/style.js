import styled from "styled-components";

const Style = styled.div`
    .back_container{
        padding: 25px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .links{
        padding: 35px 50px;
        display: grid;
        grid-template-columns: repeat(3 , 1fr);
        gap: 60px;
    }
`

export default Style;