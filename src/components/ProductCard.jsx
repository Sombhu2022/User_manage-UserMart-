import React from 'react';
import { StarFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
      />
      <h3 className="text-lg font-semibold text-gray-700 mb-2 line-clamp-2">
        {product.title}
      </h3>
      <p className="text-gray-500 text-sm mb-2">{product.category}</p>
      <p className="text-gray-900 font-bold text-xl mb-2">${product.price}</p>
      
      {/* Truncate the description to 4 lines */}
      <p className="text-gray-700 text-sm mb-4 line-clamp-4">
        {product.description}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-yellow-500 font-semibold flex items-center">
          <StarFilled className="text-yellow-500" />
          <span className="ml-2">{product.rating.rate} ({product.rating.count} reviews)</span>
        </span>

        <Link to={`/products/${product.id}`}>
        <button className="px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors cursor-pointer">
          More Details
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
