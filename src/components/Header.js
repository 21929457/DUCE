import '../css/userTop.scss'
import $ from 'jquery'
import logoimg from '../images/logo.png'

function Header() {

    $(function(){
        $(window).on("scroll" , function() {
            let windowY = $(window).scrollTop();
            let header = $("header");

            if(windowY > 0) {
                header.css("backgroundColor" , "#FFF");
                header.css("height" , "100px");
            }
            else {
                header.css("backgroundColor" , "transparent");
                header.css("height" , "90px");
            }
        });
    });

    return (
      <header>
        <div className='header-inner'>
            <div className="logo-wrap">
                <a href="./">
                    <img src={logoimg} alt="로고_이미지"></img>
                    <p>Computer<br/>Engineering</p>
                </a>
            </div>
            <nav>
                <a href="#">전공안내</a>
                <a href="#">공지사항</a>
                <a href="#">커뮤니티</a>
                <a href="#">학생활동</a>
            </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
