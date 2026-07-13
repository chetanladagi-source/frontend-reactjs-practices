import FormHomePageLayout from "../layout/FormHomePageLayout";
import FormHomePage from "../pages/FormHomePage";
import ReactHookForm from "../pages/ReactHookForm";

const formRouter = [
  {
    index: true,
    element: <FormHomePage />,
  },
  {
    path: "react-hook-form",
    element: <ReactHookForm />,
  },
];

export default formRouter;
