import '../css/userBottom.scss';
import logoimg from '../images/user/logo.png';

function Footer() {
    return (
      <footer>
        <div className="f-text-wrap">
          <div className="footer-l">
            <div className="logo">
              <img src={logoimg}></img>
              <p>대구대학교 정보통신대학 컴퓨터공학과</p>
            </div>
            <div className="footer-l-tit">
              <p>정보통신대학장</p>
              <p>김순철</p>
            </div>
            <div className="footer-info">
              <p><span>Location</span>경상북도 경산시 진량읍 대구대로 201 정보통신대학 컴퓨터정보공학부 컴퓨터공학전공</p>
              <p><span>TEL</span>053-850-6570</p>
            </div>
          </div>
          <div className="footer-r">

          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
