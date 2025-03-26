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
        placeholder="请输入您的梦境..."
      />
      <button type="submit">解梦</button>
    </form>
  );
};

export default DreamForm;
