import React, {useState} from "react";
import UserApi from "../../api/UserApi";

function CommentCard({ comment, onDeleteClick, onLikeClick }) {
  const [user, setUser] = useState(UserApi.currentUser);
  UserApi.bindCurrentUserStateSetter(setUser);
  const [likes, setLikes] = useState(comment.likes);

  const incrementLikes = () => {
    setLikes(likes + 1);
    onLikeClick({ id: comment.id, body: comment.body, likes: likes + 1});
  }
  return (
    <div className="card mt-3">
      <div className="card-body">
      <div>{user.name}</div>
        <p>{comment.body}</p>
        <p>{(likes === 0) ? 'No' : likes} likes</p>
        <button className="btn btn-primary btn-sm" onClick={incrementLikes} id="comment-like">Like</button>
        <button className="btn btn-primary btn-sm" onClick={onDeleteClick} id="comment-delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default CommentCard;
