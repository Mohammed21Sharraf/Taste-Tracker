import React from 'react'
import Footer from '../layout/Footer/Footer'
import Navbar from '../layout/Navbar/Navbar'
import Reviews from './GetReviews/Reviews'


const Review = () => {

  return (
    <div className="Review">
      <Navbar/>
      <div>
        <Reviews />
      </div>
      <div>
        <Footer />
      </div>

    </div>

  )
}

export default Review