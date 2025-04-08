import logo from './../assets/img/porcion-de-comida.png'
import { useState } from 'react'

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <>
      {/* Menú para móviles */}
      <div className='w-full bg-pink-400 flex justify-between items-center h-16 px-4 md:hidden'>
        {/* Botón de menú hamburguesa */}
        <button onClick={toggleMenu} className="text-white text-2xl">
          <i className="fa-solid fa-bars"></i>
        </button>
        
        {/* Logo centrado en móvil */}
        <div className="flex justify-center">
          <img src={logo} alt="divinaCocina" className='h-8' /> 
        </div>
        
        {/* Icono lupa */}
        <div>
          <a href="#">
            <i className="fa-solid fa-magnifying-glass text-white text-lg transition-all duration-300 ease-linear hover:text-black"></i>
          </a>
        </div>
      </div>
      
      {/* Menú desplegable en móviles */}
      <div className={`bg-pink-400 w-full absolute z-10 transition-all duration-300 ${menuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'} md:hidden`}>
        <ul className='flex flex-col uppercase'>
          <li className='flex items-center px-6 py-3 bg-gray-50 text-pink-400 font-semibold'>
            <a href="#">Inicio</a>
          </li>
          <li className='flex items-center px-6 py-3 text-white font-semibold border-b border-pink-300'>
            <a href="#" className="flex justify-between w-full">
              Categorías <i className="fa-solid fa-angle-down"></i>
            </a>
          </li>
          <li className='flex items-center px-6 py-3 text-white font-semibold border-b border-pink-300'>
            <a href="#">Recetas freidora de aire</a>
          </li>
          <li className='flex items-center px-6 py-3 text-white font-semibold border-b border-pink-300'>
            <a href="#" className="flex justify-between w-full">
              Blog <i className="fa-solid fa-angle-down"></i>
            </a>
          </li>
          <li className='flex items-center px-6 py-3 text-white font-semibold border-b border-pink-300'>
            <a href="#">Video recetas</a>
          </li>
          <li className='flex items-center px-6 py-3 text-white font-semibold'>
            <a href="#" className="flex justify-between w-full">
              Recetas temporada <i className="fa-solid fa-angle-down"></i>
            </a>
          </li>
        </ul>
      </div>
      
      {/* Menú de escritorio */}
      <div className='hidden md:flex bg-pink-400 flex-row items-center h-16 px-4 uppercase w-full'>
        {/* Menú de navegación */}
        <ul className='flex h-16'>
          <li className='h-16 flex items-center px-6 bg-gray-50 text-pink-400 font-semibold transition-all duration-300 ease-linear hover:bg-gray-50 hover:text-pink-400'>
            <a href="#">Inicio</a>
          </li>
          <li className='h-16 flex items-center px-6 text-white font-semibold transition-all duration-300 ease-linear hover:bg-gray-50 hover:text-pink-400'>
            <a href="#">Categorías <i className="fa-solid fa-angle-down ml-1"></i></a>
          </li>
          <li className='h-16 flex items-center px-6 text-white font-semibold transition-all duration-300 ease-linear hover:bg-gray-50 hover:text-pink-400'>
            <a href="#">Recetas freidora de aire</a>
          </li>
          <li className='h-16 flex items-center px-6 text-white font-semibold transition-all duration-300 ease-linear hover:bg-gray-50 hover:text-pink-400'>
            <a href="#">Blog <i className="fa-solid fa-angle-down ml-1"></i></a>
          </li>
          <li className='h-16 flex items-center px-6 text-white font-semibold transition-all duration-300 ease-linear hover:bg-gray-50 hover:text-pink-400'>
            <a href="#">Video recetas</a>
          </li>
          <li className='h-16 flex items-center px-6 text-white font-semibold transition-all duration-300 ease-linear hover:bg-gray-50 hover:text-pink-400'>
            <a href="#">Recetas temporada <i className="fa-solid fa-angle-down ml-1"></i></a>
          </li>
        </ul>
        
        {/* Icono lupa */}
        <div className="ml-auto pl-6 h-16 flex items-center">
          <a href="#">
            <i className="fa-solid fa-magnifying-glass text-white text-lg transition-all duration-300 ease-linear hover:text-black"></i>
          </a>
        </div>
      </div>
    </>
  );
}