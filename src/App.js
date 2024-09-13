import React from "react";
import './css/initialized.css';
import {SectionsContainer, Section} from 'react-fullpage';
import Header from './components/Header';
import Banner from './components/Banner';

function App() {
  let options = {
    anchors: ['banner', 'sectionTwo', 'sectionThree' , 'sectionfourth'],
    navigation: false,
};
  return (
    <div>
      <Header/>
      <SectionsContainer {...options}>
        <Section>
          <Banner></Banner>
        </Section>
        <Section>section2</Section>
        <Section>section3</Section>
        <Section>section4</Section>
      </SectionsContainer>
    </div>
  );
}

export default App;
