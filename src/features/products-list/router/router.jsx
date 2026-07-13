import ErrorPage from "../../../pages/ErrorPage";
import { StoreProvider } from "../context/StoreContext";
import ProductLayout from "../layout/ProductLayout";
import ProductDetails from "../pages/ProductDetails";

export const productRouter = [
  {
    path: "product-list",
    element: (
      <StoreProvider>
        <ProductLayout />
      </StoreProvider>
    ),
    children: [
      {
        path: ":productId",
        element: <ProductDetails />,
        errorElement: <ErrorPage />,
      },
    ],
  },
];
