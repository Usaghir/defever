import React, {useState} from "react";

function CommentCard({ currentUser, comment, onDeleteClick, onLikeClick }) {
  const [likes, setLikes] = useState(comment.likes);

  const incrementLikes = () => {
    setLikes(likes + 1);
    onLikeClick({ id: comment.id, body: comment.body, date: comment.date,
    likes: likes + 1, user: comment.user});
  }
  return (
    <div className="card mt-3">
      <div className="card-body">
        <p className="post-comment-info">Comment by <strong>{comment.user.name}</strong> at <em>{comment.date}</em></p>
        <p>{comment.body}</p>
        <p className="post-comment-info">{(likes === 0) ? 'No' : likes} likes</p>
        <button className="btn btn-primary btn-sm" onClick={incrementLikes} id="comment-like">Like</button>
        { (currentUser.id === comment.user.id) ?
        <button className="btn btn-primary btn-sm" onClick={onDeleteClick} id="comment-delete">
          Delete
        </button>
        : null}
      </div>
    </div>
  );
}

export default CommentCard;
