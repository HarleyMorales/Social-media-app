
import React, { useState } from 'react';
import Comment from './Comment'; 

function Post(props) {
  const [likes, setLikes] = useState(0); 

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="post">
      <h3>{props.content}</h3>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
      <div className="comments">
        <Comment />
        <Comment />
      </div>
    </div>
  );
}

export default Post;
