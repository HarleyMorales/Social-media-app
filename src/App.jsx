import React, { useState } from 'react';
import CreatePostForm from './components/CreatePostForm';
import Feed from './components/Feed';

function App() {
  const [posts, setPosts] = useState([]);

  const addNewPost = (content) => {
    const newPost = {
      content: content,
      id: Date.now(),
      likes: 0,
    };
    setPosts([newPost, ...posts]);
  };

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div>
      <h1>Fakebook</h1>
      <CreatePostForm onPostCreate={addNewPost} />
      <Feed posts={posts} onLike={handleLike} />
    </div>
  );
}

export default App;

