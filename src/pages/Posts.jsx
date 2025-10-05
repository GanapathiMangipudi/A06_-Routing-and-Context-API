import React, { useContext, useEffect } from "react";
import axios from "axios";
import { PostContext } from "../context/PostContext";
import PostList from "../components/PostList";

export default function Posts() {
  const { posts, setPosts, loading, setLoading, error, setError } =
    useContext(PostContext);

  useEffect(() => {
    if (posts && posts.length > 0) return;

    let cancelled = false;
    async function fetchPosts() {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        if (cancelled) return;
        setPosts(res.data.slice(0, 20));
      } catch (err) {
        if (cancelled) return;
        setError("Failed to fetch posts.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchPosts();
    return () => { cancelled = true; };
  }, [posts, setPosts, setLoading, setError]);

  return (
    <div>
      <h2>Posts</h2>
      {loading && <p>Loading posts...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (!posts || posts.length === 0) && (
        <p>No posts available.</p>
      )}
      {!loading && !error && posts && posts.length > 0 && (
        <PostList posts={posts} />
      )}
    </div>
  );
}
