import { RouterProvider } from "react-router-dom";
import router from "./router";
import { AuthProvider } from "../context/AuthContext";

const HomePage = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default HomePage;
