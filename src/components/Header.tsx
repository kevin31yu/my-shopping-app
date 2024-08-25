// src/components/Header.tsx

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue text-white p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">EZShop</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/shop" className="hover:underline">Shop</a></li>
          <li><a href="https://www.linkedin.com/in/kevin-32-yu/" className="hover:underline">LinkedIn</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
