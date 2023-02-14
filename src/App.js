import {Routes, Route} from 'react-router-dom';
import styled from 'styled-components'

//themes and global styles 
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './global/themes';
import Global from './global/global';

// routes
import MainRoutes from './routes';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Global />
        <Test>Team 3</Test>
        <Routes>
          <Route path="/*" element={<MainRoutes />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

const Test = styled.div`
  color: ${({theme}) => theme.pallet.blueColor};
`

export default App;
