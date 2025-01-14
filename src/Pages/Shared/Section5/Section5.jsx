import React from "react";
import Sectiontitle from "../Sectiontitle";
import featureimage from "./../../../assets/home/featured.jpg";
import './section5.css'

const Section5 = () => {
  return (
  
      <div className="bg-menu-bar  text-white ">
      <Sectiontitle
        headding={"FROM OUR MENU"}
        subheading={"---Check it out---"}
      ></Sectiontitle>

      <div className="md:flex gap-5 items-center py-20 px-36">
        <div>
          <img className="h-full" src={featureimage} alt="" />
        </div>
        <div>
          <p className="font-semibold">Aug 20 , 2029</p>
          <p className="uppercase ">Where can i get some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            atque minus nisi, ullam ratione quia dolores? Facilis labore
            necessitatibus non, vero placeat commodi maxime aspernatur ducimus
            perspiciatis, reiciendis eius ea.
          </p>
          <button className="btn btn-outline btn-info border-b-4 rounded-br-xl font-bold ">ORDER NOW</button>
        </div>
      </div>
      </div>

  );
};

export default Section5;
