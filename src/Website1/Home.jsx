import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="relative pt-20 w-full h-screen max-h-[800px] sm:max-h-[600px] xs:max-h-[500px]">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        <SwiperSlide>
          <img
            src="/1.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/2.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/3.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* Optional motion text or button layer */}
      <motion.div
        className="absolute bottom-10 w-full text-center text-white px-4 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold drop-shadow-lg">
          Welcome to Our Website
        </h1>
        <p className="text-sm md:text-base mt-2 drop-shadow-md">
          Discover the beauty of our products
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
