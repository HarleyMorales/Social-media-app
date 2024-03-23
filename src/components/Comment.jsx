import React from 'react';

function Comment({ content }) {
  return (
    <div className="comment">
      <p>{content}</p>
    </div>
  );
}

export default Comment;
