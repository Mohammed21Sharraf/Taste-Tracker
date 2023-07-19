import React from 'react'
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Cards from './RestaurantCard/Cards'
import Footer from './Footer/Footer'
import RestaurantOwner from './RestaurantOwner/RestaurantOwner';

const Homepage = () => {
  return (
    <div className="Homepage">
        <Navbar/>
        <Header/>
        <Cards/>
        <RestaurantOwner/>
        <Footer/>
        
    </div>
  )
}

export default Homepage