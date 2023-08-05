import React, { Fragment } from 'react'
import Footer from '../layout/Footer/Footer'
import UserNavbar from '../layout/UserNavbar/UserNavbar'
import YourReviews from './YourReviews/YourReviews'

const UserReviews = () => {
  return (
    <Fragment>
        <UserNavbar/>
        <YourReviews/>
        <Footer/>
    </Fragment>
    // <YourReviews/>
  )
}

export default UserReviews