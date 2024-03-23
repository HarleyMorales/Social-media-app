import React, { useState } from 'react';
import CreatePostForm from './components/CreatePostForm';
import Post from './components/Post';

function App() {
  const [posts, setPosts] = useState([]);

  const addNewPost = (content) => {
    const newPost = { content, id: posts.length + 1 };
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <h1>Fakebook!</h1>
      <CreatePostForm onPostCreate={addNewPost} />
      <div>
        {posts.map((post) => (
          <Post key={post.id} content={post.content} />
        ))}
      </div>
    </div>
  );
}

export default App;
