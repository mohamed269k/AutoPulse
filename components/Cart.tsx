
import React from 'react';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import type { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md h-full bg-gray-900/90 border-l border-cyan-400/30 shadow-2xl shadow-cyan-500/10 flex flex-col transition-transform transform duration-300 ease-in-out"
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
        onClick={e => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-6 border-b border-gray-700/50">
          <h2 className="font-orbitron text-2xl text-white font-bold">Your Cart</h2>
          <button onClick={onClose} className="p-2 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </header>

        <div className="flex-1 p-6 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <p className="text-lg">Your cart is empty.</p>
              <button onClick={onClose} className="mt-4 bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-cyan-400 transition-colors">
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-4 items-center">
                  <img src={product.imageUrl} alt={product.name} className="w-24 h-24 object-cover rounded-md border border-gray-700" />
                  <div className="flex-1">
                    <h3 className="font-bold text-white">{product.name}</h3>
                    <p className="text-cyan-400 font-semibold">${product.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => onUpdateQuantity(product.id, quantity - 1)} className="p-1 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors disabled:opacity-50" disabled={quantity <= 0}>
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center font-bold">{quantity}</span>
                      <button onClick={() => onUpdateQuantity(product.id, quantity + 1)} className="p-1 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-white text-lg">${(product.price * quantity).toFixed(2)}</p>
                     <button onClick={() => onRemoveItem(product.id)} className="text-gray-500 hover:text-fuchsia-500 transition-colors mt-2">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <footer className="p-6 border-t border-gray-700/50">
            <div className="flex justify-between items-center text-lg mb-4">
              <span className="text-gray-300">Subtotal</span>
              <span className="font-orbitron font-bold text-white text-xl">${subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-fuchsia-500 text-white font-bold py-3 rounded-lg hover:bg-fuchsia-400 transition-all duration-300 transform hover:scale-105 active:scale-95 neon-glow-fuchsia">
              Proceed to Checkout
            </button>
          </footer>
        )}
      </div>
    </div>
  );
};

export default Cart;