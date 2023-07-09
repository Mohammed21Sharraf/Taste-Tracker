import React from 'react'
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Cards from './RestaurantCard/Cards'
const Homepage = () => {
  return (
    <div className="Homepage">
        <Navbar/>
        <Header/>
        <Cards/>

        
    </div>
  )
}

export default Homepage