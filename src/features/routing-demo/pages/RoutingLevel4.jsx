import { useParams } from "react-router-dom";

const RoutingLevel4 = () => {
  const { levelId } = useParams();
  return <div style={{ textAlign: "left" }}>Final level {levelId}</div>;
};

export default RoutingLevel4;
