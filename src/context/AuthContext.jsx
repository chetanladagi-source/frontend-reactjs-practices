import { createContext, useContext, useState } from "react";
import { validateLogin } from "../services/AuthService";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function login(data) {
    try {
      const response = await validateLogin(data);
      setIsAuthenticated(true);
      return response;
    } catch (error) {
      throw {
        message: error.message,
      };
    }
  }

  function logout() {
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
