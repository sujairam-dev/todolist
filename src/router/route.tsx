import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";

const routeConfig = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default routeConfig;
