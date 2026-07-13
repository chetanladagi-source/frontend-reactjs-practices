import { Link, Outlet } from "react-router-dom";

const RoutingLevel3 = () => {
  return (
    <div style={{ textAlign: "left" }}>
      <ul>
        <li>
          <Link to={"reached"}>Routing level 4</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default RoutingLevel3;
