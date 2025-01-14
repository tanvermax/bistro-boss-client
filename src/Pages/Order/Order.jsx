import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../Shared/Cover/Cover";
import ordercover from "../../../src/assets/shop/banner2.jpg";
import { useState } from "react";
import OrderCard from "./OrderCard";
import Usemenu from "../../Hooks/Usemenu";
import Ordertab from "./Ordertab";
import './order.css'
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = [ 'SALADS', 'PIZZA', 'SOUPS', 'DESSERTS', 'DRINKS'];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabindex] = useState(initialIndex);
  const [menu] = Usemenu();
  // console.log(category);
  
  const drinks = menu.filter((item) => item.category === "drinks");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <>
      <div>
        <div>
          <Cover
            backimg={ordercover}
            covertitle={"OUR SHOP"}
            coverdes={"Would you like to try a dish?"}
          ></Cover>
        </div>
        <div className="py-10 items-center text-center">
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabindex(index)}
          >
            <TabList>
              <Tab >salad</Tab>
              <Tab>pizza</Tab>
              <Tab>soups</Tab>
              <Tab>desserts</Tab>
              <Tab>drinks</Tab>
            </TabList>
            <TabPanel>
             <Ordertab items={salad}></Ordertab>
            </TabPanel>
            <TabPanel>
            <Ordertab items={pizza}></Ordertab>
            </TabPanel>
            <TabPanel>
            <Ordertab items={soup}></Ordertab>
            </TabPanel>
            <TabPanel>
            <Ordertab items={dessert}></Ordertab>
            </TabPanel>
            <TabPanel>
            <Ordertab items={drinks}></Ordertab>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Order;
