import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import '../css/component/activity.css';

function Activity () {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='section-bg'>
            <div className='inner'>
                <p className='activity-tit'>ACTIVITY</p>
                <div className='board'>
                        <p className='tit'>동아리 활동</p>
                        <ul>
                            <li>
                                <div className='tit-wrap'>
                                    <span>01</span>
                                    <p className='board-tit'>Blue Screen</p>
                                    <p className='part'>공모전 참가</p>
                                </div>
                            </li>
                            <li>
                                <div className='tit-wrap'>
                                    <span>02</span>
                                    <p className='board-tit'>PLEX</p>
                                    <p className='part'>정보보안</p>
                                </div>
                            </li>
                            <li>
                                <div className='tit-wrap'>
                                    <span>03</span>
                                    <p className='board-tit'>AI 동아리</p>
                                    <p className='part'>인공지능</p>
                                </div>
                            </li>
                        </ul>
                </div>
                <div className='board year'>
                    <p className='tit'>년도별 실적</p>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ boxShadow: 'none' }}>
                                <AccordionSummary
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                >
                                <Typography sx={{ width: '33%', flexShrink: 0}}>
                                    <div className='year-div'>2024년<i></i></div>
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    <div className='work-disc-wrap'>
                                        <p><span>01</span>2024 제2회 SW/콘텐츠 분야 벤처 스타트업 아카데미 해커톤(서퍼톤) 대회 &lt;우수상&gt; 수상</p>
                                        <p className="workName">작품명 : Clean Campus</p>
                                        <p className="winner">손동휘&#40;컴공'19&#41;, 최민재&#40;컴공'19&#41;, 육준범&#40;컴공'19&#41;, 임채연&#40;컴공'21&#41;</p>
                                    </div>
                                    <div className='work-disc-wrap'>
                                        <p><span>02</span>2024학년도 캡스톤디자인 경진대회 &lt;최우수상&gt; 수상</p>
                                        <p className="workName">작품명 : 스마트홈 네트워크 및 IoT 기기 공격 탐지 모니터링 시스템</p>
                                        <p className="winner">이현우&#40;컴공'21&#41;, 박은영&#40;컴공'21&#41;</p>
                                    </div>
                                    <div className='work-disc-wrap'>
                                        <p><span>03</span>2024학년도 벤처스타트업 아카데미사업단 해커톤 아이디어 챌린지 &lt;우수상&gt; 수상</p>
                                        <p className="workName">작품명 : 우주정거장 모니터링 및 고장 예측 소프트웨어</p>
                                        <p className="winner">이현우&#40;컴공'21&#41;, 박은영&#40;컴공'21&#41;, 이연정&#40;컴공15&#41;, 임세헌&#40;컴공'21&#41;</p>
                                    </div>
                                </Typography>
                                </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ boxShadow: 'none' }}>
                                <AccordionSummary
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                                >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    <div className='year-div'>2023년<i></i></div>
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                <div className='work-disc-wrap'>
                                        <p><span>01</span>2023년 벤처스타트업 SW개발인재 매칭 페스티벌 중소벤처기업부 &lt;장관상 수상&gt;</p>
                                        <p className="winner">이백승&#40;컴공'18&#41;</p>
                                    </div>
                                    <div className='work-disc-wrap'>
                                        <p><span>02</span> 2023 경북형 SW인력양성사업 경북테크노파크 원장상 &lt;장려상 수상&gt;</p>
                                        <p className="winner">김수영&#40;컴공'22&#41;, 권영아&#40;컴공'18&#41;, 이강룡&#40;컴공'19&#41;, 이백승&#40;컴공'18&#41;</p>
                                    </div>
                                    <div className='work-disc-wrap'>
                                        <p><span>03</span>2023 대구대 차세대 반도체 Fun & Academy 페스티벌 4개 분야&#40;전 부문&#41; 수상</p>
                                        <p className="winner">김수영&#40;컴공'22&#41;: 아이디어&#40;대상&#41;, 창업아이디어&#40;우수상&#41;, 작품&#40;장려상&#41;, 에세이/PBL&#40;장려상&#41;</p>
                                    </div>
                                </Typography>
                                </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ boxShadow: 'none' }}>
                                <AccordionSummary
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                                >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    <div className='year-div'>2022년<i></i></div>
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    <div className='work-disc-wrap'>
                                        <p><span>01</span>한국감성과학회 우수상 &#40;포스터발표&#41; </p>
                                        <p className="workName">논문명 : 뇌전도 신호를 활용한 가상 오브젝트 제어 시스템 개발 </p>
                                        <p className="winner">이성민, 이백승, 신영훈 &#40;컴공'18&#41;, 이미란&#40;교신저자&#41;</p>
                                    </div>
                                    <div className='work-disc-wrap'>
                                        <p><span>02</span> ICT멘토링 프로보노 사업 공모전 동상 &#40;한국정보산업연합회장상&#41; </p>
                                        <p className="workName">작품명 : 가상현실&#40;VR&#40; 환경에서의 재활운동 및 치료를 위한 의료 시스템 개발</p>
                                        <p className="winner">손차민&#40;컴공'21&#41; 외 계명대 학부생 3명, 이미란&#40;지도교수&#41;</p>
                                    </div>
                                    <div className='work-disc-wrap'>
                                        <p><span>03</span>한국산업정보학회 추계학술대회 우수논문상&#40;구두발표&#41;</p>
                                        <p className="workName">논문명 : 자율주행차 데이터 분석을 통한 사이버 공격 디지털 트윈 모델 연구</p>
                                        <p className="winner">조재한&#40;컴공'17&#41;, 박재민&#40;컴공'19&#41;, 이현우&#40;컴공'21&#41;, 김태협&#40;컴공'19&#41;, 김지연&#40;교신저자&#41;</p>
                                    </div>
                                </Typography>
                                </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ boxShadow: 'none' }}>
                                <AccordionSummary
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                                >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    <div className='year-div'>2021년<i></i></div>
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    <div className='work-disc-wrap'>
                                        <p><span>01</span>2021 대구·경북 스타트업 페스티벌 ⌜CultG-Star League⌟ 대상&#40;중소벤처기업부장관상&#41; 수상 </p>
                                        <p className="winner">신용혁&#40;컴공'19&#41;</p>
                                    </div>
                                    <div className='work-disc-wrap'>
                                        <p><span>02</span>2021년 모바일 앱/아이디어 공모전 장려상</p>
                                        <p className="workName">작품명 : 리뷰토랑</p>
                                        <p className="winner">이승욱, 김태성, 백대현, 우보원 &#40;컴공'16&#41;</p>
                                    </div>
                                    <div className='work-disc-wrap'>
                                        <p><span>03</span>DU-Dream 창업아이디어 경진대회 최우수상</p>
                                        <p className="workName">논문명 : 교수자와 학습자를 반영한 문제해결형 코딩테스트 플랫폼</p>
                                        <p className="winner">이승욱&#40;컴공'16&#41;, 서보성&#40;컴공'19&#41;, 이진우&#40;컴공'19&#41;, 안건우&#40;컴공'18&#41;</p>
                                    </div>
                                </Typography>
                                </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{ boxShadow: 'none' }}>
                                <AccordionSummary
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                                >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    <div className='year-div'>2020년<i></i></div>
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    <div className='work-disc-wrap'>
                                        <p><span>01</span>2020학년도 대구대학교 학과역량평가에서 전체 85개 학과 가운데 컴퓨터공학전공이 1위를 차지 학과 역량평가 우수학과&#40;A등급&#41;에 수여되는 장학금을 10명의 학생들에게 지급</p>
                                    </div>
                                    <div className='work-disc-wrap'>
                                        <p><span>02</span>컴퓨터공학전공 동문장학금 및 소속교수 매칭펀드장학금으로 7명의 학생들에게 특별장학금을 지급</p>
                                    </div>
                                    <div className='work-disc-wrap'>
                                        <p><span>03</span> 2020년 영천시 전산직 공무원 선발시험에서 이동헌&#40;컴공‘15, ‘21졸업예정&#41; 학생이 최종합격</p>
                                    </div>
                                    <div className='work-disc-wrap'>
                                        <p><span>04</span> 권필진&#40;컴공`12, 부산대대학원 `20졸업&#41; 학생이 안랩에 취업</p>
                                    </div>
                                </Typography>
                                </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Activity;