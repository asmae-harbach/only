import React from 'react';

const Card = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      <div className="relative overflow-hidden">
        <img 
          src={product.image}
          alt={product.name} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
          <span className="text-yellow-500 text-xs">★</span>
          <span className="text-xs font-bold">{product.rating.toFixed(1)}</span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
          {product.desc}
        </p>
        <p className="text-red-500 font-bold text-lg">DH{product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Card;