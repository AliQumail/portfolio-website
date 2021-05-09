import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';


import './Footer.css';

function Footer(){
  function handleSubmit() {
    document.getElementById("form-email").reset();
   
   }
   return <div className='footer-div'>
        <Container >
          <Row >
              <Col  className='hire-me-col justify-content-center'> 
                <h6 className='hire-me-title mt-5'>Seeking Opportunities</h6>
               <p className='hire-me-para'> I am currently looking for an part-time, remote work or an internhip so
                if you any available position, I would love to be a part. You can email me 
                or directly fill the box with your email and message on left.  
               </p>
               <p className='email-para'>Email me at <span className='my-email'>aliqumail8@gmail.com</span></p>
               
              </Col>
              <Col className='email-col' >
               <form action="mailto:aliqumail@gmail.com" onSubmit={handleSubmit}
               method="post" enctype="text/plain"
               id='form-email'
               
               >
               <input type='text' 
               placeholder="Email" 
               name='from_email' 
              
               className='email-input mt-5'/>
               <br/>
               <textarea type='text'
               placeholder="Enter a message"  
          
               name='message' 
               className='message-textarea'/><br/>
               <button className='submit-button' type='submit'>Submit</button>
               </form>
              </Col>
          </Row>
         
        </Container>
        <div className='copyright-div'>
             <span className='copyright-span'>© Ali Qumail</span>
          </div>
        
        </div>
}

export default Footer;