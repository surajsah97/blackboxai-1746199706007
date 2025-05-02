import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <NavLink to="/" className="text-2xl font-bold text-blue-700 hover:text-blue-900">
          TechVanz
        </NavLink>
        <nav className="space-x-6 text-gray-700 font-semibold">
          <NavLink to="/products" className={({ isActive }) => isActive ? 'text-blue-700' : 'hover:text-blue-700'}>Products</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-700' : 'hover:text-blue-700'}>About</NavLink>
          <NavLink to="/privacy-policy" className={({ isActive }) => isActive ? 'text-blue-700' : 'hover:text-blue-700'}>Privacy Policy</NavLink>
          <NavLink to="/terms-conditions" className={({ isActive }) => isActive ? 'text-blue-700' : 'hover:text-blue-700'}>Terms & Conditions</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-700' : 'hover:text-blue-700'}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
