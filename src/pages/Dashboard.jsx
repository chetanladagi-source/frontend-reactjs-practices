import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Welcome to Dashboard</h2>
      <div
        style={{
          textAlign: "left",
        }}
      >
        React Practices
        <ul>
          <li>
            <Link to={'/routing-demo'}>Routing demo</Link>
          </li>
          <li>
            <Link to={'/high-order-component-demo'}>High Order Component demo</Link>
          </li>
          <li>
            <Link to={'/form-demo'}>Form demo</Link>
          </li>
          <li>
            <Link to={'/products-demo/product-list'}>Fetch Products demo</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
