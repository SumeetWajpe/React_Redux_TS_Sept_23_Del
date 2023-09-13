import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostModel } from "../../models/postmodel";

export default function PostDetails() {
  const { id } = useParams();

  const [post, setPost] = useState(new PostModel()); // using default values
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(response => response.json())
      .then(post => setPost(post));
  });
  return (
    <div>
      <header>
        <h1>Post Details for {id}</h1>
      </header>
      <main>
        <section>
          <div>
            <h2>Title : {post.title}</h2>
            <h4>Body : {post.body}</h4>
          </div>
        </section>
      </main>
    </div>
  );
}
