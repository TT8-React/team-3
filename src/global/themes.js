/*
  H1 -> font-size: 36px; font-weight: 700;
  H2 -> font-size: 24px; === 23
  H3 -> font-size: 22px;
  H4 -> font-size: 20px; === 19
  H5 ->  font-size: 18px; 
  body1 -> font-size: 16px;  
  body2 -> font-size: 15px;
  body3 -> font-size: 14px;


  font-weight: 400(14px , 15px , 16px) | 500(20px)| 600 (24px , 18px) | 700 (36px , 16px , 18px) 

*/
const typography = {
  h1: "36px",
  h2: "24px",
  h3: "22px",
  h4: "20px",
  h5: "18px",
  body1: "16px",
  body2: "15px",
  body3: "14px",
};

const pallet = {
  gray100: "#4F4F4F",
  gray200: "#A5A5A5",
  gray300: "#D9D9D9",
  gray400: "#EFEFEF",
  dark: "#000000",
  light: "#FFFFFF",
}

export const defaultTheme = {
  typography,
  pallet,
}