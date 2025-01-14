import React, { useEffect, useState } from "react";
import Sectiontitle from "../Sectiontitle";
import Menuitem from "../Menuitem/Menuitem";
import Usemenu from "../../../Hooks/Usemenu";

const Popularitems = () => {
  const [menu, loading] = Usemenu();

  const popular = menu.filter((item) => item.category === "popular");
  // const [menu , setMenu]= useState([])

  // useEffect(()=>{
  //     fetch('menu.json')
  //     .then(res=>res.json())
  //     .then(data=>{
  //         const populatitem = data.filter(item=> item.category === 'popular');
  //         setMenu(populatitem)
  //     } )
  // },[])
  return (
    <div>
      <div>
        <Sectiontitle
          headding={"FROM OUR MENU"}
          subheading={"---Check it out---"}
        ></Sectiontitle>
      </div>
      <div className="grid grid-cols-2 gap-5 ">
        {popular.map((item) => (
          <Menuitem item={item} key={item._id}></Menuitem>
        ))}
      </div>
      <div className="text-center ">
        <button className="border-b-2 rounded-b-2xl p-5 hover:bg-orange-600">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default Popularitems;
