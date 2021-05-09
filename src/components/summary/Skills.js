import React from 'react'
import {Button} from 'react-bootstrap';

import './Styles.css'; 

function Card(props){
  return <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
           <span className='title'>Skills</span>
    </div>
    <div className="flip-card-back card-summary">
      My skills are react js 
    </div>
  </div>
</div>

}

export default Card;