import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [selection, setSelection] = useState('');
  const [splurgeInput, setSplurgeInput] = useState('');

  const handleSelect = (type) => {
    setSelection(type);
  };

  const handleStart = () => {
    if (splurgeInput.trim()) {
      navigate('/form', { state: { splurgeType: selection, splurgeInput } });
    } else {
      alert('Please enter your splurge!');
    }
  };

  const trendingSplurges = ['Luxury Watch', 'Gourmet Dinner', 'Weekend Getaway'];
  const experienceSplurges = ['Hot Air Balloon', 'Spa Day', 'Cooking Class'];
  const itemSplurges = ['Designer Handbag', 'High-End Headphones'];

  return (
    <div>
      <h1>Splurgify - To Splurge or Not to Splurge?</h1>
      <p>Try our Splurge Calculator to see if it's worth it</p>
      <h2>Choose Your Splurge Type</h2>
      <button onClick={() => handleSelect('Item')}>Item</button>
      <button onClick={() => handleSelect('Experience')}>Experience</button>
      <input
        type="text"
        placeholder="Enter your splurge"
        value={splurgeInput}
        onChange={(e) => setSplurgeInput(e.target.value)}
      />
      <button onClick={handleStart}>Get Started</button>
    </div>
  );
}

export default Home;
