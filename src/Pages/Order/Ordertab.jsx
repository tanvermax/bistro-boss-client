import React from "react";
import OrderCard from "./OrderCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Ordertab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="grid grid-cols-3 gap-5 p-10">
            {items.map((item) => (
              <OrderCard key={item._id} item={item}></OrderCard>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Ordertab;
