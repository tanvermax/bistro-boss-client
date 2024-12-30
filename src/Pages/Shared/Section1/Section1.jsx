import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import imag1 from './../../../assets/home/slide1.jpg'
import imag2 from './../../../assets/home/slide2.jpg'
import imag3 from './../../../assets/home/slide3.jpg'
import imag4 from './../../../assets/home/slide4.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Sectiontitle from '../Sectiontitle';



const Section1 = () => {
    return (
        <>
        {/* <div className='w-2/5 mx-auto text-center space-y-5 py-5'>
        <p className='text-yellow-400 italic'>---From 11:00am to 10.00pm</p>
          <hr />
          <h2 className='font-bold'>ORDER ONLINE</h2>
          <hr />
        </div> */}
       <Sectiontitle 
       headding={"ORDER ONLINE"}
       subheading={"---From 11:00am to 10.00pm"}></Sectiontitle>
        {/* <Sectiontitle headding={"ORDER ONLINE"} subheading={"---From 11:00am to 10.00pm"}></Sectiontitle> */}
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
         
          <SwiperSlide> <img src={imag1} alt="" /> <h3 className='text-4xl uppercase text-center -mt-16 text-white'>SALADS</h3> </SwiperSlide>
          <SwiperSlide><img src={imag2} alt="" /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>SOUPS</h3> </SwiperSlide>
          <SwiperSlide><img src={imag3} alt="" /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>PIZZAS</h3></SwiperSlide>
          <SwiperSlide><img src={imag4} alt="" /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>desserts</h3></SwiperSlide>
          <SwiperSlide><img src={imag1} alt="" /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>SALADS</h3></SwiperSlide>
          <SwiperSlide><img src={imag2} alt="" /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>PIZZAS</h3></SwiperSlide>
          <SwiperSlide><img src={imag3} alt="" /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>desserts</h3></SwiperSlide>
          <SwiperSlide><img src={imag4} alt="" /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>SALADS</h3></SwiperSlide>
          <SwiperSlide><img src={imag1} alt="" /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>desserts</h3></SwiperSlide>
        </Swiper>
      </>
    );
};

export default Section1;