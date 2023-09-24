import React, { useState, useEffect } from "react";
import PostsApi from "../../../api/PostsApi";
import PostForm from "./PostForm";
import PostCard from "./PostCard";
import UserApi from "../../../api/UserApi";

function Posts() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [userData, postData] = await Promise.all([
          UserApi.current(),
          PostsApi.getAllPosts(),
        ]);
        setUser(userData.data);
        setPosts(postData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const createPost = async (postData) => {
    if (!postData) return;

    try {
      const response = await PostsApi.createPost({
        body: postData.body,
        date: new Date().toLocaleString(),
        likes: [],
        user,
      });
      const post = response.data;
      setPosts((prevPosts) => [post, ...prevPosts]);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const updatePost = async (newPostData) => {
    try {
      await PostsApi.updatePost({
        id: newPostData.id,
        body: newPostData.body,
        date: newPostData.date,
        likes: newPostData.likes,
        user: newPostData.user,
      });
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const deletePost = async (postToDelete) => {
    try {
      await PostsApi.deletePost(postToDelete.id);
      setPosts((prevPosts) =>
        prevPosts.filter((post) => post.id !== postToDelete.id)
      );
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const sortedPosts = [...posts].sort((post1, post2) =>
    post1.likes <= post2.likes ? 1 : -1
  );

  return (
    <div className=" shadow-lg   rounded mb-4">
      <PostForm
        className="card"
        onSubmit={(postData) => createPost(postData)}
      />

      {sortedPosts.map((post) => (
        <PostCard
          className="card m-5"
          key={post.id}
          currentUser={user}
          post={post}
          onLikeClick={(newPostData) => updatePost(newPostData)}
          onDeleteClick={() => deletePost(post)}
        />
      ))}
    </div>
  );
}

export default Posts;
