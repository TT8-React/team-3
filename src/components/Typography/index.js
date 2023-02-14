import styled from "styled-components";

/*
        ! how to use
        <H1
          weight="400"
          weight="500"
          weight="600"
          weight="700"
          -----------
          color="gray/100"
          color="gray/200"
          color="gray/300"
          color="gray/400"
          color="light"
          color="dark"
          -----------
          margin="10px 10px 20px 5px"
          ! the same as margin shortcut in css
          padding="10px 10px 20px 5px"
          ! the same as padding shortcut in css
          -----------
          align="center"
          align="left"
          align="right"
          -----------
          transform="uppercase"
          transform="lowercase"
          transform="capitalize"
          -----------
          lineHeight="250"
          ! number in px not %
        >hello world</H1>
*/

/*
! font sizes 
  H1 -> font-size: 36px;
  H2 -> font-size: 24px; === 23px
  H3 -> font-size: 22px;
  H4 -> font-size: 20px; === 19px
  H5 ->  font-size: 18px; 
  body1 -> font-size: 16px;  
  body2 -> font-size: 15px;
  body3 -> font-size: 14px;
*/

const Typography = (props) => {
    const result = `
        color: ${props.color ? getColorsFromTheme(props.color, props.theme) : props.theme.pallet.dark};
        ${props.margin ? "margin: " + props.margin + ";" : ""}
        ${props.align ? "text-align: " + props.align + ";" : ""}
        ${props.padding ? "padding: " + props.padding + ";" : ""}
        ${props.weight ? "font-weight: " + props.weight + ";" : ""}
        ${props.transform ? "text-transform: " + props.transform + ";" : ""}
        ${props.lineHeight ? "line-height:" + props.lineHeight + "px;" : ""}
        `
    return result;
}

const getColorsFromTheme = (color, theme) => {
    if (color === "light") return theme.pallet.light
    if (color === "dark") return theme.pallet.dark
    if (color === "gray/100") return theme.pallet.gray100
    if (color === "gray/200") return theme.pallet.gray200

    if (color === "gray/300") return theme.pallet.gray300
    if (color === "gray/400") return theme.pallet.gray400
}

export const H1 = styled.h1`
    text-transform:lowercase;
    text-transform:capitalize;
    font-size: ${props => props.theme.typography.h1};
    font-weight: 700;
    ${props => Typography(props)}
`

export const H2 = styled.h2`
    font-size: ${props => props.theme.typography.h2};
    font-weight: 700;
    ${props => Typography(props)}
`

export const H3 = styled.h3`
    font-size: ${props => props.theme.typography.h3};
    font-weight: 600;
    ${props => Typography(props)}
`

export const H4 = styled.h4`
    font-size: ${props => props.theme.typography.h4};
    font-weight: 600;
    ${props => Typography(props)}
`

export const H5 = styled.h5`
    font-size: ${props => props.theme.typography.h5};
    font-weight: 400;
    ${props => Typography(props)}
`

export const Body1 = styled.p`
    font-size: ${props => props.theme.typography.body1};
    font-weight: 400;
    ${props => Typography(props)}
`

export const Body2 = styled.p`
    font-size: ${props => props.theme.typography.body2};
    font-weight: 400;
    ${props => Typography(props)}
`

export const Body3 = styled.p`
    font-size: ${props => props.theme.typography.body3};
    ${props => Typography(props)}

`

export const Span = styled.span`
    font-size: inherit;
    ${props => Typography(props)}
`