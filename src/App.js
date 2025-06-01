import React, { useState, useEffect } from 'react';
import quotesData from './data/quotes.json'; // ✅ correct path

function App() {
  const [quote, setQuote] = useState({ q: '', a: '' });
  const [liked, setLiked] = useState(false);

  // ✅ define fetchQuote first
  const fetchQuote = () => {
    const random = quotesData[Math.floor(Math.random() * quotesData.length)];
    setQuote({ q: random.text, a: random.author || 'Unknown' });
    setLiked(false);
  };

  // ✅ then use it in useEffect
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>QuoteSage</h1>
      <p style={{ fontSize: '20px', fontStyle: 'italic' }}>
        "{quote.q || 'Loading...'}"
      </p>
      <h4>- {quote.a || '...'}</h4>

      <button onClick={() => setLiked(!liked)} style={{ marginRight: '10px' }}>
        {liked ? '❤️ Liked' : '🤍 Like'}
      </button>
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
}

export default App;
