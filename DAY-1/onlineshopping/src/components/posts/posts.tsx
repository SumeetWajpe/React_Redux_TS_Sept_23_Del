import React, { Component } from "react";
import { PostModel } from "../../models/postmodel";

type PostsState = {
  posts: PostModel[];
};

export default class Posts extends Component<{}, PostsState> {
  state: Readonly<PostsState> = { posts: [] };
  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  }
  render() {
    return (
      <div>
        <header>
          <h1>All Posts</h1>
        </header>
        <main>
          <ul>
            {this.state.posts.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </main>
      </div>
    );
  }
}
