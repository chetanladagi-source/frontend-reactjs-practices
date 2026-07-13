import { Link, Outlet } from "react-router-dom";

const RoutingHome = () => {
  return (
    <div style={{ textAlign: "left" }}>
      <ul>
        <li>
          <Link to={"routing-level-1"}>Routing level 1</Link>
        </li>
      </ul>
    </div>
  );
};

export default RoutingHome;
