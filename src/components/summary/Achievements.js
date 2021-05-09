import React from 'react'


import './Styles.css'; 

function Achievements(props){
  return <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
          <span className='title'>Achievements</span>

    </div>
    <div className="flip-card-back card-summary">
      I scored <b className='highlights'>Second position among 400 participants in an Online Coding Hackathon</b> held by a Software Company 'DEVSINC'.
      I also <b className='highlights'>passed the linkedin Javascript Assessment test</b> and was <b className='highlights'>ranked in top 5%</b> among 900k+ takers.
    </div>
  </div>
</div>

}

export default Achievements;