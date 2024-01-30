import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '/src/App.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function Carousels2() {
  return (
    <div className='carousels'>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://restfood.onlywebcoding.com.ua/images/chef-1.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://restfood.onlywebcoding.com.ua/images/chef-2.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://restfood.onlywebcoding.com.ua/images/chef-3.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://restfood.onlywebcoding.com.ua/images/chef-4.jpg"/></SwiperSlide>
       
      </Swiper>
    </div>
  )
}

export default Carousels2