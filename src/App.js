
//themes and global styles 
import { ThemeProvider } from 'styled-components';
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


export default App;
