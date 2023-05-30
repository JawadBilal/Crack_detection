import React from 'react'
import { Link } from "react-router-dom"
import BannerImage from "../Images/crack.jpg"
import '../styles/Home.css'

function Home() {
  return (
     <div className='Home' style={{ backgroundImage: `url(${BannerImage})` }}>
       <div className='main'>
        <h1>Crack Detection</h1>
        <h3>Crack detection in concrete structures in images by using deep learning</h3>
        <Link to="/service">
         <button>Try Now</button>
        </Link>
        

        
       </div>
      
    </div>
  )
}

export default Home
