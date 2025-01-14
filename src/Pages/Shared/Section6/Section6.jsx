import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Sectiontitle from "../Sectiontitle";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
const Section6 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <section className="my-20">
      <div>
        <Sectiontitle
          headding={"TESTIMONIALS"}
          subheading={"---What Our Clients Say---"}
        ></Sectiontitle>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {data.map((review) => (
          <SwiperSlide key={review._id} review={review}>
            <div className="mx-auto w-28 items-center py-10">
              <Rating style={{ maxWidth: 180,  }} value={review.rating} readOnly />
            </div>
            <div className="text-center items-center">
              <p className="text-sm px-10">{review.details}</p>
              <h2 className="font-semibold text-2xl">{review.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Section6;
