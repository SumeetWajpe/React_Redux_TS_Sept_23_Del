import React, { Component } from "react";

export default class Posts extends Component {
  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(posts => console.log(posts));
  }
  render() {
    return (
      <div>
        <header>
          <h1>All Posts</h1>
        </header>
        <main>
          <ul></ul>
        </main>
      </div>
    );
  }
}
