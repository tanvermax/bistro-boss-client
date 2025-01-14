import React from "react";
import Cover from "../Pages/Shared/Cover/Cover";
import Menuitem from "../Pages/Shared/Menuitem/Menuitem";
import { Link } from "react-router-dom";

const Menucategory = ({ title, items, coverimg, description }) => {
  return (
    <div className="py-5 ">
      {title && (
        <Cover
          coverdes={description}
          backimg={coverimg}
          covertitle={title}
        ></Cover>
      )}
      <div className="grid grid-cols-2 gap-5 py-10">
        {items.map((item) => (
          <Menuitem item={item} key={item._id}></Menuitem>
        ))}
      </div>

      <Link to={`/order/${title}`} className="">
        <button className="btn btn-outline btn-info border-b-4 rounded-br-xl font-bold ">
          ORDER NOW
        </button>
      </Link>
    </div>
  );
};

export default Menucategory;
