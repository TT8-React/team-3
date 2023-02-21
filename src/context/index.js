import { createContext, useContext } from "react";
export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => { },
});

export const useAuth = () => {
  return useContext(AuthContext);
}
