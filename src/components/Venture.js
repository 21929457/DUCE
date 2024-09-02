import '../css/venture.scss';

function Venture() {
  return (
    <section className="section-venture">
      <div className="section-venture-txt">
        <div className="section-tit-wrap">
          <p className='section-tit'>VENTURE ACADEMY</p>
          <p className="section-disc">벤처 아카데미 사업으로 더 많은 기회를 제공합니다.</p>
        </div>
        <div className="venture-disc-wrap">
          <div className="venture-disc1">
            <p className="venture-disc-tit">벤처 아카데미란?</p>
            <p className="venture-disc"> 교육부와 중소벤처기업부가 지원하는 취업연계 SW/콘텐츠 개발자 양성과정으로 <br/>실무 중심의 교육과정을 무료로 제공하는 사업입니다. 기업이 원하는 교육을 받은 <br/>SW중심대학 학생을 채용하고 인턴십 및 OJT를 진행하여 현장에 기반한 실무형 <br/>인재를 육성합니다.</p>
          </div>
          <div className="venture-disc2">
            <p className="venture-disc-tit">우리 학과에서는</p>
            <div className="span-wrap">
              <span></span>
              <p className="venture-disc">SW개발 인재매칭 페스티벌</p>
            </div>
            <div className="span-wrap">
              <span></span>
              <p className="venture-disc">직무부트캠프</p>
            </div>
            <div className="span-wrap">
              <span></span>
              <p className="venture-disc">워크샵</p>
            </div>
            <div className="span-wrap">
              <span></span>
              <p className="venture-disc">캡스톤 · 해커톤 디자인 경진대회</p>
            </div>
            <p className="venture-disc-tit">등등 다양한 사업을 진행합니다</p>
          </div>
        </div>
      </div>
      <div className="venture-img-wrap">
        <div className="venture-img-wrap1">
        <div className="venture-img venture-img1"></div>
        </div>
          <div className="venture-img-wrap2">
            <div className="venture-img venture-img2"></div>
            <div className="venture-img venture-img3"></div>
          </div>
        </div>
    </section>
  );
}

export default Venture;