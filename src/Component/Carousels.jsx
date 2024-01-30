import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '/src/App.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function Carousels() {
  return (
    <div className='carousels'>
 <Swiper
        slidesPerView={4}
        spaceBetween={30}
       autoplay={{
          delay: 800,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://www.foodiesfeed.com/wp-content/uploads/2023/05/freshly-prepared-beef-steak-with-vegetables.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/plate-of-noodles-with-shrimps.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/xiaolongbao-dumplings.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://www.foodiesfeed.com/wp-content/uploads/2023/12/cutting-pizza.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://www.foodiesfeed.com/wp-content/uploads/2023/11/portobello-mushroom-burger.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/574111/pexels-photo-574111.jpeg?auto=compress&cs=tinysrgb&w=600"/></SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/789327/pexels-photo-789327.jpeg?auto=compress&cs=tinysrgb&w=600"/></SwiperSlide>
        <SwiperSlide><img src="https://www.foodiesfeed.com/wp-content/uploads/2023/09/mexican-tacos-lined-up.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://www.foodiesfeed.com/wp-content/uploads/2023/08/crispy-spicy-chicken-wings.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://www.foodiesfeed.com/wp-content/uploads/2023/12/seafood-soup.jpg"/></SwiperSlide>
      </Swiper>

    </div>
  )
}







export default Carousels