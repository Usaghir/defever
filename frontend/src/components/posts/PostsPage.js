import React from "react";
import PostsApi from "./../../api/PostsApi";
import PostForm from "./PostForm";
import PostCard from "./PostCard";
import UserApi from "../../api/UserApi";

class PostsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      posts: [],
    };
  }



  async createPost(postData) {
    if(postData !== undefined) {
      try {
        const user = this.state.user;
        const response = await PostsApi.createPost({body: postData.body,
        date: new Date().toLocaleString(), likes: [], user});
        const post = response.data;
        const newPosts = this.state.posts.concat(post);
  
        this.setState({
          posts: newPosts,
        });
      } catch (e) {
        console.error(e);
      }
    }
  }

  async updatePost(newPostData) {
    try {
      await PostsApi.updatePost({id: newPostData.id, body: newPostData.body,
      date: newPostData.date, likes: newPostData.likes, user: newPostData.user});
    } catch (e) {
      console.error(e);
    }
  }

  async deletePost(post) {
    try {
      await PostsApi.deletePost(post.id);
      const newPosts = this.state.posts.filter((p) => p.id !== post.id);
      this.setState({
        posts: newPosts,
      });
    } catch (e) {
      console.error(e);
    }
  }

  componentDidMount() {
    PostsApi.getAllPosts()
      .then(({ data }) => this.setState({ posts: data }))
      .catch((err) => console.error(err));
    UserApi.current()
      .then(( {data }) => this.setState({ user: data }))
      .catch((err) => console.error(err));
  }

  render() {
    const posts = this.state.posts.sort((post1, post2) =>
                  (post1.likes <= post2.likes) ? 1 : -1);


    return (
      <div>
        <PostForm onSubmit={(postData) => this.createPost(postData)} />

        {posts.map((post) => (
          <PostCard
            key={post.id}
            currentUser={this.state.user}
            post={post}
            onLikeClick={(newPostData) => this.updatePost(newPostData)}
            onDeleteClick={() => this.deletePost(post)}
          />
        ))}
      </div>
    );
  }
}

export default PostsPage;
