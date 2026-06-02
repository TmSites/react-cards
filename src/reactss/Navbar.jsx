import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md w-full">
      <div 
        onClick={() => navigate('/')} 
        className="font-bold text-xl tracking-wider text-blue-400 cursor-pointer">
        Home
      </div>
     
    </div>
  );
}

export default Navbar;