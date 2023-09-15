import React, { Component, useEffect, useState } from "react";
import { PostModel } from "../../models/postmodel";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../redux/store/store";
import { fetchposts } from "../../redux/reducers/posts.reducer";

type PostsState = {
  posts: PostModel[];
};

const Posts: React.FC = () => {
  const posts = useSelector((store: AppState) => store.posts);
  let dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchposts());
  }, []);
  return (
    <>
      <div>
        <header>
          <h1>All Posts</h1>
        </header>
        <main>
          {posts.length > 0 ? (
            <ul className="list-group">
              {posts.map((post: PostModel) => (
                <li key={post.id} className="list-group-item">
                  <Link to={`/postdetails/${post.id}`}> {post.title}</Link>
                </li>
              ))}
            </ul>
          ) : (
            "Loading.."
          )}
        </main>
      </div>
    </>
  );
};
export default Posts;
// export default class Posts extends Component<{}, PostsState> {
//   state: Readonly<PostsState> = { posts: [] };
//   componentDidMount(): void {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(response => response.json())
//       .then(posts => this.setState({ posts }));
//   }
//   render() {
//     return (
//   <div>
//     <header>
//       <h1>All Posts</h1>
//     </header>
//     <main>
//       <ul className="list-group">
//         {this.state.posts.map(post => (
//           <li key={post.id} className="list-group-item">
//             {post.title}
//           </li>
//         ))}
//       </ul>
//     </main>
//   </div>
//     );
//   }
// }
