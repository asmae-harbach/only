import { VscClose } from 'react-icons/vsc';

const ProductDetails = ({ isOpen, setIsOpen, product }) => {
  if (!product) return null;

  return (
    /* Overlay avec flou */
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      
      {/* Container Modal */}
      <div className="relative bg-white dark:bg-zinc-900 w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl transform transition-all">
        
        {/* Bouton Fermer Flottant */}
        <button 
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-colors"
        >
          <VscClose size={24} />
        </button>

        {/* Image avec Overlay dégradé */}
        <div className="relative h-64 md:h-80 w-full">
          <img 
            className="w-full h-full object-cover" 
            src={product.image} 
            alt={product.name} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {/* Badge Catégorie ou Prix flottant sur l'image */}
          <div className="absolute bottom-4 left-6">
             <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
               {product.category || 'Nouveau'}
             </span>
          </div>
        </div>

        {/* Contenu Texte */}
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white leading-tight">
              {product.name}
            </h2>
            <p className="text-2xl font-black text-red-500 ml-4">
              {product.price}<span className="text-sm ml-1 text-gray-500 uppercase">DH</span>
            </p>
          </div>

          <div className="w-12 h-1 bg-red-500 mb-6 rounded-full"></div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            {product.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;