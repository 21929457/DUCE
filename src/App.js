import React from "react";
import $ from 'jquery';
import './css/initialized.css';
import {SectionsContainer, Section} from 'react-fullpage';
import Header from './components/Header';
import Banner from './components/Banner';
import Major from './components/Major';
import Venture from "./components/venture";

function App() {
  let options = {
    anchors: ['banner', 'major', 'venture' , 'studnetActivities' , 'newsLetter'],
    navigation: true,
  };

  $(".Navigation-Anchor").css("background-color" , "unset");
  $(".Navigation-Anchor.active").css("transform" , "scale(1.5)");
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
