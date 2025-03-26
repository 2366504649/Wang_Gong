import React, { useState } from 'react';
import DreamForm from './DreamForm';
import Result from './Result';
import './App.css';

function App() {
  const [interpretation, setInterpretation] = useState(null);

  const handleDreamSubmit = async (description) => {
    try {
      const response = await fetch('http://localhost:8000/submit_dream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description })
      });
      const result = await response.json();
      setInterpretation(result.interpretation);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Dream Interpretation</h1>
      <DreamForm onSubmit={handleDreamSubmit} />
      {interpretation && <Result interpretation={interpretation} />}
    </div>
  );
}

export default App;
