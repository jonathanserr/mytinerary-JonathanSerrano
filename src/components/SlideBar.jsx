import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaCity } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

const routes = [
  { to: "/", text: <><IoHome /> Home</> },
  { to: "/cities", text: <><FaCity /> Cities</> },
  { to: "/user", text: <><FaUser /> Login</> },
];

function SlideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Botón para abrir el sidebar (Fijo en la parte superior derecha) */}
      <button
        className="fixed top-4 right-0 z-50 text-white bg-blue-600 p-3 rounded-l-md shadow-md 
                   hover:bg-blue-700 transition-all"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Contenedor del Sidebar (Fijo en la parte superior derecha) */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-gray-900 text-white shadow-lg 
                   transform transition-transform duration-300 
                   ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Botón para cerrar */}
        <button
          className="absolute top-4 left-4 text-white text-lg"
          onClick={toggleSidebar}
        >
          
        </button>

        {/* Menú de navegación */}
        <nav className="mt-16">
          <ul className="space-y-4 px-6">
            {routes.map((r, index) => (
              <li key={index}>
                <NavLink
                  to={r.to}
                  className={({ isActive }) =>
                    `flex items-center text-lg px-4 py-2 rounded-md transition-all 
                     ${isActive ? "bg-blue-600 text-white font-bold" : "text-gray-300 hover:bg-blue-500 hover:text-white"}`
                  }
                >
                  {r.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SlideBar;