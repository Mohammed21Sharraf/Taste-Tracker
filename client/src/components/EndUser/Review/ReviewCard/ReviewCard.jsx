import React from 'react'
import './ReviewCard.scss'

const ReviewCard = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="Restaurant" className='card-img-top'/>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, ipsam!
        </p>
        </div>
    </div>
  )
}

export default ReviewCard