import React , {useState} from "react";
import CommentList from "../comments/CommentList";
import UserApi from "../../api/UserApi";

function PostCard({ post, onDeleteClick, onLikeClick }) {
  const [user, setUser] = useState(UserApi.currentUser);
  UserApi.bindCurrentUserStateSetter(setUser);
  const [likes, setLikes] = useState(post.likes);

  const incrementLikes = () => {
    setLikes(likes + 1);
    onLikeClick({ id: post.id, body: post.body, likes: likes + 1});
  };
  
  return (
    <div className="card mt-3">
      <div className="card-body">
      <div>{user.name}</div>
        <p>{post.body}</p>
        <p>{(likes === 0) ? 'No' : likes} likes</p>
        <button className="btn btn-primary btn-sm" onClick={incrementLikes} id="post-like">Like</button>
        <button className="btn btn-danger btn-sm mb-2" onClick={onDeleteClick}>
          Delete
        </button>
        
        <div className="comment-body">
          <CommentList post={post} />
        </div>
      </div>
    </div>
  );
}

export default PostCard;
