import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { PostContext } from "../context/PostContext";

export default function PostDetails() {
  const { id } = useParams();
  const { posts } = useContext(PostContext);
  const post = posts?.find((p) => p.id === Number(id));

  if (!posts || posts.length === 0)
    return <p>Go to <Link to="/posts">Posts</Link> to fetch posts first.</p>;

  if (!post)
    return (
      <div>
        <p>Post not found.</p>
        <Link to="/posts">Back to Posts</Link>
      </div>
    );

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/posts">← Back to Posts</Link>
    </div>
  );
}
