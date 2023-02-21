//themes and global styles
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./global/themes";
import Global from "./global/global";

// routes
import Router from "./routes";

// Error Boundary
import ErrorBoundary from "./components/ErrorBoundary";
import { AuthContext } from "./context";
import { useEffect, useState } from "react";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    localStorage.getItem("token") && setAuthenticated(true);
  }, []);
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Global />
        <ErrorBoundary>
          <AuthContext.Provider value={[authenticated, setAuthenticated]}>
            <Router />
          </AuthContext.Provider>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}

export default App;
