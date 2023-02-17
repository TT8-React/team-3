import styled from "styled-components";

const Style = styled.div`
    background: ${props => props.theme.pallet.light100};
    border: 1px solid ${props => props.theme.pallet.gray600};
    border-radius: 10px;
`

export default Style;