//themes and global styles 
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme } from './global/themes';
import Global from './global/global';

// routes
import Router from './routes';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Global />
        <Router />
      </ThemeProvider>
    </>
  );
}

const Test = styled.div`
  color: ${({ theme }) => theme.pallet.blueColor};
`;

export default App;
