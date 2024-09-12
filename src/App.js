import React from "react";
import {SectionsContainer, Section} from 'react-fullpage';
import Header from './components/Header';

function App() {
  let options = {
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree' , 'sectionfourth'],
    navigation: false,
};
  return (
    <div>
      <Header/>
      <SectionsContainer {...options}>
        <Section>section1</Section>
        <Section>section2</Section>
        <Section>section3</Section>
        <Section>section4</Section>
      </SectionsContainer>
    </div>
  );
}

export default App;
