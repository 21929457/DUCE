import React from "react";
import './css/initialized.css';
import {SectionsContainer, Section} from 'react-fullpage';
import Header from './components/Header';
import Banner from './components/Banner';
import Major from './components/Major';
import Venture from "./components/venture";
import Activity from "./components/Activity";
import $ from 'jquery';

function App() {
  let options = {
    anchors: ['banner', 'major', 'venture' , 'studnetActivities' , 'newsLetter'],
    navigation: true,
  };

  return (
    <div>
      <Header/>
        <SectionsContainer {...options}>
          <Section><Banner/></Section>
          <Section><Major/></Section>
          <Section><Venture/></Section>
          <Section><Activity/></Section>
          <Section></Section>
        </SectionsContainer>
    </div>
  );
}

export default App;
