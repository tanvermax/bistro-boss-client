import { NavLink, Outlet } from "react-router-dom";
import {
  FaBook,
  FaEnvelope,
  FaList,
  FaOpencart,
  FaUser,
  FaUtensils,
} from "react-icons/fa6";
import { FaAd, FaCalendarAlt, FaHome } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import useAdmin from "../Hooks/useAdmin";

const Dashbord = () => {
  const [isAdmin] = useAdmin();
  return (
    <div className="flex  ">
      <div className="w-64 min-h-screen bg-orange-400 ">
        <ul className="menu p-5 gap-5">
         
              <li>
                <NavLink to={"/dashbord/userhome"}>
                  Admin Home <FaHome></FaHome>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashbord/cart"}>
                  My Cart <FaOpencart />
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashbord/additem"}>
                  Add item <FaUtensils></FaUtensils>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashbord/mangeitem"}>
                  Manage Items <FaList></FaList>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashbord/bokings"}>
                  Manage bookings <FaBook></FaBook>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashbord/mangeitem"}>
                  All Bookings <FaList></FaList>
                </NavLink>
              </li>
              {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashbord/alluser"}>
                  All User <FaUser></FaUser>
                </NavLink>
              </li>
            </>
          ) : (
            " "
          )}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              Home<FaHome></FaHome>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              Menu<MdRestaurant></MdRestaurant>
            </NavLink>
          </li>
          <li>
            <NavLink to={"dashbord/contact"}>
              Contact<FaEnvelope></FaEnvelope>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="w-full p-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashbord;
