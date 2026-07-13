import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login();
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <div style={{ flexBasis: "100%" }}>Login to portal</div>
      <div>
        <button onClick={handleLogin}>Please Login</button>
      </div>
    </div>
  );
};

export default Login;
