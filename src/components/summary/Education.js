import React from 'react'


import './Styles.css'; 

function Education(props){
  return <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
           <span className='title'>Education</span>
    </div>
    <div className="flip-card-back card-summary">
     I did my <b className='highlights'>O and A levels</b> and Currently in my <b className='highlights'>Second-year of Fast University</b> doing Computer Science. I have studied core Programming 
      courses like <b className='highlights'>Fundamentals, Object Orientated programming, Data structures, Databases and Algorithms</b> so Far.
    </div>
  </div>
</div>

}

export default Education;