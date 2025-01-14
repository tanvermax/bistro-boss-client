import { createBrowserRouter } from "react-router-dom";
import Mainlayut from "../Mainlayout/Mainlayut";
import Home from "../Pages/Shared/Home";
import Menu from "../Pages/Shared/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Signin from "../Pages/Login/Signin";
import PrivetRouts from "./PrivetRouts";
import SECRect from "./SECRect";
import Cart from "../Layout/Cart";
import Dashbord from "../Layout/Dashbord";
import AllUsers from "../Layout/DPages/AllUsers";

export const Routs = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayut></Mainlayut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "ourmenu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signin",
        element: <Signin></Signin>,
      },
      {
        path: "secret",
        element: (
          <PrivetRouts>
            <SECRect></SECRect>
          </PrivetRouts>
        ),
      },
      {
        path: "dashbord",
        element: (
          <PrivetRouts>
            {" "}
            <Dashbord></Dashbord>
          </PrivetRouts>
        ),
        children: [
          {
            path: "cart",
            element: <Cart></Cart>,
          },
          // addmin
          {
            path: 'alluser',
            element: <AllUsers></AllUsers>
          }
        ],
      },
    ],
  },
]);
