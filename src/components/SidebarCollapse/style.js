import styled from "styled-components";

const Style = styled.div`
    .head{
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        user-select: none;
        transition:0.2s all ease-in-out;
        ${props => props.isCollapseOpen ? "margin-bottom: 20px;" : "margin-bottom: 25px;"}
        
    }

    .body{
        padding-inline-start: 25px;
        overflow: hidden;
        transition:0.3s all ease-in-out;
        ${props => props.isCollapseOpen ? "max-height: 500px;" : "max-height: 0;"}
    }
`

export default Style;