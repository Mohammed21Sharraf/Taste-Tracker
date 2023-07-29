import React from 'react'
import Footer from '../Homepage/Footer/Footer'
import Navbar from '../Homepage/Navbar/Navbar'
import Reviews from './GetReviews/Reviews'

const Review = () => {
  return (
    <div className="Review">
        <Navbar/>
        <div>
            <Reviews/>
        </div>
        <div>
        <Footer/>
        </div>
        
    </div>
    
  )
}

export default Review