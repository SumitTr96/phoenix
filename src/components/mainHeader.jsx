import React from 'react'
import { Link } from 'react-router-dom'
import mainImage from '../images/main_header.png'

function mainHeader() {
  return (
    <header className='main_header'>
      <div className="container main_header_container">
        <div className='main_header_left'>
          <h4>#100 Days of Workout</h4>
          <h1>Join the legend of fitness world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dicta obcaecati architecto facere numquam voluptates.
          </p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className='main_header_right'>
            <div className='main_header_circle'></div>
            <div className="main_header_image">
              <img src={mainImage} alt=""></img>
            </div>
        </div>
      </div>
    </header>
  )
}

export default mainHeader