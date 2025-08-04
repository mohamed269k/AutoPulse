
import React from 'react';
import { AutoPulseLogo } from '../constants';
import { ShoppingCart } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  const navItems = ['Home', 'Products', 'About', 'Contact'];

  return (
    <header className="py-4 px-4 md:px-8 bg-black/30 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#/" className="w-40 md:w-48 text-white hover:text-cyan-400 transition-colors duration-300">
            <AutoPulseLogo />
        </a>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={item === 'Home' ? '#/' : item === 'Products' ? '#products' : '#'}
              className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            </a>
          ))}
        </nav>
        <button 
          onClick={onCartClick}
          className="relative p-2 rounded-full hover:bg-gray-800 transition-colors duration-300 group active:scale-90"
          aria-label={`View shopping cart with ${cartItemCount} items`}
        >
          <ShoppingCart className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" />
          {cartItemCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-fuchsia-500 text-xs font-bold text-white neon-glow-fuchsia">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;