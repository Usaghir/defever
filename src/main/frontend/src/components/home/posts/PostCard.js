import React, { useState } from "react";
import CommentList from "./comments/CommentList";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns"; // Import the necessary function

import "./Post.css";

function PostCard({ currentUser, post, onDeleteClick, onLikeClick }) {
  const [likes, setLikes] = useState(post.likes.length);
  const [showComments, setShowComments] = useState(false);

  const incrementLikes = () => {
    if (post.likes.some((like) => like.id === currentUser.id)) {
      for (let i = 0; i < post.likes.length; i++) {
        if (post.likes[i].id === currentUser.id) {
          post.likes.splice(i, 1);
        }
      }
      setLikes(likes - 1);
    } else {
      post.likes.push(currentUser);
      setLikes(likes + 1);
    }
    onLikeClick({
      id: post.id,
      body: post.body,
      date: post.date,
      likes: post.likes,
      user: post.user,
    });
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const calculateRelativeTime = (dateString) => {
    try {
      // Split the date string into date and time parts
      const [datePart, timePart] = dateString.split(', ');
      
      // Split the date part into day, month, year
      const [day, month, year] = datePart.split('/');
      
      // Split the time part into hours, minutes, seconds
      const [hours, minutes, seconds] = timePart.split(':');
      
      // Create a new Date object with the parsed values
      const parsedDate = new Date(year, month - 1, day, hours, minutes, seconds);
      
      if (!isNaN(parsedDate)) {
        // If the parsed date is valid, calculate the relative time
        return formatDistanceToNow(parsedDate, { addSuffix: true });
      } else {
        // Handle the case where the date couldn't be parsed
        return "Invalid Date";
      }
    } catch (error) {
      // Handle any other errors that may occur during parsing
      return "Invalid Date";
    }
  };

  return (
    <div className="card mt-3 shadow-lg">
      <div className="card-body">
        <div className="card background-blue text-white text-start p-4">
          <div className="d-flex ">
            <div className="color-red">
              <FaUserCircle size={50} />
            </div>
            <div className="pl-2">
              <h6 className="font-weight-bold text-uppercase">
                {post.user.name}
              </h6>
              <h6 className="pt-1">
                {calculateRelativeTime(post.date)} {/* Display relative time */}
              </h6>
            </div>
          </div>
          <p className="mt-4">{post.body}</p>
        </div>
        <div className="my-3 pb-3 ml-3 d-flex border-bottom">
          <button className="btn-circle border-0 btn-sm background-red">
            <AiFillLike
              style={{
                fontSize: "15px",
                color: "white",
                marginBottom: "2px",
              }}
            />
          </button>
          <div className="ml-2">{likes === 0 ? "0" : likes} </div>
        </div>
        <div className="my-4">
          <div className="d-flex justify-content-around ">
            <button
              className={`border-0 bebas-font btn-post ${
                post.likes.some((like) => like.id === currentUser.id)
                  ? "Unlike"
                  : "Like"
              }`}
              onClick={incrementLikes}
            >
              <AiFillLike
                style={{
                  fontSize: "28px",
                  marginRight: "15px",
                }}
              />
              {post.likes.some((like) => like.id === currentUser.id)
                ? "Unlike"
                : "Like"}
            </button>
            <button
              className="border-0 bebas-font btn-post"
              onClick={toggleComments}
            >
              <FaComment
                style={{
                  fontSize: "25px",
                  marginRight: "15px",
                }}
              />
              {showComments ? "Close" : "Comment"}
            </button>
            {currentUser.id === post.user.id && (
              <button
                className="border-0 bebas-font btn-post"
                onClick={onDeleteClick}
              >
                <AiFillDelete
                  style={{
                    fontSize: "28px",
                    marginRight: "15px",
                  }}
                />
                Delete
              </button>
            )}
          </div>
        </div>
        {showComments && (
          <div className="comment-body mb-4">
            <CommentList post={post} />
          </div>
        )}
      </div>
    </div>
  );
}

export default PostCard;
