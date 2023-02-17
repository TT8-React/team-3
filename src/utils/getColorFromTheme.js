const getColorFromTheme = (color, theme) => {
    if (color === "light") return theme.pallet.light
    if (color === "dark") return theme.pallet.dark
    if (color === "gray/100") return theme.pallet.gray100
    if (color === "gray/200") return theme.pallet.gray200

    if (color === "gray/300") return theme.pallet.gray300
    if (color === "gray/400") return theme.pallet.gray400
}

export default getColorFromTheme;
