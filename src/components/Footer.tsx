// src/components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue p-4 text-white text-center mt-auto">
      <p>&copy; {new Date().getFullYear()} EZShop. All rights reserved. Created by Kevin Yu.</p>
    </footer>
  );
};

export default Footer;
