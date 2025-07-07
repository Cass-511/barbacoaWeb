import Link from "next/link";
import React from "react";
import { GiGoat } from "react-icons/gi";

const Navbar: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-red-800 text-white px-6 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo y nombre del negocio */}
          <div className="flex items-center space-x-2 text-2xl font-extrabold">
            <GiGoat className="text-yellow-300" size={28} />
            <span>ExpendidoDeBarbacoa</span>
          </div>

          {/* Menú de navegación */}
          <ul className="hidden md:flex space-x-6 text-lg font-medium">
            <li>
              <Link href="/" className="hover:text-yellow-300">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-yellow-300">
                Menú
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-yellow-300">
                Contacto
              </Link>
            </li>
          </ul>

        </div>
        
      </nav>

      </>
  );
};

export default Navbar;


