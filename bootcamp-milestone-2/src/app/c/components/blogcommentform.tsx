"use client"

import React, { useState } from 'react';

interface CommentFormProps {
  usernameprop: string, commentTextprop: string, blogSlug: string
}

const CommentForm: React.FC<CommentFormProps> = ({ usernameprop, commentTextprop, blogSlug }) => {
  const [username, setUsername] = useState(usernameprop);
  const [commentText, setCommentText] = useState(commentTextprop);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleCommentTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const url='/API/Blogs/'+blogSlug+'/comment'
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, commentText, blogSlug }),
      });

      if (response.ok) {
        console.log('Comment posted successfully');
        window.location.reload();
      } else {
        console.error('Error posting comment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2><br></br>Add a Comment</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <br />

        <label htmlFor="commentText">Comment:</label>
        <textarea
          id="commentText"
          name="commentText"
          rows={4}
          value={commentText}
          onChange={handleCommentTextChange}
          required
        ></textarea>
        <br />

        <button type="button" onClick={handleSubmit}>
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;