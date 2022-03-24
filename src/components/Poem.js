import React, { useState } from 'react';

function Poem({poem}) {
  const {title, content, author} = poem;
  const [isRead, setIsRead] = useState(false)

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <button 
        onClick={() => setIsRead(!isRead)} >Mark as {isRead ? "unread" : "read" }
      </button>
    </div>
  );
}

export default Poem;
