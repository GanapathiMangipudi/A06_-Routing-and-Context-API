import React, { createContext, useState } from "react";

export const PostContext = createContext(null);

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <PostContext.Provider
      value={{ posts, setPosts, loading, setLoading, error, setError }}
    >
      {children}
    </PostContext.Provider>
  );
}
