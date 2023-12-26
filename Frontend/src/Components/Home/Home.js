import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column ">
        <h1 className='text-center'>
            
        Organize Your Day<br/>Achieve More, Stay Productive!
        </h1>
        <p className="text-center">
        Elevate efficiency and take charge of your day with our intuitive to-do app.<br/> Embrace simplicity, embrace accomplishment – your tasks, your triumphs.
        </p>
        <button className='home-button p-2'>Make Todo Lists</button>
      </div>
    </div>
  )
}

export default Home
