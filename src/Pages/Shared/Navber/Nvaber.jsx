import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa6";

import { AuthContext } from "../../../Provider/AuthProvider";
import useCart from "../../../Provider/useCart";
import Swal from "sweetalert2";

const Nvaber = () => {
  const { user, logoutuser, } = useContext(AuthContext);
  const [cart] = useCart();
  // if (!user) {
  //   return <div>Loading...</div>; // Or any fallback UI when user is null
  // }
  const handlelogout = () => {
    logoutuser()
      .then(() => {
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const naboption = (
    <>
      {" "}
      <li>
        <Link className="btn" to={"/"}>
          Home
        </Link>
      </li>
      <li>
        <Link className="btn" to={"/secret"}>
          secrect
        </Link>
      </li>
      <li>
        <Link className="btn" to={"/ourmenu"}>
          OUR MENU
        </Link>
      </li>
      <li>
        <Link className="btn" to={"/order/SALADS"}>
          ORDER FOOD
        </Link>
      </li>
      <li>
        <Link to={"/dashbord/cart"} className="btn">
          <FaOpencart />
          <div className="badge badge-secondary">+{cart.length}</div>
        </Link>
      </li>
      {/* <li>
        <Link to={"/login"} className="btn">
          Log in
        </Link>
      </li>
      <li>
        <button onClick={handlelogout} className="btn">
          logout
        </button>
      </li> */}
    </>
  );
  return (
    <div className="">
      <div className="navbar fixed z-10 px-32">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {naboption}
            </ul>
          </div>
          <a className="btn bg-black text-white  text-xl cinzel">Bistro</a>
        </div>
        <div className="navbar-center   hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4  ">{naboption}</ul>
        </div>
        <div className="navbar-end gap-10">
          {/* <Link to={"/login"} className="btn ">
            Log in
          </Link>
          <li>
        <button onClick={handlelogout} className="btn">
          logout
        </button>
      </li> */}
          {user ? (
            <>
              <p>Name: {user?.displayName || "Guest"}</p>
              <button onClick={handlelogout} className="btn bg-yellow-500">
                logout
              </button>
            </>
          ) : (
           <>
              <Link to={"/login"} className="btn">
                Log in
              </Link>
              <Link to={"/signin"} className="btn">
                sign in
              </Link>
            </> 
           )}
        </div>
      </div>
    </div>
  );
};

export default Nvaber;
