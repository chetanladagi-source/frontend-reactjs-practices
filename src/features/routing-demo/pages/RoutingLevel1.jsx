import { Link } from "react-router-dom";

const RoutingLevel1 = () => {
  return (
    <div style={{ textAlign: "left" }}>
      <ul>
        <li>
          <Link to={"routing-level-2"}>Routing level 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default RoutingLevel1;
