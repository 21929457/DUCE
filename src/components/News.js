import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from 'swiper';
import '../css/component/news.css';

function News (){
    SwiperCore.use([Autoplay]);
    return (
        <div className='section-bg news'>
            <div className="newTit-wrap">
                <p>뉴스에서 만난 컴퓨터공학과 이야기들</p>
                <p className="newsTit">News Letter</p>
            </div>
            <div className='news-slide'>
                <Swiper
                    className="mySwiper"
                    autoplay={{ delay: 0 }}
                    loop={true}
                    modules={{ Autoplay }}
                    slidesPerView={3}
                    spaceBetween={60}
                    speed={3000}
                >
                    <SwiperSlide>
                        <div></div>
                    </SwiperSlide>
                    <SwiperSlide>2</SwiperSlide>
                    <SwiperSlide>3</SwiperSlide>
                    <SwiperSlide>4</SwiperSlide>
                    <SwiperSlide>5</SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default News;