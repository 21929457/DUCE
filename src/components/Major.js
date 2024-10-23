import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/component/major.css';

function Major() {
    SwiperCore.use([Autoplay]);

    return (
        <div className='major-wrapper'>
            <div className='inner'>
                <p className='major-tit'>A to Z</p>
                <div className='major-r'>
                    <Swiper
                        className="mySwiper"
                        direction={'vertical'}
                        autoplay={{ delay: 0 , disableOnInteraction: false }}
                        loop={true}
                        modules={{ Autoplay }}
                        slidesPerView={2}
                        spaceBetween={60}
                        speed={4000}
                    >
                        <SwiperSlide className="slideImg ai"><p className="slideTit">Artificial <br />Intelligence</p></SwiperSlide>
                        <SwiperSlide className="slideImg game"><p className="slideTit">Game <br />Development</p></SwiperSlide>
                        <SwiperSlide className="slideImg web"><p className="slideTit">Web</p></SwiperSlide>
                        <SwiperSlide className="slideImg iot"><p className="slideTit">IoT</p></SwiperSlide>
                        <SwiperSlide className="slideImg secure"><p className="slideTit">Security Expert</p></SwiperSlide>
                    </Swiper>
                    <Swiper
                        className="mySwiper"
                        direction={'vertical'}
                        autoplay={{ delay: 0 , disableOnInteraction: false }}
                        loop={true}
                        modules={{ Autoplay }}
                        slidesPerView={2}
                        spaceBetween={60}
                        speed={4000}
                        centeredSlides={true}
                    >
                        <SwiperSlide className="slideImg soft"><p className="slideTit">Software <br />Development</p></SwiperSlide>
                        <SwiperSlide className="slideImg net"><p className="slideTit">Network</p></SwiperSlide>
                        <SwiperSlide className="slideImg bigdata"><p className="slideTit">Big Data</p></SwiperSlide>
                        <SwiperSlide className="slideImg robot"><p className="slideTit">Robot</p></SwiperSlide>
                        <SwiperSlide className="slideImg virtual"><p className="slideTit">Virtual Reality</p></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div >
    )
}

export default Major;