import React from "react";
import PostCard from "./PostCard";

export default function PostList({ posts = [] }) {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
