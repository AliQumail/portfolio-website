import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

import './Summary.css';
import Aboutme from './Aboutme';
import Education from './Education';
import Achievements from './Achievements';



function Summary(){
    return <Container className='summary-container'>
            <h3 className='decorated'><span>Short Summary</span></h3> 
            <Row className='cards-row'>
               <Col className='mt-2' lg={4} md={6}> <Aboutme/> </Col>
               <Col className='mt-2' lg={4} md={6}> <Education/> </Col>
               <Col className='mt-2' lg={4} md={6}> <Achievements/> </Col>
            </Row>
    </Container>
}

export default Summary;