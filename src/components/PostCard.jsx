import React from "react";
import { useNavigate } from "react-router-dom";

export default function PostCard({ post }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/posts/${post.id}`)}
      style={{
        border: "1px solid #ddd",
        padding: 12,
        borderRadius: 6,
        cursor: "pointer",
      }}
    >
      <h3>{post.title}</h3>
      <p>{post.body.slice(0, 80)}{post.body.length > 80 ? "..." : ""}</p>
      <div style={{ marginTop: 8, fontSize: 13, color: "#555" }}>
        Read More →
      </div>
    </div>
  );
}
