import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from 'swiper';
import '../css/component/news.css';

function News (){
    SwiperCore.use([Autoplay]);
    return (
        <div className="news-wrap">
            <div className='section-bg news'></div>
            <div className="news-inner">
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
                        slidesPerView={4}
                        spaceBetween={60}
                        speed={5000}
                    >
                        <SwiperSlide>
                            <a href="https://www.khan.co.kr/people/people-general/article/202409081404001#c2b" target="_blank" rel="noreferrer">
                                <div className="news-box">
                                    <i></i>
                                    <p className="boxTit">&#91;인터뷰&#93; 딥페이크 가해자, 잡힐리 없다?</p>
                                    <p>최근 한 인터넷 카페에 “&#91;영상 공유&#93;방에 들어간 사람들 신원 따기도 쉬운 게 아니다. 잡힐 리 없다”는 게시글이 올라왔다</p>
                                    <p>2024.09.08</p>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="https://www.yna.co.kr/view/AKR20240830081500017?section=search" target="_blank" rel="noreferrer">
                                <div className="news-box">
                                    <i className="new2"></i>
                                    <p className="boxTit">&#91;인터뷰&#93; "성 착취물 괜찮겠지라고? 알고리즘이 흔적 모읍니다"</p>
                                    <p> 딥페이크 기술을 악용한 불법 합성물 문제로 여론이 들끓자 그간 텔레그램과 이메일로만 소통하던 당국이 협의체와 핫라인을 구성하는 등 보다 적극적인 대응에 나섰다</p>
                                    <p>2024.09.01</p>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="https://www.news1.kr/local/daegu-gyeongbuk/5489757" target="_blank" rel="noreferrer">
                                <div className="news-box">
                                    <i className="new3"></i>
                                    <p className="boxTit">대구대, 다크웹·SNS 수사기술 연구로 우수 논문상</p>
                                    <p>대구대는 24일 컴퓨터정보공학부 학생들이 사이버 범죄를 추적하기 위한 연구 논문을 발표해 우수논문상을 받았다고 밝혔다</p>
                                    <p>2024.07.24</p>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="https://www.khan.co.kr/people/people-general/article/202409081404001#c2b" target="_blank" rel="noreferrer">
                                <div className="news-box">
                                    <i></i>
                                    <p className="boxTit">&#91;인터뷰&#93; 딥페이크 가해자, 잡힐리 없다?</p>
                                    <p>최근 한 인터넷 카페에 “&#91;영상 공유&#93;방에 들어간 사람들 신원 따기도 쉬운 게 아니다. 잡힐 리 없다”는 게시글이 올라왔다</p>
                                    <p>2024.09.08</p>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="https://www.yna.co.kr/view/AKR20240830081500017?section=search" target="_blank" rel="noreferrer">
                                <div className="news-box">
                                    <i className="new2"></i>
                                    <p className="boxTit">&#91;인터뷰&#93; "성 착취물 괜찮겠지라고? 알고리즘이 흔적 모읍니다"</p>
                                    <p> 딥페이크 기술을 악용한 불법 합성물 문제로 여론이 들끓자 그간 텔레그램과 이메일로만 소통하던 당국이 협의체와 핫라인을 구성하는 등 보다 적극적인 대응에 나섰다</p>
                                    <p>2024.09.01</p>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="https://www.news1.kr/local/daegu-gyeongbuk/5489757" target="_blank" rel="noreferrer">
                                <div className="news-box">
                                    <i className="new3"></i>
                                    <p className="boxTit">대구대, 다크웹·SNS 수사기술 연구로 우수 논문상</p>
                                    <p>대구대는 24일 컴퓨터정보공학부 학생들이 사이버 범죄를 추적하기 위한 연구 논문을 발표해 우수논문상을 받았다고 밝혔다</p>
                                    <p>2024.07.24</p>
                                </div>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default News;