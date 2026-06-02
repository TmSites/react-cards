import React from 'react';
import { useNavigate } from 'react-router-dom';
import LinkButton from './LinkButton';

const Kartlar = ({ cards }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/book/${cards.id}`)} 
      className="bg-white rounded-lg p-4 flex flex-col justify-between shadow hover:shadow-md transition cursor-pointer"
    >
      <img src={cards.imageUrl} alt={cards.title} className="h-40 object-contain mx-auto mb-4" />
      
      <h3 className="text-sm font-semibold text-gray-700 text-center mb-2 h-10 overflow-hidden">
        {cards.title}
      </h3>
      
      <div className="text-center mb-4">
        <span className="text-red-600 font-bold text-base">{cards.discountedPrice.toFixed(2)} Lei - reducere</span>
        <br/>
         <span className="text-gray-500 font-bold text-base ml-2">{cards.originalPrice.toFixed(4)} Lei - original</span>
      </div>

      <LinkButton label="Button" to={`/book/${cards.id}`} />
    </div>
  );
};

export default Kartlar;