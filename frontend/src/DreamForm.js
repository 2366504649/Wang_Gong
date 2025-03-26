import React, { useState } from 'react';

const DreamForm = ({ onSubmit }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description) {
      onSubmit(description);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="pls input your dream description..."
      />
      <button type="submit">Interpretation</button>
    </form>
  );
};

export default DreamForm;
