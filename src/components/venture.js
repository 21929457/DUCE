import '../css/component/venture.css';

function Venture () {
    return (
        <div className='venture-wrap'>
            <p className='venture-tit'>VENTURE</p>
            <p className='venture-tit two'>BUSINESS</p>
            <div className='venture-box-wrap'>
                <div className='venture-box'>
                    <div className='venture-txtBox'>
                        <p className='venture-boxTit'>벤처</p>
                        <p className='venture-discTit'>기업 설명회 및 교육 콘텐츠를 수강하며 학습 기회를 제공합니다!</p>
                    </div>
                </div>
                <div className='venture-box'>
                    <div className='venture-txtBox'>
                        <p className='venture-boxTit'>벤처A</p>
                        <p className='venture-discTit'>벤처기업을 통한 직접적인 성장을 경험하세요!</p>
                    </div>
                </div>
                <div className='venture-box'>
                    <div className='venture-txtBox'>
                        <p className='venture-boxTit'>스타트업 아카데미</p>
                        <p className='venture-discTit'>캡스톤, 해커톤과 같은 각종 경진대회와 직무부트캠프를 통해 성장하세요!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Venture;