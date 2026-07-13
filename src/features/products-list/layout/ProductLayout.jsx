import { Outlet } from "react-router-dom";
import ProductList from "../pages/ProductList";

const ProductLayout = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div
        style={{
          width: "350px",
          borderRight: "1px solid gray",
          padding: "10px",
        }}
      >
        <ProductList />
      </div>
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default ProductLayout;
