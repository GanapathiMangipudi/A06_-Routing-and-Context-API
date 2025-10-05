import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { PostProvider } from "./context/PostContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostProvider>
      <App />
    </PostProvider>
  </React.StrictMode>
);
