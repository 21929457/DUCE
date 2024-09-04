import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../css/major.scss';

function Major() {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  const [slides, setSlides] = useState(
    Array.from({ length: 6 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };
  return (
    <section className="first">
      <div className="section-tit-wrap" data-aos-anchor=".first" data-aos="fade-up" data-aos-duration="1000">
        <p className='section-tit'>MAJOR</p>
        <p className="section-disc">공부하고 싶은 전공분야를 확인하세요. <br/> 우리 학과에서는 정보화 시대에 필요한 다양한 분야를 학습합니다.</p>
      </div>
      <div className="major-inner" data-aos-anchor=".first" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
      <Swiper
        modules={[Virtual, Navigation]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className="slide-btn-wrap"data-aos-anchor=".first" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">

      </div>
    </section>
  );
}

export default Major;
