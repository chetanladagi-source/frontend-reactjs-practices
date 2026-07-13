import { Outlet } from "react-router-dom";

const RouterLayout = () => {
  return (
    <div>
      <h2>Welcome to Routing demo</h2>
      <Outlet />
    </div>
  );
};

export default RouterLayout;
