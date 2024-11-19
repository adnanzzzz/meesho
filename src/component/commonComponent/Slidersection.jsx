import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../../assets/images/slide1.webp'
import slider2 from '../../assets/images/slide2.avif'
import slider3 from '../../assets/images/slide3.avif'
// import slider1 from '../../assets/images/slide1.webp'
export default function Slidersection() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autospeed: 1000,
    arrows: false,
    slidesToScroll: 1
  };
  return (
    <div className='w-[100%] py-10'>
      <Slider className='mx-[auto] z-0 max-w-[1150px]' {...settings} id='homesilder'>
        <div>
          <div className='w-[100%] z-0'><img src={slider1} width='100%' alt="" /></div>
          </div>
        <div>
        <div className='w-[100%] z-0'><img src={slider2} width='100%' alt="" /></div>
        </div>
       <div>
       <div className='w-[100%] z-0'><img src={slider3} width='100%' alt="" /></div>
       </div>
        <div>
        <div className='w-[100%]'><img src={slider1} width='100%' alt="" /></div>
        </div>
        <div>
        <div className='w-[100%]'><img src={slider3} width='100%' alt="" /></div>
        </div>
        
      </Slider>

    </div>
  )
}
