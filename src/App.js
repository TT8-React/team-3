import styled from 'styled-components'

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './global/themes';
import Global from './global/global';
import UploadInput from './components/UploadInput';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Global />
        <Test>Team 3</Test>
        <UploadInput />
      </ThemeProvider>
    </>
  );
}

const Test = styled.div`
  color: ${({ theme }) => theme.pallet.blueColor};
`

export default App;
