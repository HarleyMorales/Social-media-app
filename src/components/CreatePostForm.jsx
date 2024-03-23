
import React, { useState } from 'react';

function CreatePostForm(props) {
  const [postContent, setPostContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onPostCreate(postContent);
    setPostContent(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        placeholder="What's on your mind?"
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default CreatePostForm;
