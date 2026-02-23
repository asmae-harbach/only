import { Link } from "react-router-dom";

const Footer = ()=>{

    return(
              <footer className="bg-black text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-3xl font-black italic text-red-600 uppercase">French Food</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">Le meilleur de la french food arrive chez vous. Qualité, goût et rapidité garantis.</p>
          </div>

          <div>
            <h4 className="font-bold uppercase mb-6 text-lg">Navigation</h4>
            <ul className="space-y-3 text-gray-400 text-sm uppercase font-medium flex flex-col">
              <Link to='/' className="hover:text-red-600 cursor-pointer transition-colors">Accueil</Link>
              <Link to='/about' className="hover:text-red-600 cursor-pointer transition-colors">à Propos</Link>
              <Link to='/menu' className="hover:text-red-600 cursor-pointer transition-colors">Notre Menu</Link>
              <Link to='/restaurants' className="hover:text-red-600 cursor-pointer transition-colors">Restaurants</Link>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase mb-6 text-lg">Horaires</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Lun - Ven: <span className="text-white font-bold">11h00 - 23h00</span></li>
              <li>Sam - Dim: <span className="text-white font-bold">11h00 - 01h00</span></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[10px] uppercase tracking-[0.2em]">
          <p>© 2018 Tacos Only. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-white cursor-pointer transition-colors">Facebook</span>
            <span className="hover:text-white cursor-pointer transition-colors">TikTok</span>
          </div>
        </div>
      </footer>
    )
}
export default Footer;