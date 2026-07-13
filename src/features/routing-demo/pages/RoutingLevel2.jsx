import { Link } from "react-router-dom";

const RoutingLevel2 = () => {
  return (
    <div style={{ textAlign: "left" }}>
      <ul>
        <li>
          <Link to={"routing-level-3"}>Routing level 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default RoutingLevel2;
