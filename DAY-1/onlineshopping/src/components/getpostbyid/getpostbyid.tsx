import React, { useEffect, useState } from "react";

export default function GetPostById() {
  const [postId, setPostId] = useState(1);
  const [thePost, setThePost] = useState({
    id: 0,
    userId: 0,
    title: "",
    body: "",
  });
  useEffect(() => {
    console.log("Use Effect !");
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(post => setThePost(post));
  }, [postId]);
  return (
    <div>
      <label>
        Post Id :{" "}
        <input type="text" onChange={e => setPostId(+e.target.value)} />{" "}
      </label>
      <h2>{thePost.title}</h2>
    </div>
  );
}
