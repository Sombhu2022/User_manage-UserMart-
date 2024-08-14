import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ title, description, link }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-indigo-600 mb-3">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link to={link} className="text-indigo-500 hover:text-indigo-600 font-medium">Read More</Link>
    </div>
  );
}

export default BlogCard;
