
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import AiChat from './components/AiChat';
import Cart from './components/Cart';
import { Bot, X } from 'lucide-react';
import type { Product, CartItem } from './types';
import ProductPage from './components/ProductPage';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Ensure correct view on initial load
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleAddToCart = (productToAdd: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === productToAdd.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product: productToAdd, quantity: 1 }];
    });
  };
  
  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };
  
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const renderContent = () => {
    if (route.startsWith('#/products/')) {
      const productId = route.split('/')[2];
      const product = PRODUCTS.find(p => p.id === productId);
      if (product) {
        return <ProductPage product={product} onAddToCart={handleAddToCart} />;
      } else {
        return (
          <div className="text-center py-20">
            <h2 className="font-orbitron text-3xl font-bold text-white">Product Not Found</h2>
            <p className="text-gray-400 mt-2">Looks like that model drifted off the track.</p>
            <button
              onClick={() => window.location.hash = '#/'}
              className="mt-6 inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 active:scale-95 neon-glow-cyan"
            >
              Return to Garage
            </button>
          </div>
        );
      }
    }

    // Default view (Homepage) for '#' or '' hash
    return (
      <>
        <Hero />
        <ProductGrid onAddToCart={handleAddToCart} />
      </>
    );
  };

  return (
    <div className="bg-[#0a0a0a] text-gray-200 min-h-screen overflow-x-hidden">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-black z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 30%, rgba(6, 182, 212, 0.1), transparent 30%), radial-gradient(circle at 75% 70%, rgba(217, 70, 239, 0.1), transparent 30%)`
        }}
      />
      <div className="relative z-10">
        <Header cartItemCount={cartItemCount} onCartClick={() => setIsCartOpen(true)} />
        <main className="px-4 md:px-8">
          {renderContent()}
        </main>
        <Footer />
      </div>

      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
      />

      {/* AI Chat Components */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-cyan-500 text-white rounded-full p-4 shadow-lg hover:bg-cyan-400 transition-all duration-300 transform hover:scale-110 active:scale-95 neon-glow-cyan"
          aria-label={isChatOpen ? "Close AI Assistant" : "Open AI Assistant"}
        >
          {isChatOpen ? <X size={28} /> : <Bot size={28} />}
        </button>
      </div>

      <AiChat
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default App;