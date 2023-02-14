import styled from 'styled-components'

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './global/themes';
import Global from './global/global';
import { Body1, Body2, Body3, H1, H2, H3, H4, H5 } from './components/Typography';

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
`

export default App;
