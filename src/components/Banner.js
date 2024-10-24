import '../css/component/banner.css';
import TypeIt from "typeit-react";
import React, { useEffect } from "react";
import AOS from "aos";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight , faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "aos/dist/aos.css";

function Banner () {
    useEffect(() => {
        AOS.init();
      });
    config.autoAddCss = false;
    return (
        <div>
            <div className='banner'></div>
            <div className='inner banner-inner'>
                <div className='banner-contents' id="banner-anchor">
                    <p className='banner-subTit' data-aos="fade-up" data-aos-duration="1000" data-aos-anchor="#banner-anchor">" 21세기 정보화 사회를 선도하라! "</p>
                    <p className='banner-tit'><TypeIt
                    options={{
                        speed: 60,
                        startDelay:1000,
                        lifeLike: true,
                        keyboard: true,
                    }}
                    getBeforeInit={(instance) => {
                        instance
                            .type("Deagu Univ")
                            .pause(500)
                            .move(-7, {delay:500})
                            .delete(2, {delay:500})
                            .type("ae", {delay:500})
                            .move(7)
                            .type("ersity ", {delay:250})
                            .type("Computer ")
                            .type(" Engineering ")
                        return instance;
                    }}></TypeIt></p>
                </div>
                <div className='banner-btn' data-aos="fade-up" data-aos-duration="1000" data-aos-anchor="#banner-anchor" data-aos-delay="700">
                    <a href='#'>
                        입학안내 바로가기
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
                <div className='scroll-wrap' data-aos="fade-up" data-aos-duration="1000" data-aos-anchor="#banner-anchor">
                    <p className='scroll-txt'>Scroll Down</p>
                    <div className='scroll-bar first'>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <div className='scroll-bar second'>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <div className='scroll-bar third'>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;