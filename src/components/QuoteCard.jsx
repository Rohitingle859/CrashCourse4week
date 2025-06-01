import React from 'react';

const QuoteCard = ({ quote, author, fontSize, theme, liked, onLike }) => {
  return (
    <div className={`quote-card ${theme}`}>
      <p style={{ fontSize: fontSize }}>"{quote}"</p>
      <h4>- {author}</h4>
      <button onClick={onLike}>
        {liked ? '❤️ Liked' : '🤍 Like'}
      </button>
    </div>
  );
};

export default QuoteCard;
