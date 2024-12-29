import { createBrowserRouter } from "react-router-dom";
import Mainlayut from "../Mainlayout/Mainlayut";
import Home from "../Pages/Shared/Home";

 export const Routs = createBrowserRouter([
    {
        path:"/",
        element: <Mainlayut></Mainlayut>,
        children:[{
            path:"/",
            element: <Home></Home>
        }]
    }
 ])