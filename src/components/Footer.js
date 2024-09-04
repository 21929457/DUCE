import '../css/userBottom.scss';
import logoimg from '../images/user/logo.png';

function Footer() {
    return (
      <footer>
        <div className="ft-text-wrap">
          <div className="ft-inner">
            <div className="logo">
              <img src={logoimg}></img>
              <p>대구대학교 정보통신대학 컴퓨터공학과</p>
            </div>
            <p className="ft-tit">정보통신대학장 교수 김순철</p>
            <div className="ft-info">
              <div>
                <p><span>Location : &nbsp;</span>경상북도 경산시 진량읍 대구대로 201 정보통신대학 컴퓨터정보공학부 컴퓨터공학전공</p>
                <p><span>TEL : &nbsp;</span>053-850-6570</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
