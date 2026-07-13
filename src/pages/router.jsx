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
import RouterLayout from "../layout/RouterLayout";
import RoutingNested from "../features/routing-demo/pages/RoutingLevel2";
import RoutingNestedLayout from "../features/routing-demo/layout/RouterLayout";
import { routerNestedRouter } from "../features/routing-demo/router/router";
import formRouter from "../features/form-demo/router/router";

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
        element: <RouterLayout />,
        children: [...routerNestedRouter],
      },
      {
        path: "/high-order-component-demo",
        element: <HighOrderComponentDemo />,
      },
      {
        path: "/form-demo",
        element: <FormDemo />,
        children: [...formRouter],
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
