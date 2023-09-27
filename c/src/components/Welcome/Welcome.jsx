import React from 'react'
import './welcome.scss'
export default function Welcome() {
  return (
    <div className='welcome'>
        <div className='container'>
            <div>
                <h2>Stay curious.</h2>
                <p>Read and share new perspectives on just about any topic. Everyone’s welcome.</p>
                <button>Get Started</button>
            </div>
            <img src={require("./icegif-174.gif")} width={300}/>
            
        </div>
    </div>
  )
}
