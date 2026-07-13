import { delay } from "../../../utils/delay";
import { PRODUCT_API } from "../constants/api";

export async function getProducts() {
  await delay(5000);
  const response = await fetch(PRODUCT_API.PRODUCTS);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}
