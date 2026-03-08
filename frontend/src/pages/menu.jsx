import Card from '../components/card';
import heroImage from "../assets/hero.png";
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductDetails from '../components/productDetails';

const categories = ["Tous", "Tacos", "Signatures", "Burger", "Pizza"];


const MenuPage = () => {
  const [activeTab, setActiveTab] = useState("Tous");
  const [allProducts, setAllProducts] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (allProducts && allProducts.length > 0) {
      setLoading(false)
    }
  }, [allProducts])

  useEffect(() => {
    const fetch = async()=>{
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`)
      setAllProducts(response.data);
      setProductsList(response.data);
    }
    fetch()
  }, []);


  const filter = (category) =>{
      if(category === "Tous"){
          setProductsList(allProducts)
      }else{
          const newList = allProducts.filter(item=>item.category===category)
          setProductsList(newList)
      }

  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-75 flex items-center justify-center bg-black">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ 
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${heroImage})`,
        }}>
        </div>
        <Navbar/>
        <div className="relative text-center text-white mt-10">
          <h1 className="text-5xl font-serif italic mb-4">Menu</h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation / Filter */}
        <div className="flex flex-wrap items-center justify-between mb-10 gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {setActiveTab(cat); filter(cat)}}
                className={`px-6 py-2 rounded-full cursor-pointer text-sm font-medium transition-all ${
                  activeTab === cat 
                  ? "bg-red-500 text-white" 
                  : "bg-white text-gray-600 hover:bg-red-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
        {loading ? (
          <div className="flex justify-center items-center h-[300px] w-full">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-red-500"></div>
          </div>
        ):(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsList.map((product) => (
            <Card setIsOpen={setIsOpen} product={product} setSelectedProduct={setSelectedProduct} />
          ))}
        </div>
        )}
        {isOpen && selectedProduct && (
          <div className="inset-0 w-full h-full bg-black/50 fixed flex items-center justify-center z-200">
            <ProductDetails isOpen={isOpen} setIsOpen={setIsOpen} product={selectedProduct} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default MenuPage;