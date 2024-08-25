// src/app/home.tsx

import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen p-4 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(/images/background.jpg)' }}>
      {/* Overlay */}
      <img className="absolute inset-0 object-cover w-full h-full opacity-40" src="/images/home.jpg" alt="Overlay" />

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-blue text-3xl font-bold mb-12">Welcome to EZShop</h1>
        <Link href="/shop" className="border border-blue-500 text-blue-500 p-3 bg-blue rounded hover:bg-green">
          Go to Shop
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
