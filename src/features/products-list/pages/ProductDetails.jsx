import { useParams, useSearchParams } from "react-router-dom";
import { useStore } from "../context/StoreContext";

const ProductDetails = () => {
  const { productId } = useParams();
  const [searchParams] = useSearchParams();
  const { state } = useStore();
  const product = state.products.find((p) => p.id === Number(productId));

  console.log("product", product);
  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "left",
        direction: "column",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flexBasis: "100%", alignItems: "flex-start" }}>
        Name: {product.title}
      </div>
      <div style={{ flexBasis: "100%", alignItems: "flex-start" }}>
        Brand: {product.brand}
      </div>
      <div style={{ flexBasis: "100%" }}>Price: {product.price}</div>
      <div style={{ flexBasis: "100%" }}>Category: {product.category}</div>
    </div>
  );
};

export default ProductDetails;
