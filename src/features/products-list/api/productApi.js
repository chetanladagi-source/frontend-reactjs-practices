import { getProducts } from "../services/productService.js";


export async function fetchProducts() {
  const products = await getProducts();

  return products.products.map((product) => ({
    id: product.id,
    title: product.title,
    brand: product.brand,
    price: product.price,
    category: product.category,
  }));
}
