import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function SplurgeForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { splurgeType, splurgeInput } = location.state || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/results', { state: { splurgeType, splurgeInput } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Describe Your {splurgeType}</h2>
      <input type="text" defaultValue={splurgeInput} />
      <button type="submit">Calculate My SplurgeScore</button>
    </form>
  );
}

export default SplurgeForm;
