import React from 'react'


import './Styles.css';  

function Aboutme(props){
  return <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
           <span className='title'>About Me</span>
    </div>
    <div className="flip-card-back card-summary">
        Apart from that I'm a student, I have a good <b className='highlights'>interest in making web and mobile applications</b>. I want to become
        capable of <b className='highlights'>making application from scratch to deployment all alone</b> and that is why I <b className='highlights'>desire to become a Full stack 
        developer.</b> I have an interest in Data analytics too and always ready to learn new things and stay motivated.
    </div>
  </div>
</div>

}

export default Aboutme;