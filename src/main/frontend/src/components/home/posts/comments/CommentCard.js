import React, { useState } from "react";
import { AiFillDelete, AiFillLike } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";

function CommentCard({ currentUser, comment, onDeleteClick, onLikeClick }) {
  const [likes, setLikes] = useState(comment.likes.length);
  const relativeTime = calculateRelativeTime(comment.date);

  const incrementLikes = () => {
    if (comment.likes.some((like) => like.id === currentUser.id)) {
      for (let i = 0; i < comment.likes.length; i++) {
        if (comment.likes[i].id === currentUser.id) {
          comment.likes.splice(i, 1);
        }
      }
      setLikes(likes - 1);
    } else {
      comment.likes.push(currentUser);
      setLikes(likes + 1);
    }
    onLikeClick({
      id: comment.id,
      body: comment.body,
      date: comment.date,
      likes: comment.likes,
      user: comment.user,
    });
  };

  function calculateRelativeTime(dateString) {
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
  }

  return (
    <div className="card mt-3">
      <div className="card-body">
        <p className="post-comment-info">
          <div className="d-flex">
            <div className="color-red mr-2">
              <FaUserCircle size={25} />
            </div>
            <strong className="mr-2 text-uppercase">{comment.user.name}</strong>
            <em className="mr-2">{relativeTime}</em>
          </div>
        </p>
        <p>{comment.body}</p>
        <div className="my-3 pb-3 d-flex border-bottom">
          <button className="btn-circle border-0 btn-xs background-red">
            <AiFillLike
              style={{
                fontSize: "10px", // Set the size
                color: "white", // Set the color
                marginBottom: "2px",
              }}
            />
          </button>
          <div className="ml-2">{likes === 0 ? "0" : likes}</div>
        </div>
        <div className="d-flex justify-content-start">
          <button
            className="border-0 bebas-font btn-like mr-4"
            onClick={incrementLikes}
          >
            {comment.likes.some((like) => like.id === currentUser.id)
              ? "Unlike"
              : "Like"}
          </button>
          {currentUser.id === comment.user.id && (
            <button
              className="border-0 bebas-font btn-like"
              onClick={onDeleteClick}
            >
              remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
