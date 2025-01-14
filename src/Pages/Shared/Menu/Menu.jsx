import { Helmet } from "react-helmet";
import Cover from "../Cover/Cover";
import menuimg from "../../../assets/menu/banner3.jpg";
import Popularitems from "../Section3/Popularitems";
import Usemenu from "../../../Hooks/Usemenu";
import Sectiontitle from "../Sectiontitle";
import Menuitem from "../Menuitem/Menuitem";
import Menucategory from "../../../Hooks/Menucategory";
import cgef from "../../../assets/home/chef-service.jpg";
import cgef2 from "../../../assets/menu/salad-bg.jpg";
import cgef3 from "../../../assets/menu/soup-bg.jpg";
import cgef4 from "../../../assets/menu/pizza-bg.jpg";
import cgef5 from "../../../assets/menu/dessert-bg.jpeg";

const Menu = () => {
  const [menu] = Usemenu();
  const todayoffer = menu.filter((item) => item.category === "offered");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover
        backimg={menuimg}
        covertitle="OUR MENU"
        coverdes="Would you like to try a dish?"
      ></Cover>
      {/* <div>
        <Sectiontitle headding={"TODAY'S OFFER"} subheading={"---Don't miss---"} ></Sectiontitle>

        <div className="grid grid-cols-2 gap-5 ">
          {todayoffer.map((item) => (
            <Menuitem item={item} key={item._id}></Menuitem>
          ))}
        </div>
      </div> */}
      {/* offered menu */}
      <Sectiontitle headding={"TODAY'S OFFER"}  subheading={"---Don't miss---"}></Sectiontitle>
      <Menucategory  items={todayoffer}></Menucategory>
      {/* dessart */}
      <Menucategory
        title={"DESSERTS"}
        coverimg={cgef5}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        items={dessert}
      ></Menucategory>
      <Menucategory
        coverimg={cgef4}
        title={"PIZZA"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        items={pizza}
      ></Menucategory>
      <Menucategory
        coverimg={cgef2}
        title={"SALADS"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        items={salad}
      ></Menucategory>
      <Menucategory
        coverimg={cgef3}
        title={"SOUPS"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        items={soup}
      ></Menucategory>
    </div>
  );
};

export default Menu;
