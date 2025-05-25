import React from 'react';
import { useLocation } from 'react-router-dom';

function Results() {
  const location = useLocation();
  const { splurgeType, splurgeInput } = location.state || {};
  const score = Math.floor(Math.random() * 100) + 1;
  const analogy = `That's like buying a fancy latte every day for a year!`;

  return (
    <div>
      <h2>Splurge Results for {splurgeInput} ({splurgeType})</h2>
      <p>Your SplurgeScore: {score}/100</p>
      <p>{analogy}</p>
    </div>
  );
}

export default Results;
