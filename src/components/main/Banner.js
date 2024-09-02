import '../../css/banner.scss';
import $ from 'jquery';
import anime from 'animejs/lib/anime.es.js';

function Banner() {
    $(function () {
        const wrapperEl = document.querySelector('.wrapper');
    
        const numberOfEls = 90;
        const duration = 6000;
        const delay = duration / numberOfEls;
    
        let tl = anime.timeline({
          duration: delay,
          complete: function () { tl.restart(); }
        });
    
        function createEl(i) {
          let el = document.createElement('div');
          const rotate = (360 / numberOfEls) * i;
          const translateY = -50;
          const hue = Math.round(360 / numberOfEls * i);
    
          el.classList.add('el');
          el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
          el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
    
          tl.add({
            begin: function () {
              anime({
                targets: el,
                backgroundColor: ['hsl(' + hue + ', 40%, 60%)', 'hsl(' + hue + ', 60%, 80%)'],
                rotate: [rotate + 'deg', rotate + 10 + 'deg'],
                translateY: [translateY + '%', translateY + 10 + '%'],
                scale: [1, 1.25],
                easing: 'easeInOutSine',
                direction: 'alternate',
                duration: duration * .1
              });
            }
          });
          wrapperEl.appendChild(el);
        };
        for (let i = 0; i < numberOfEls; i++) createEl(i);
    
        $(".wrapper h1").fadeIn(1000);
        $(".wrapper .banner-btn-wrap").fadeIn(1000);
        $(".wrapper-inner p").fadeIn(1000);
    
      });
    return (
        <div className="main">
          <div className="wrapper">
            <div className="wrapper-inner">
              <p>2024년도 정보통신대학 컴퓨터공학과</p>
              <h1>21세기 정보화 사회를<br /><span>선도하라!</span></h1>
              <a href="#" className="banner-btn-wrap">
                <div className="banner-btn">전공안내 바로가기</div>
              </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Banner;
  