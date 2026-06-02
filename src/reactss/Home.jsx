import React from 'react';
import { bookBundles } from './mockdata';
import BookCard from './kartlar';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Cumparam carti</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {bookBundles.map((item) => (
            <BookCard key={item.id} cards={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;