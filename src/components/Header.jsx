import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const linkStyle = {
  textDecoration: "none",
  fontWeight: "normal",
};

const navBarWrapper = {
  display: "flex",
  justifyContent: "space-between",
};

const Header = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div style={navBarWrapper}>
      <div>
        <Link to={"/"} style={linkStyle}>
          Home
        </Link>
      </div>
      <div>
        <Link onClick={handleLogout} style={linkStyle}>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Header;
