import RoutingNestedLayout from "../layout/RouterLayout";
import RoutingHome from "../pages/RoutingHome";
import RoutingLevel1 from "../pages/RoutingLevel1";
import RoutingLevel2 from "../pages/RoutingLevel2";
import RoutingLevel3 from "../pages/RoutingLevel3";
import RoutingLevel4 from "../pages/RoutingLevel4";

export const routerNestedRouter = [
  {
    index: true,
    element: <RoutingHome />,
  },
  {
    path: "routing-level-1",
    element: <RoutingNestedLayout />,
    children: [
      {
        index: true,
        element: <RoutingLevel1 />,
      },
      {
        path: "routing-level-2",
        element: <RoutingNestedLayout />,
        children: [
          {
            index: true,
            element: <RoutingLevel2 />,
          },
          {
            path: "routing-level-3",
            element: <RoutingNestedLayout />,
            children: [
              {
                index: true,
                element: <RoutingLevel3 />,
              },
              {
                path: ":levelId",
                element: <RoutingLevel4 />,
              },
            ],
          },
        ],
      },
    ],
  },
];
