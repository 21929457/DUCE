import '../css/layout.scss';
import Banner from './Banner';
import Major from './Major';
import Venture from './Venture';

function Main() {
  return (
    <div className="container">
      <Banner />
      <div className="inner">
        <Major />
        <Venture />
      </div>
    </div>
  );
}

export default Main;