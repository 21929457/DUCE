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
                <div className='major-l'>
                    <p className='major-subTit'>나의 미래를 바꿀 여정의 시작</p>
                    <p className='major-tit'>" 전공선택 "</p>
                </div>
                <div className='major-r'>
                    <Swiper
                        className="mySwiper"
                        direction={'vertical'}
                        autoplay={{ delay: 0 }}
                        loop={true}
                        modules={{ Autoplay }}
                        slidesPerView={2}
                        spaceBetween={60}
                        speed={3000}
                    >
                        <SwiperSlide className="slideImg ai"></SwiperSlide>
                        <SwiperSlide className="slideImg game"></SwiperSlide>
                        <SwiperSlide className="slideImg web"></SwiperSlide>
                        <SwiperSlide className="slideImg iot"></SwiperSlide>
                        <SwiperSlide className="slideImg secure"></SwiperSlide>
                    </Swiper>
                    <Swiper
                        className="mySwiper"
                        direction={'vertical'}
                        autoplay={{ delay: 0 }}
                        loop={true}
                        modules={{ Autoplay }}
                        slidesPerView={2}
                        spaceBetween={60}
                        speed={3000}
                        centeredSlides={true}
                    >
                        <SwiperSlide className="slideImg soft"></SwiperSlide>
                        <SwiperSlide className="slideImg net"></SwiperSlide>
                        <SwiperSlide className="slideImg bigdata"></SwiperSlide>
                        <SwiperSlide className="slideImg robot"></SwiperSlide>
                        <SwiperSlide className="slideImg other"></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div >
    )
}

export default Major;