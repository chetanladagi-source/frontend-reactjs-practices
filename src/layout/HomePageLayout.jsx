import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const HomePageLayout = () => {
  return (
    <div>
      <Header/>
      <hr />
      <Outlet />
    </div>
  );
};

export default HomePageLayout;
