import React from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';


import './Skills.css';

function Skills(){
  
  return <div className='skills-outer-div'><Container>
     <h3 className='decorated mt-5'><span>Skills</span></h3> 
     <Row className='mt-5'>
      <Col xl={4} xm={3} xs={12} className=' d-flex justify-content-center'>
       <Card className='card' >
       <Card.Header style={{color:'red',fontSize:'1.3rem'}}>Programming</Card.Header>
        <Card.Body>
         <Card.Subtitle className="mb-2 text-muted">2018 - </Card.Subtitle>
         <Card.Text>
             <ol className="skills-list">
               <li>Python</li>
               <li>Javascript</li>
               <li>C++</li>
               <li>Git and Github</li>
              </ol>
         </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col  xl={4} xm={3} xs={12} className=' d-flex justify-content-center'>
       <Card  className='card '>
       <Card.Header style={{color:'red',fontSize:'1.3rem'}}>Front End Development </Card.Header>
        <Card.Body>
      
         <Card.Subtitle className="mb-2 text-muted">2020 - </Card.Subtitle>
         <Card.Text>
         <ol className="skills-list">
          
               <li>Html</li>
               <li>Css</li>
               <li>Bootstrap</li>
               <li>React Js</li>
        </ol>
         </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col  xl={4} xm={3} xs={12} className=' d-flex justify-content-center'>
       <Card  className='card '>
       <Card.Header style={{color:'red',fontSize:'1.3rem'}}>Back End Development</Card.Header>
        <Card.Body>
      
         <Card.Subtitle className="mb-2 text-muted">2020 - </Card.Subtitle>
         <Card.Text>
         <ol className="skills-list">
           
               <li> Node Js</li>
               <li>Express Js</li>
               <li>MongoDb </li>
               <li>Mongoose</li>
        </ol>
         </Card.Text>
        </Card.Body>
      </Card>
      </Col>
     </Row>
         
     </Container>
     </div>
}
export default Skills;
