import heroImage from "../assets/hero.png";
import Navbar from "../components/Nav";
import {products} from '../data';
import Footer from "../components/Footer";
import restaurant from "../assets/restaurant.png";





const About = () => {


  return (
    <div className="bg-[#0b111a] text-white font-sans overflow-x-hidden">
      
      {/* --- SECTION HERO --- */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0  bg-cover bg-center" style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})`,}}>
        </div>
            <Navbar />
        <div className="relative z-20 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif italic font-bold mb-4">
            Le Spécialiste <br />
            <span className="text-red-600 font-serif italic">de la french food</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia debitis animi tenetur saepe nesciunt commodi dolore sint asperiores hic necessitatibus.
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce border-2 border-white rounded-full w-6 h-10 flex justify-center py-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </section>

      {/* --- SECTION POPULAR MENU --- */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-gray-900 text-4xl font-bold mb-4">Best- <span className="text-red-600">Sellers</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto">Découvrez nos plats les plus appréciés, préparés avec passion et servis avec le sourire.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((product) => (
            <MenuCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* --- SECTION OUR STORY --- */}
      <section className="bg-white py-20 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-gray-900">
            <h2 className="text-4xl font-bold mb-6 capitalize">à propos de <span className="text-red-600">Only</span></h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cumque sed ducimus iste ipsa, aliquam quaerat hic commodi nesciunt aliquid, veritatis quae? Voluptatem, inventore esse.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4"><p className="text-2xl font-bold text-red-600">50K+</p><p className="text-xs text-gray-500">Clients</p></div>
              <div className="p-4"><p className="text-2xl font-bold text-red-600">15+</p><p className="text-xs text-gray-500">Awards</p></div>
              <div className="p-4"><p className="text-2xl font-bold text-red-600">8</p><p className="text-xs text-gray-500">Restaurants</p></div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <img src={restaurant} alt="Cooking" className="rounded-2xl shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 bg-red-600 p-6 rounded-xl text-white">
              <p className="text-3xl font-bold">8+</p>
              <p className="text-sm">Ans D'excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION VISIT US (FOOTER STYLE) --- */}
      <section className="bg-[#F4F5FA] py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-black">Visitez <span className="text-red-600">Nous</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white shadow-2xl p-8 rounded-2xl flex flex-col items-center">
              <div className=" mb-4">📍</div>
              <h4 className="font-bold mb-2 text-black">Main Location</h4>
              <p className="text-gray-400 text-sm italic text-center">MOHAMMEDIA Parc</p>
            </div>
            <div className="bg-white shadow-2xl p-8 rounded-2xl flex flex-col items-center">
              <div className=" mb-4">📞</div>
              <h4 className="font-bold mb-2 text-black">Appelez-nous</h4>
              <p className="text-gray-400 text-sm">0523 580251</p>
            </div>
            <div className="bg-white shadow-2xl p-8 rounded-2xl flex flex-col items-center">
              <div className=" mb-4">🕒</div>
              <h4 className="font-bold mb-2 text-black">Ouverture</h4>
              <p className="text-gray-400 text-sm">Lun-Vend: 11AM - 11PM</p>
              <p className="text-gray-400 text-sm">Sam-Dim: 11AM - 01AM</p>
            </div>
          </div>
        </div>
      </section>
        <Footer/>
    </div>
  );
};

const MenuCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        <div className="absolute top-3 right-3 bg-orange-500 text-white font-bold px-3 py-1 rounded-full text-sm">
          ${product.price}
        </div>
      </div>
      <div className="p-5 flex flex-col grow">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4 grow">{product.desc}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex text-yellow-400 text-xs">
            {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;