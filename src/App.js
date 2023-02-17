//themes and global styles
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./global/themes";
import Global from "./global/global";

// routes
import Router from "./routes";

// Error Boundary
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Global />
        <ErrorBoundary>
          <Router />
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}

export default App;
