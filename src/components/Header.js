import '../css/component/header.css';

function Header (){
    return (
        <header>
            <nav>
                <a href="#major">전공안내</a>
                <a href="https://ipsi.daegu.ac.kr/intro.html">입학안내</a>
                <a href="https://ce.daegu.ac.kr/hakgwa_home/ce/sub.php?menu=page&menu_id=30">공지사항</a>
                <a href="#studnetActivities">학생활동</a>
                <a href="#newsLetter">뉴스레터</a>
            </nav>
        </header>
    )
}

export default Header;