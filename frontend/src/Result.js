import React from 'react';

const Result = ({ interpretation }) => {
  return (
    <div className="result">
      <h3>解梦结果：</h3>
      <p>{interpretation}</p>
    </div>
  );
};

export default Result;
