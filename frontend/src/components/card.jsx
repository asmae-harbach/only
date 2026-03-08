import React from 'react';

const Card = ({ setIsOpen, product, setSelectedProduct }) => {
  return (
    /* 1. Ajout de 'flex flex-col h-full' pour que toutes les cartes aient la même hauteur */
    <div className="bg-white py-3 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
      
      <div className="relative overflow-hidden shrink-0">
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
      
      {/* 2. 'flex-grow' permet à cette div de prendre tout l'espace restant, poussant le bouton vers le bas */}
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h3>
        
        {/* 3. 'line-clamp-2' est parfait, mais 'flex-grow' sur le parent assure l'alignement */}
        <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
          {product.desc}
        </p>
        
        {/* 4. 'mt-auto' ici est la clé : il pousse le prix et le bouton au fond si le texte est court */}
        <div className="mt-auto">
          <p className="text-red-500 font-bold text-lg mb-4">DH{product.price.toFixed(2)}</p>
        </div>
      </div>
      
      {/* 5. Le bouton est maintenant hors de la div de texte pour un alignement constant */}
      <div className="px-4 pb-4">
        <button 
          onClick={() => {setIsOpen(true); setSelectedProduct(product);}} 
          className="cursor-pointer py-2 w-full text-red-500 font-semibold rounded-md border border-red-500 hover:bg-red-500 hover:text-white transition-colors"
        >
          Voir le Produit
        </button>
      </div>
    </div>
  );
};

export default Card;