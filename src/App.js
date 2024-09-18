import React from "react";
import './css/initialized.css';
import {SectionsContainer, Section} from 'react-fullpage';
import Header from './components/Header';
import Banner from './components/Banner';
import Major from './components/Major';

function App() {
  let options = {
    anchors: ['banner', 'major', 'venture' , 'studnetActivities' , 'newsLetter'],
    navigation: false,
};
  return (
    <div>
      <Header/>
      <React.StrictMode>
        <SectionsContainer {...options}>
          <Section>
            <Banner></Banner>
          </Section>
          <Section>
            <Major/>
          </Section>
          <Section>venture</Section>
          <Section>studentActivities</Section>
          <Section>newsLetter</Section>
        </SectionsContainer>
      </React.StrictMode>
    </div>
  );
}

export default App;
