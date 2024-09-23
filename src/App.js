import React from "react";
import './css/initialized.css';
import {SectionsContainer, Section} from 'react-fullpage';
import Header from './components/Header';
import Banner from './components/Banner';
import Major from './components/Major';
import Venture from "./components/venture";

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
          <Section><Banner/></Section>
          <Section><Major/></Section>
          <Section><Venture/></Section>
          <Section>studentActivities</Section>
          <Section>newsLetter</Section>
        </SectionsContainer>
      </React.StrictMode>
    </div>
  );
}

export default App;
