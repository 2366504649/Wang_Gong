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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-4">Dream Interpretation</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Please input your dream description..."
            className="w-full h-32 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none text-gray-700 resize-none"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition"
          >
            Interpret
          </button>
        </form>
      </div>
    </div>
  );
};

export default DreamForm;