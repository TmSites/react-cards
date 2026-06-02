import React from 'react';
import { useNavigate } from 'react-router-dom';

function LinkButton({ label, to }) {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(to)} 
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full transition text-center">
      {label}
    </button>
  );
}

export default LinkButton;