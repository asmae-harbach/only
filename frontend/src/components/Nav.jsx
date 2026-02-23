import React, { useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import { PiListBold } from "react-icons/pi";
import { VscClose } from "react-icons/vsc";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const sections = [
    { name: 'Accueil', link: '/' },
    { name: 'Menu', link: '/menu' },
    { name: 'A Propos', link: '/about' },
    { name: 'Restaurants', link: '/restaurants' }
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-100">
      <div className="flex justify-between md:justify-center items-center h-24 px-6 md:px-0">
        
        <div className="flex items-center md:space-x-12">
          <div className="hidden md:flex items-center space-x-12">
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo" className="w-20 h-20 cursor-pointer object-contain" />
            </div>

            <ul className="flex space-x-16">
              {sections.map((item) => (
                <Link
                  to={item.link}
                  key={item.name}
                  className={`
                    cursor-pointer text-lg font-medium transition-all duration-300 pt-6 pb-2
                    hover:border-b-4 hover:border-red-600 uppercase text-white
                    ${location.pathname === item.link
                      ? 'border-b-4 border-red-600' 
                      : 'border-b-4 border-transparent'}
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>

          <div className="md:hidden flex justify-between items-center w-full">
            <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
          </div>
        </div>

        <div onClick={() => setIsOpen(true)} className="md:hidden text-white text-3xl cursor-pointer">
          <PiListBold />
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <div className={`fixed inset-0 bg-black/95 z-[100] transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex justify-end p-8">
          <VscClose onClick={() => setIsOpen(false)} className="text-white text-4xl cursor-pointer" />
        </div>

        <ul className="flex flex-col items-center justify-center space-y-10 mt-10">
          {sections.map((item) => (
            <Link
              to={item.link}
              key={item.name}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-black uppercase italic tracking-tighter transition-all cursor-pointer
                ${location.pathname === item.link ? 'text-red-600 scale-110' : 'text-white'}`}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;