import React from 'react'
import BannerImage from "../Images/concrete1.jpg"
import '../styles/Service.css'
import { Link } from 'react-router-dom'

function Service() {
  return (
    <div className='serve' style={{ backgroundImage: `url(${BannerImage})` }}>
      <h1>Detect Cracks</h1>
      <h3>Detect cracks </h3>
      <Link to='/cracking'>
      <button>Try Now</button>
      </Link>
    </div>
  )
}

export default Service
