// src/components/Card.tsx

'use client';

import React from 'react';

interface CardProps {
  imageSrc: string;
  name: string;
  price: number;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, name, price, description }) => {
  // Function to handle adding item to cart
  const handleAddToCart = () => {
    alert(`${name} has been added to your cart! Thanks for using the demo!`);
  };

  return (
    <div className="border border-light-gray rounded-lg overflow-hidden shadow-lg bg-white w-[240px] h-[380px]">
      <img src={imageSrc} alt={name} className="w-full h-[60%] object-cover" />
      <div className="p-2 h-[40%] flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-blue-500">{name}</h2>
          <p className="text-blue-500">{price}</p>
          <p className="mt-2 text-gray-700 text-sm">{description}</p>
        </div>
        <button
          onClick={handleAddToCart}
          className="mt-4 bg-blue text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
