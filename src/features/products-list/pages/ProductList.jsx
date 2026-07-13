import { useEffect, useReducer, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchProducts } from "../api/productApi";
import { ACTIONS } from "../store/reducer";
import { useStore } from "../context/StoreContext";

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const { state, dispatch } = useStore();

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      setIsLoading(true);
      const data = await fetchProducts();
      dispatch({
        type: ACTIONS.FETCH_PRODUCT_SUCCESS,
        products: data,
      });
      setProducts(data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  if (loading) return <div>Loading...</div>;
  return (
    <>
      <h3>Products</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ textAlign: "left" }}>
            <Link to={`${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
