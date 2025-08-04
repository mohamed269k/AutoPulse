
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import type { Product } from '../types';

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onAddToCart }) => {
  return (
    <section id="products" className="container mx-auto py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white uppercase">Our Fleet</h2>
        <p className="text-gray-400 mt-2">Precision-engineered for the drift enthusiast.</p>
        <div className="mt-4 w-24 h-1 bg-cyan-400 mx-auto rounded-full neon-glow-cyan"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
