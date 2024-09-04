import '../../css/location.scss'

function Location() {
    function handleMouseMove (e) {
        const el = document.getElementById("wrapper");
        const d = el.getBoundingClientRect();
        let x = e.clientX - (d.left + Math.floor(d.width / 2));
        let y = e.clientY - (d.top + Math.floor(d.height / 2));
        // Invert values
        x = x - x * 2;
        y = y - y * 2;
        document.documentElement.style.setProperty("--scale", 1.6);
        document.documentElement.style.setProperty("--x", x / 2 + "px");
  
        document.documentElement.style.setProperty("--y", y / 2 + "px");
      };
  
      function handleMouseLeave () {
        document.documentElement.style.setProperty("--scale", 1);
        document.documentElement.style.setProperty("--x", 0);
        document.documentElement.style.setProperty("--y", 0);
      };
    return (
      <section className="section-location">
        <div className="section-tit-wrap">
        <a href="https://map.kakao.com/?urlX=918628.0&urlY=671253.0&itemId=17563348&q=%EB%8C%80%EA%B5%AC%EB%8C%80%ED%95%99%EA%B5%90%20%EA%B2%BD%EC%82%B0%EC%BA%A0%ED%8D%BC%EC%8A%A4%20%EC%A0%95%EB%B3%B4%ED%86%B5%EC%8B%A0%EB%8C%80%ED%95%991%ED%98%B8%EA%B4%80&srcid=17563348&map_type=TYPE_MAP&from=roughmap" target="_blank" data-aos-anchor=".section-location" data-aos="fade-up" data-aos-duration="1200">
            <div className="map-btn">지도에서 보기</div>
          </a>
          <div>
            <p className='section-tit'  data-aos-anchor=".section-location" data-aos="fade-up" data-aos-duration="1000">Location</p>
            <p className="section-disc"  data-aos-anchor=".section-location" data-aos="fade-up" data-aos-duration="1000">경북 경산시 대구대로 201 정보통신대학 컴퓨터정보공학부 컴퓨터공학전공</p>
            <div className="phonenum-wrap"  data-aos-anchor=".section-location" data-aos="fade-up" data-aos-duration="1000">
              <i></i><p className="phonenum">053-850-6570</p>
            </div>
          </div>
        </div>
        <div className="location-wrap"  data-aos-anchor=".section-location" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <p className="location-notion">*마우스 클릭을 하면 원래 크기로 돌아옵니다.</p>
            <div id="wrapper" onMouseMove={handleMouseMove} onClick={handleMouseLeave}>
                <img id="image" />
            </div>
        </div>
      </section>
    );
  }
  
  export default Location;
  