import React from 'react';
import Post from './Post';

function Feed({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} content={post.content} />
      ))}
    </div>
  );
}

export default Feed;
