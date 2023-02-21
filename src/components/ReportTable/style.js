import styled from "styled-components";

const Style = styled.div`
    table{
        width:100%;
    }

    .report_table_row{
        display: grid;
        grid-template-columns: 100px 1fr;
        td{
            border: 1px solid #D0D0D0;
            padding: 16px 20px;
        }
    }
`

export default Style;