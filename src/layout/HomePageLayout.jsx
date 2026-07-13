import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const HomePageLayout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <hr />
      <div style={{ textAlign: "left" }}>
        <button
          onClick={() => navigate(-1)}
          style={{ textDecoration: "none", fontWeight: "normal" }}
        >
          {"< "}Back
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default HomePageLayout;
