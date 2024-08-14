import React from 'react';

const DetailsItem = ({ label, value }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-600">{label}</h3>
      <p className="text-gray-800">{value}</p>
    </div>
  );
};

export default DetailsItem;
