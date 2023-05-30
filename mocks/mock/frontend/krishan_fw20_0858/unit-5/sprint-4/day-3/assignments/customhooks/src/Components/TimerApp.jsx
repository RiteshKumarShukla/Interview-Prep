import React from 'react'

const TimerApp = () => {

  return (
    <div>
        <input type="number" style={{width:'50px',height:'30px',marginLeft:"1rem"}}/> <span>Hours</span>
        <input type="number" style={{width:'50px',height:'30px',marginLeft:"1rem"}}/> <span>Minutes</span>
        <input type="number" style={{width:'50px',height:'30px',marginLeft:"1rem"}}/> <span>Seconds</span>
    </div>
  )
}

export default TimerApp