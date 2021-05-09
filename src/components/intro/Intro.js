import React from 'react';
import './Intro.css'

import {Container,Row,Col,Button} from 'react-bootstrap';



import image from '../../assets/coding.gif';

function Intro(){
    
    function handleClick(){
      const win = window.open("/resume", "_blank");
      win.focus();
    }
    
  

    return <div className='outer-div'>
      <Container className='outer-container'>
      <Row className='intro-row'>
         <Col  xm={5} className='animation d-flex justify-content-center'>
                  <img src={image} className='coding-gif' alt=''/>
         </Col>     
         <Col className='introduction justify-content-center'>
            <h4 className='name'>Hi I'm Ali Qumail</h4>
            <h5 className='key-tags'>STUDENT | PROGRAMMER | WEB </h5>
            <Button variant="outline-primary" size="lg" onClick={handleClick}>View Resume</Button>
         </Col>
       </Row>
        
      </Container>
    </div>
}

export default Intro;