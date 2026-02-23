import heroImage from "../assets/hero.png";
import Navbar from '../components/Nav';
import restaurant from "../assets/restaurant.png";
import Footer from "../components/Footer";




const menuItems = [
  { id: 1, name: 'Mohammedia Parc', desc: 'Rue Tripoli, Mohammedia', img: restaurant , status:"Ouvert" },
  { id: 2, name: 'Mohammedia Nassim', desc: 'Bd de la Résistance, Mohammedia', img: restaurant , status:"Ouvert" },
  { id: 3, name: 'Mohammedia Riad Salam', desc: 'Bd Mohamed VI, Mohammedia', img: restaurant , status:"Ouvert" },
  { id: 4, name: 'Casablanca', desc: '26 Angles rue Agadir, Rue Omar Slaoui', img: restaurant , status:"Ouvert" },
  { id: 5, name: 'Casablanca', desc: 'Ziraoui', img: restaurant , status:"En cours" },
  { id: 6, name: 'Khouribga', desc: 'Complexe el firdaws, 54, Khouribga', img: restaurant , status:"Ouvert" },
  { id: 7, name: 'Bouskoura', desc: 'Station-service entre Mr Bricolage et Hilton', img: restaurant , status:"Ouvert" },
  { id: 8, name: 'Temara', desc: 'Rue atakafol', img: restaurant , status:"Ouvert" },
  // Ajoutez d'autres items ici...
];

const Restaurants = () => {
  return (
    <div className="font-sans text-gray-800">
      
      {/* SECTION HERO / SEARCH */}
      <section className="relative h-[300px] flex items-center justify-center bg-black">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${heroImage})`,
        }}>
        </div>
        <Navbar/>
        <div className="relative text-center text-white mt-10">
          <h1 className="text-5xl font-serif italic mb-4">Nos Restaurants</h1>
        </div>
      </section>


      {/* SECTION FOOD MENU */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuItems.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm flex gap-4 items-center">
                <img src={item.img} alt={item.name} className="w-24 h-24 rounded-lg object-cover" />
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-gray-500 text-sm my-1">{item.desc}</p>
                  <button className={`${item.status == "Ouvert" ? "bg-green-500" : "bg-red-500"} text-white text-xs px-4 py-2 rounded mt-2`}>
                    {item.status}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer/>
      
    </div>
  );
};

export default Restaurants;