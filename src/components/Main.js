import '../css/layout.scss';
import Section from './Section';
import Banner from './Banner';

function Main() {
  return (
    <div className="container">
      <div className="inner">
        <Banner/>
        <Section/>
      </div>
    </div>
  );
}

export default Main;
