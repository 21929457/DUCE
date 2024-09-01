import '../css/layout.scss';
import Major from './Major';
import Banner from './Banner';

function Main() {
  return (
    <div className="container">
      <Banner />
      <div className="inner">
        <Major />

      </div>
    </div>
  );
}

export default Main;