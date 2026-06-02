import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { bookBundles } from './mockdata';

const KitapDetal = () => {
  const { id } = useParams();
  const book = bookBundles.find((b) => b.id === parseInt(id));
  return (
    <div className="bg-gray-100 min-h-screen p-6 font-sans">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-block mb-4 transition">
          Go Back
        </Link>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-800 mb-4">{book.title}</h2>
          <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
            <pre>{JSON.stringify(book, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitapDetal;