import '../css/layout.scss';
import Banner from './Banner';
import Major from './Major';
import Venture from './Venture';
import Location from './Location';

function Main() {
  return (
    <div className="container">
      <Banner />
      <div className="inner">
        <Major />
        <Venture />
        <Location />
      </div>
    </div>
  );
}

export default Main;