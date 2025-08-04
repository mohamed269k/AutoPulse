
import React, { useState } from 'react';
import type { Product } from '../types';
import { SlidersHorizontal, BatteryCharging, Cog, ShoppingCart, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the parent div's onClick from firing
    if (isAdded) return;
    
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const handleCardClick = () => {
    window.location.hash = `#/products/${product.id}`;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Allow navigation with Enter or Space key for accessibility
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // Prevent default space bar scroll
      handleCardClick();
    }
  };


  return (
    <div
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label={`View details for ${product.name}`}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden group border border-gray-700/50 transition-all duration-300 hover:border-cyan-400/70 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      <div 
        className="relative transition-transform duration-500 ease-in-out group-hover:scale-105"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <h3 className="font-orbitron text-2xl font-bold text-white absolute bottom-4 left-4 drop-shadow-lg">{product.name}</h3>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p 
          className="text-gray-400 mb-4"
          style={{
            minHeight: '3rem', // Equivalent to h-12, ensures vertical alignment
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {product.description}
        </p>
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:items-center mb-4 text-gray-300 w-full">
            <div className="flex items-center gap-2 text-sm"><SlidersHorizontal size={16} className="text-cyan-400" /><span>{product.specs.scale} Scale</span></div>
            <div className="flex items-center gap-2 text-sm"><BatteryCharging size={16} className="text-cyan-400" /><span>{product.specs.motor}</span></div>
            <div className="flex items-center gap-2 text-sm"><Cog size={16} className="text-cyan-400" /><span>{product.specs.drivetrain}</span></div>
        </div>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-700/50">
          <span className="text-3xl font-orbitron font-bold text-cyan-400">${product.price}</span>
          <button
            onClick={handleAddToCartClick}
            disabled={isAdded}
            className={`w-40 flex justify-center items-center gap-2 text-white font-bold py-2 px-4 rounded-lg border transition-all duration-300 transform group-hover:scale-105 active:scale-100 relative z-10 ${
              isAdded
                ? 'bg-green-500 border-green-500 cursor-not-allowed'
                : 'bg-gray-800 border-gray-600 group-hover:bg-cyan-500 group-hover:border-cyan-500'
            }`}
            aria-label={isAdded ? `Added ${product.name} to cart` : `Add ${product.name} to cart`}
          >
            {isAdded ? (
              <>
                <Check size={20} /> Added!
              </>
            ) : (
              <>
                <ShoppingCart size={18} /> Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;