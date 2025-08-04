
import React, { useState } from 'react';
import { Product } from '../types';
import { ShoppingCart, Check, SlidersHorizontal, BatteryCharging, Cog, ArrowLeft, Star } from 'lucide-react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../constants';

interface ProductPageProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const StarRating: React.FC<{ rating: number, totalStars?: number, className?: string }> = ({ rating, totalStars = 5, className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(totalStars)].map((_, index) => {
        const starClass = index < Math.round(rating) ? 'text-amber-400' : 'text-gray-600';
        return <Star key={index} className={starClass} fill="currentColor" size={20} />;
      })}
    </div>
  );
};

const ProductPage: React.FC<ProductPageProps> = ({ product, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(product.gallery[0] || product.imageUrl);
  const [activeTab, setActiveTab] = useState('features');

  const handleAddToCartClick = () => {
    if (isAdded) return;
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const averageRating = product.reviews.length > 0
    ? product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length
    : 0;
  const totalReviews = product.reviews.length;
  
  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).sort(() => 0.5 - Math.random()).slice(0, 3);

  const tabButtonStyle = "py-2 px-4 font-orbitron font-bold text-lg transition-colors duration-300 border-b-2";
  const activeTabClass = "text-cyan-400 border-cyan-400";
  const inactiveTabClass = "text-gray-400 border-transparent hover:text-white hover:border-gray-500";

  return (
    <div className="container mx-auto py-12 md:py-20 animate-fade-in">
      <div className="mb-8">
        <button
          onClick={() => window.location.hash = '#/'}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold">Back to all products</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        {/* Image Gallery */}
        <div className="lg:col-span-3">
          <div className="bg-gray-900/50 rounded-xl border border-gray-700/50 p-2 sticky top-24">
            <img 
              src={activeImage} 
              alt={product.name} 
              className="w-full h-auto object-cover rounded-lg shadow-2xl shadow-cyan-500/10"
            />
          </div>
          <div className="grid grid-cols-4 gap-2 mt-3">
            {product.gallery.map((img, index) => (
              <button 
                key={index}
                onClick={() => setActiveImage(img)}
                className={`rounded-md overflow-hidden border-2 transition-colors duration-200 ${activeImage === img ? 'border-cyan-400' : 'border-transparent hover:border-gray-500'}`}
              >
                <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover"/>
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <h1 className="font-orbitron font-black text-3xl md:text-4xl lg:text-5xl text-white uppercase">{product.name}</h1>
          
          <div className="flex items-center gap-x-4 gap-y-2 flex-wrap">
            <StarRating rating={averageRating} />
            <a href="#reviews-section" className="text-gray-400 hover:text-cyan-400 transition-colors">
              ({totalReviews} review{totalReviews !== 1 && 's'})
            </a>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed max-w-prose">{product.description}</p>
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-4 p-6 bg-gray-900 rounded-xl border-t-2 border-fuchsia-500 neon-glow-fuchsia">
            <span className="text-5xl font-orbitron font-bold text-cyan-400">${product.price}</span>
            <button
              onClick={handleAddToCartClick}
              disabled={isAdded}
              className={`w-full sm:w-auto flex justify-center items-center gap-2 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 active:scale-100 ${
                isAdded
                  ? 'bg-green-500 border-2 border-green-500 cursor-not-allowed'
                  : 'bg-cyan-500 border-2 border-cyan-500 hover:bg-cyan-400 hover:border-cyan-400 neon-glow-cyan'
              }`}
            >
              {isAdded ? (<><Check size={24} /> Added!</>) : (<><ShoppingCart size={22} /> Add to Cart</>)}
            </button>
          </div>
        </div>
      </div>
      
      {/* Details, Reviews, etc. */}
      <div id="reviews-section" className="mt-16 lg:mt-24">
        <div className="border-b border-gray-700/50 mb-8">
            <nav className="flex flex-wrap gap-x-8 gap-y-4">
                <button onClick={() => setActiveTab('features')} className={`${tabButtonStyle} ${activeTab === 'features' ? activeTabClass : inactiveTabClass}`}>Features</button>
                <button onClick={() => setActiveTab('included')} className={`${tabButtonStyle} ${activeTab === 'included' ? activeTabClass : inactiveTabClass}`}>What's Included</button>
                <button onClick={() => setActiveTab('reviews')} className={`${tabButtonStyle} ${activeTab === 'reviews' ? activeTabClass : inactiveTabClass}`}>Reviews</button>
            </nav>
        </div>

        <div>
            {activeTab === 'features' && (
                <div className="animate-fade-in-slow">
                    <h3 className="font-orbitron text-2xl font-bold text-white mb-6">Key Features</h3>
                    <ul className="space-y-3 text-gray-300 list-disc list-inside marker:text-cyan-400">
                        {product.features.map((feature, i) => <li key={i}>{feature}</li>)}
                    </ul>
                </div>
            )}
            {activeTab === 'included' && (
                <div className="animate-fade-in-slow grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-orbitron text-2xl font-bold text-white mb-6">What's in the Box</h3>
                        <ul className="space-y-3 text-gray-300 list-disc list-inside marker:text-cyan-400">
                            {product.whatsInTheBox.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-orbitron text-2xl font-bold text-white mb-6">Required to Complete</h3>
                        <ul className="space-y-3 text-gray-300 list-disc list-inside marker:text-fuchsia-500">
                            {product.requiredToComplete.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            )}
            {activeTab === 'reviews' && (
                <div className="animate-fade-in-slow">
                    <h3 className="font-orbitron text-2xl font-bold text-white mb-6">Customer Reviews</h3>
                    <div className="space-y-8">
                        {product.reviews.length > 0 ? product.reviews.map((review, i) => (
                            <div key={i} className="p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-bold text-white text-lg">{review.author}</p>
                                        <p className="text-gray-500 text-sm">{review.date}</p>
                                    </div>
                                    <StarRating rating={review.rating} />
                                </div>
                                <p className="text-gray-300 mt-4">{review.comment}</p>
                            </div>
                        )) : (
                            <p className="text-gray-400">This model hasn't been reviewed yet. Be the first!</p>
                        )}
                    </div>
                </div>
            )}
        </div>
      </div>
      
       {/* Related Products */}
      <div className="mt-16 lg:mt-24 pt-16 border-t border-gray-800/50">
        <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white uppercase text-center">You Might Also Like</h2>
        <div className="mt-4 w-24 h-1 bg-fuchsia-500 mx-auto rounded-full neon-glow-fuchsia"></div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
            {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
            ))}
        </div>
      </div>

       <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        @keyframes fade-in-slow {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-slow {
            animation: fade-in-slow 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProductPage;
