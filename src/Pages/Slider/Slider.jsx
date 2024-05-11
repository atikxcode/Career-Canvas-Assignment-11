
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../assets/1.avif'
import image2 from '../../assets/2.jpg'
import image4 from '../../assets/4.jpg'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect } from "react";
import 'swiper/css/navigation';
import 'aos/dist/aos.css'
import Aos from "aos";

import './style.css';

// import required modules
import {Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Slider = () => {

  useEffect(() => {
    Aos.init();
  },[])
  return (
    
  <div className='mt-24' >
    <div className='' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='img relative' style={{backgroundImage: `url(${image1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}> 
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className='flex flex-col gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center p-10'>
          <h2 className='text-white  text-4xl md:text-6xl font-extrabold leading-tight mb-4 '>Get Your Dream Job Today</h2>
          <p className="text-lg md:text-xl text-white leading-relaxed font-bold">Discover countless job opportunities awaiting you. Embark on your journey to success today! Explore diverse career paths and find the perfect fit for your skills and aspirations.</p>
         <Link to='/alljobs'><button className='btn btn-primary text-white'>Explore Now</button></Link>
          </div>

          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className='img relative' style={{backgroundImage: `url(${image2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}> 
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className='flex flex-col gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center p-10'>
          <h2 className='text-white  text-4xl md:text-6xl font-extrabold leading-tight mb-4 '>Get Your Dream Job Today</h2>
          <p className="text-lg md:text-xl text-white leading-relaxed font-bold">Discover countless job opportunities awaiting you. Embark on your journey to success today! Explore diverse career paths and find the perfect fit for your skills and aspirations.</p>
          <Link to='/alljobs'><button className='btn btn-primary text-white'>Explore Now</button></Link>
          </div>

          </div>
        </SwiperSlide>


   


        <SwiperSlide>
          <div className='img relative' style={{backgroundImage: `url(${image4})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}> 
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className='flex flex-col gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center p-10'>
          <h2 className='text-white  text-4xl md:text-6xl font-extrabold leading-tight mb-4 '>Get Your Dream Job Today</h2>
          <p className="text-lg md:text-xl text-white leading-relaxed font-bold">Discover countless job opportunities awaiting you. Embark on your journey to success today! Explore diverse career paths and find the perfect fit for your skills and aspirations.</p>
          <Link to='/alljobs'><button className='btn btn-primary text-white'>Explore Now</button></Link>
          </div>

          </div>
        </SwiperSlide>


       


      
       
       
      </Swiper>
    </div>
  </div>
   
  );
};

export default Slider;