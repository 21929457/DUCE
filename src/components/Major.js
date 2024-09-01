import '../css/major.scss';
import $ from 'jquery';

function Major() {
  $(function () {

  });
  return (
    <section className="first">
      <div className="tit-wrap">
        <p className='section-tit'>취업분야</p>
        <div className="slide-btn-wrap">
          <i className="slide-btn slide-prev"></i>
          <i className="slide-btn slide-next"></i>
        </div>
      </div>
      <div className="major-inner">
        <div className="major web">
          <p className="major-tit">웹 개발자</p>
          <p className="major-disc">웹 개발자는 웹 디자인 및 개발, 유지보수하는 기술을 다루는 개발자입니다. 웹 사이트를 제작하고 웹이 구동하는 서버를 관리합니다.</p>
        </div>
        <div className="major software">
          <p className="major-tit">소프트웨어 개발자</p>
          <p className="major-disc">소프트웨어 설계 및 코딩 넓게는 프로젝트 관리 업무를 수행하는 사람입니다. 다양한 유형의 컴퓨터 혹은 모바일 기기에서 실행되는 애플리케이션을 제작합니다.</p>
        </div>
        <div className="major secure">
          <p className="major-tit">보안 전문가</p>
          <p className="major-disc">정보시스템 및 네트워크를 보호하기 위해 보안 조치를 계획하고 실행하여 내 · 외부의 위협으로부터 정보를 보호하는 일을 수행합니다.</p>
        </div>
        <div className="major game">
          <p className="major-tit">게임 개발자</p>
          <p className="major-disc">게임 개발자 는 기획, 알고리즘, 그래픽 자료, 사운드 등을 하나의 창작물로 결합시켜 게임 프로그램을 제작하는 전문가입니다.</p>
        </div>
        <div className="major embedded">
          <p className="major-tit">임베디드 개발자</p>
          <p className="major-disc">임베디드 개발자란 임베디드 프로그램을 개발하는 직업입니다. 임베디드란 기계나 기타 제어가 필요한 시스템에 대해 제어를 위한 특정 기능을 수행하는 컴퓨터 시스템을 말합니다.</p>
        </div>
        <div className="major ai">
          <p className="major-tit">AI · Robot 개발자</p>
          <p className="major-disc">기계 학습 모델과 알고리즘을 개발하고 훈련시키는 작업을 수행합니다. 특정 문제를 해결하거나 비즈니스 목표를 달성하기 위해 AI모델을 개발하고 최적화합니다.</p>
        </div>
        <div className="major manager">
          <p className="major-tit">관리자 및 운영자</p>
          <p className="major-disc">관리자 및 운영자에는 분야에 따라 다양한 직업이 있으며 다양한 직업에 따라 하는 직무, 요구기술 등이 모두 다릅니다.</p>
        </div>
      </div>
    </section>
  );
}

export default Major;
