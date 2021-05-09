import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";

import Navigation from './components/navigation/Navigation';
import Intro from './components/intro/Intro';
import Summary from './components/summary/Summary';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import Resume from './components/Resume';

const App = () => {

  return <Router basename={process.env.PUBLIC_URL}>
  <Route exact path="/">
    <Navigation/>
     <Intro/>
    <Summary/>
     <Skills/>
     <Projects/>
     <Footer/>
      
  </Route>       
  <Route exact path="/resume">
     <Resume/>
  </Route>
 
  
 
  </Router>

}

export default App;

