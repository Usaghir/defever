import React, { useState } from 'react';
import CommentList from '../comments/CommentList';
import { FaUser } from 'react-icons/fa';
import '../Components.css';

function PostCard({ currentUser, post, onDeleteClick, onLikeClick }) {
  const [likes, setLikes] = useState(post.likes.length);

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

  return (
    <div className="card mt-3 rounded-0">
      <div className="card-body">
        <div
          className="card "
          style={{
            backgroundColor: '#6c849c',
            color: 'white',
          }}
        >
          <div className="row justify-content-between">
            <div className="row ml-4">
              <span >
                <FaUser size={50}></FaUser>
              </span>
              <h3 className="mt-4 ml-2 font-weight-bold">{post.user.name}</h3>
            </div>
            <em className="mr-4 mt-2" style={{ color: '#3a3b3c', fontSize: '10px' }}>
              {post.date.toString()}
            </em>
          </div>
          <p className="ml-4 mr-4" style={{ fontFamily: 'sans-serif' }}>
            {post.body}
          </p>
        </div>
        <p className="post-comment-info ">{likes === 0 ? 'No' : likes} likes</p>
        <button
          className="btn btn-primary btn-sm rounded-0 bebas-font"
          style={{
            backgroundColor: '#0C2C54',
          }}
          onClick={incrementLikes}
          id="post-like"
        >
          {post.likes.some((like) => like.id === currentUser.id) ? 'Unlike' : 'Like'}{' '}
        </button>
        {currentUser.id === post.user.id ? (
          <button
            className="btn btn-danger btn-sm mb-2 rounded-0 bebas-font"
            style={{
              backgroundColor: '#FA354D',
            }}
            onClick={onDeleteClick}
          >
            Delete
          </button>
        ) : null}

        <div className="comment-body ">
          <CommentList post={post} />
        </div>
      </div>
    </div>
  );
}

export default PostCard;
