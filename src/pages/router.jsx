import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import HighOrderComponentDemo from "./HighOrderComponent";
import FormDemo from "./FormDemo";
import RoutingDemo from "./RoutingDemo";
import HomePageLayout from "../layout/HomePageLayout";
import Login from "./Login";
import withAuth from "../components/ProtectedAuth";
import ProductsLayout from "../layout/ProductsLayout";
import { productRouter } from "../features/products-list/router/router";
import ErrorPage from "./ErrorPage";

const ProtectedHomePageLayout = withAuth(HomePageLayout);

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedHomePageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/routing-demo",
        element: <RoutingDemo />,
      },
      {
        path: "/high-order-component-demo",
        element: <HighOrderComponentDemo />,
      },
      {
        path: "/form-demo",
        element: <FormDemo />,
      },
      {
        path: "/products-demo",
        element: <ProductsLayout />,
        children: [...productRouter],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
