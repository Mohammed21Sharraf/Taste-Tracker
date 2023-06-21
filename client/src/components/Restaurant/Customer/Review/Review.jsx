import React from 'react'
import './Review.scss'
import { PostData } from '../../../../Data/PostData'
import Post from './Post'

const Review = () => {
  return (
    <div className="Review">
        {PostData.map((post, id)=>{
            return <Post data={post} id={id}/>
        })}
    </div>
  )
}

export default Review