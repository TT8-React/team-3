import styled from "styled-components";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./global/themes";
import Global from "./global/global";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Global />
        <Test>Team 3</Test>
      </ThemeProvider>
    </>
  );
}

const Test = styled.div`
  color: ${({ theme }) => theme.pallet.blueColor};
`;

export default App;
