import React from "react";
import "./Post.scss";

const Post = ({ data }) => {
  return (
    <div className="Post">
      <img className="img" src={data.img} alt="" />
      <div className="details">
        <span>Name: {data.name} </span>
      </div>
      <span>Review: {data.review}</span>
    </div>
  );
};

export default Post;
