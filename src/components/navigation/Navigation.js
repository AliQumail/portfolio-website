import React from 'react';
import {Container,Row} from 'react-bootstrap';
import './Navigation.css';


const Navigation = () => {
    return   <Container>
       <Row className='justify-content-center nav-bar'>
           <a href='https://www.linkedin.com/in/ali-qumail-4b77601a8/' rel="noreferrer" target="_blank" className='nav-items'>Linkedin</a>
           <a href='https://github.com/AliQumail' rel="noreferrer" target="_blank" className='nav-items'>Github</a>
           <a href='https://aliqumail.medium.com/' rel="noreferrer" target="_blank" className='nav-items'>Medium</a>
           <a href='/' className='nav-items'>Resume</a>
       </Row>
    </Container>

}

export default Navigation;