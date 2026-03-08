import Navbar from "../components/Nav";
import heroImage from "../assets/hero.png";
import Tacos from "../assets/Tacos.png";
import Pizza from "../assets/Pizza.png";
import Burger from "../assets/Burger.png";
import restaurant from "../assets/restaurant.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";



function Home() {
  return (
    <div className="relative w-full bg-white">
      {/* SECTION 1 - HERO */}
      <div 
        className="relative min-h-screen w-full bg-cover bg-center flex flex-col justify-center px-6 md:px-12 overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})`,
        }}
      >
        <Navbar />

        {/* Contenu Hero */}
        <div className="max-w-4xl space-y-6 z-10 mt-20"> 
          <h1 className="text-white text-5xl md:text-8xl font-serif italic font-bold leading-tight uppercase tracking-tight">
            Le Spécialiste <br /> 
            <span className="text-red-600">de la french food</span>
          </h1>
          
          <Link to='/menu' className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 uppercase tracking-wider text-sm md:text-base shadow-lg">
            Notre Menu
          </Link>
        </div>

        {/* Ligne de scroll animée */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-white/70 text-[10px] uppercase tracking-[0.4em] mb-4">Scroll</span>
          <div className="relative w-[1px] h-16 md:h-24 bg-white/20 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-red-600 animate-scroll-line"></div>
          </div>
        </div>
      </div>

      {/* SECTION 2 - CATEGORIES (Horizontal on Mobile) */}
      <div className="flex flex-row gap-4 md:gap-8 p-6 md:p-12 w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide bg-white">
        {/* Tacos */}
        <div className="relative h-72 md:h-80 min-w-[85%] md:min-w-0 md:w-1/3 shrink-0 snap-center overflow-hidden shadow-2xl group cursor-pointer rounded-2xl">
          <div className="absolute inset-0 bg-cover bg-center brightness-[0.40] group-hover:brightness-50 transition-all duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${Tacos})` }}></div>
          <div className="relative h-full flex items-center justify-center">
            <h2 className="text-white text-4xl md:text-5xl font-black italic tracking-tighter uppercase drop-shadow-lg">Tacos</h2>
          </div>
        </div>

        {/* Pizza */}
        <div className="relative h-72 md:h-80 min-w-[85%] md:min-w-0 md:w-1/3 shrink-0 snap-center overflow-hidden shadow-2xl group cursor-pointer rounded-2xl">
          <div className="absolute inset-0 bg-cover bg-center brightness-[0.40] group-hover:brightness-50 transition-all duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${Pizza})` }}></div>
          <div className="relative h-full flex items-center justify-center">
            <h2 className="text-white text-4xl md:text-5xl font-black italic tracking-tighter uppercase drop-shadow-lg">Pizza</h2>
          </div>
        </div>

        {/* Burger */}
        <div className="relative h-72 md:h-80 min-w-[85%] md:min-w-0 md:w-1/3 shrink-0 snap-center overflow-hidden shadow-2xl group cursor-pointer rounded-2xl">
          <div className="absolute inset-0 bg-cover bg-center brightness-[0.40] group-hover:brightness-50 transition-all duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${Burger})` }}></div>
          <div className="relative h-full flex items-center justify-center">
            <h2 className="text-white text-4xl md:text-5xl font-black italic tracking-tighter uppercase drop-shadow-lg">Burger</h2>
          </div>
        </div>
      </div>

      {/* SECTION 3 - OUR MENU (Horizontal Carousel) */}
      <div className="bg-[#F4F5FA] py-20 px-6">
        <h2 className="text-center text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16">
          Menu <span className="text-red-600">Only</span>
        </h2>

        <div className="flex flex-row items-center gap-4 max-w-7xl mx-auto overflow-x-auto pb-10 snap-x snap-mandatory scrollbar-hide">
          {/* 1. Le Gourmand */}
          <div className="min-w-[240px] md:w-1/5 h-80 bg-white rounded-xl overflow-hidden shadow-md shrink-0 snap-center">
            <img src={Tacos} alt="Gourmand" className="w-full h-2/3 object-cover" />
            <div className="p-4 text-center">
              <h3 className="font-bold uppercase italic text-lg">Le Gourmand</h3>
            </div>
          </div>

          {/* 2. Le Fameux */}
          <div className="min-w-[240px] md:w-1/5 h-80 bg-white rounded-xl overflow-hidden shadow-md shrink-0 snap-center">
            <img src={Tacos} alt="Fameux" className="w-full h-2/3 object-cover" />
            <div className="p-4 text-center">
              <h3 className="font-bold uppercase italic text-lg">Le Fameux</h3>
            </div>
          </div>

          {/* 3. Morocco (Central) */}
          <div className="min-w-[240px] md:w-1/4 h-[400px] bg-white rounded-xl overflow-hidden shadow-2xl border-4 border-red-600/20 z-10 shrink-0 snap-center transform md:scale-105">
            <img src={Tacos} alt="Morocco" className="w-full h-1/2 object-cover" />
            <div className="p-6 text-center">
              <h3 className="font-black uppercase italic text-2xl text-red-600">Morocco</h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">Chicken crispy, chekchouka, épice marocaine...</p>
            </div>
          </div>

          {/* 4. Chèvre Miel */}
          <div className="min-w-[240px] md:w-1/5 h-80 bg-white rounded-xl overflow-hidden shadow-md shrink-0 snap-center">
            <img src={Tacos} alt="Chèvre Miel" className="w-full h-2/3 object-cover" />
            <div className="p-4 text-center">
              <h3 className="font-bold uppercase italic text-lg">Chèvre Miel</h3>
            </div>
          </div>

          {/* 5. BBR */}
          <div className="min-w-[240px] md:w-1/5 h-80 bg-white rounded-xl overflow-hidden shadow-md shrink-0 snap-center">
            <img src={Tacos} alt="BBR" className="w-full h-2/3 object-cover" />
            <div className="p-4 text-center">
              <h3 className="font-bold uppercase italic text-lg">BBR</h3>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Link to='/menu' className="bg-black hover:bg-red-600 text-white font-bold py-4 px-12 transition duration-300 rounded-full uppercase tracking-widest text-sm shadow-lg">
            Voir le menu
          </Link>
        </div>
      </div>

      {/* SECTION 4 - NOS RESTAURANTS (Horizontal) */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">
            Nos <span className="text-red-600">Restaurants</span>
          </h2>
          
          <div className="flex flex-row gap-6 overflow-x-auto pb-10 snap-x snap-mandatory scrollbar-hide">
            {['Casablanca', 'Mohammedia', 'Khouribga'].map((city) => (
              <Link to='/restaurants' key={city} className="min-w-[280px] md:w-1/3 shrink-0 snap-center group cursor-pointer">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300 z-10"></div>
                  <img src={restaurant} alt={city} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase">Ouvert</span>
                  </div>
                </div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight group-hover:text-red-600 transition-colors">{city}</h3>
                <p className="text-gray-500 text-sm uppercase font-semibold">Voir l'itinéraire —</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer/>

      {/* STYLES ANIMATIONS ET SCROLLBAR */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scroll-line {
          animation: scroll-line 2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
        /* Cacher la scrollbar mais garder le défilement */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}

export default Home;