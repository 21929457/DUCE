import React from "react";
import './css/initialized.css';
import {SectionsContainer, Section} from 'react-fullpage';
import Header from './components/Header';
import Banner from './components/Banner';

function App() {
  let options = {
    anchors: ['banner', 'major', 'venture' , 'studnetActivities' , 'newsLetter'],
    navigation: false,
};
  return (
    <div>
      <Header/>
        <SectionsContainer {...options}>
        <Section>
          <Banner></Banner>
        </Section>
        <Section>major</Section>
        <Section>venture</Section>
        <Section>studentActivities</Section>
        <Section>newsLetter</Section>
      </SectionsContainer>
    </div>
  );
}

export default App;
