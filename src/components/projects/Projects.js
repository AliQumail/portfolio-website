import React, { useState } from 'react';
import {Container,Row,Col} from 'react-bootstrap';

import './Projects.css';

import quizappgif from '../../images/quizappgif.gif';
import gpacalcgif from '../../images/gpacalcgif.gif';
import smbgamegif from '../../images/smbgamegif.gif';
import tictactoegif from '../../images/tictactoegif.gif';
import journalappgif from '../../images/journalappgif.gif';


function Projects(){
  const [displayProject,setDisplayProject] = useState(gpacalcgif);
  
  function handleClick(value){
    console.log(value);
     setDisplayProject(value);
  }
  
  return   <Container fluid className='projects-container'>
  <h3 className='decorated mt-5'><span>Projects</span></h3> 
    <Row fuild className='mt-5 project-row'>
     
    <Col xl={8}>
        <img src={displayProject} alt='not supported' className="project-images"/>
    </Col>
    <Col className='project-headings mb-4' >
        <ol className='mt-5'>
         <li className='project-name' onClick={() => handleClick(quizappgif)}>Quiz Taking App</li>
         <li className='project-name' onClick={() => handleClick(gpacalcgif)}>Gpa Calculator</li>
         <li className='project-name' onClick={() => handleClick(smbgamegif)}>Spend My Billions Game</li>
         <li className='project-name' onClick={() => handleClick(journalappgif)}>My Journal App</li>
         <li className='project-name' onClick={() => handleClick(tictactoegif)}>Tic Tac Toe Game</li>
        </ol>
        You can see more projects on <a href='https://github.com/AliQumail'>Github</a>
      </Col>
      </Row>
</Container>
 
 

}

export default Projects;