// Post.jsx
import React, { useState } from 'react';
import Comment from './Comment';

function Post(props) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const newComment = commentInput.trim();
    if (newComment) {
      setComments([...comments, newComment]);
      setCommentInput('');
    }
  };

  return (
    <div className="post">
      <h3>{props.content}</h3>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
      
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          placeholder="Add a comment..."
        />
        <button type="submit">Comment</button>
      </form>

      <div className="comments">
        {comments.map((comment, index) => (
          <Comment key={index} content={comment} />
        ))}
      </div>
    </div>
  );
}

export default Post;

