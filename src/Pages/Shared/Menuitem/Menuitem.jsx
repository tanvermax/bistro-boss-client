import React from "react";

const Menuitem = ({ item }) => {
  const { image, name, recipe, price } = item;

  return (
    <div className="flex py-5">
      <img className="h-20 w-20 round rounded-r-full rounded-bl-full " src={image} alt="" />
      <div className="px-5">
        <h3 className="text-xl font-semibold uppercase">{name}------------</h3>
        <p className="text-xs">{recipe}</p>
      </div>
      <p className="text-xl text-yellow-600 font-semibold">{price}$</p>
    </div>
  );
};

export default Menuitem;
