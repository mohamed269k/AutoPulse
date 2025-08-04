
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { X, Send, Bot, User, Loader } from 'lucide-react';
import type { ChatMessage, Product } from '../types';
import { PRODUCTS } from '../constants';
import { askAiAssistant } from '../services/geminiService';
import ProductCard from './ProductCard';

interface AiChatProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const AiChat: React.FC<AiChatProps> = ({ isOpen, onClose, onAddToCart }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 'initial',
          sender: 'ai',
          text: "Welcome to AutoPulse! I'm your AI assistant. Ask me to find the perfect RC car for you. For example, 'Find me a good car for beginners' or 'What's the fastest car under $500?'",
        },
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = useCallback(async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { id: Date.now().toString(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponse = await askAiAssistant(input, PRODUCTS);
      
      let responseText: React.ReactNode = aiResponse.reply;
      if (aiResponse.recommendations && aiResponse.recommendations.length > 0) {
          responseText = (
              <div>
                  <p>{aiResponse.reply}</p>
                  <div className="mt-4 grid grid-cols-1 gap-4">
                      {aiResponse.recommendations.map(rec => {
                          const product = PRODUCTS.find(p => p.id === rec.productId);
                          return product ? <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} /> : null;
                      })}
                  </div>
              </div>
          );
      }

      const aiMessage: ChatMessage = { id: (Date.now() + 1).toString(), sender: 'ai', text: responseText };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage: ChatMessage = { id: (Date.now() + 1).toString(), sender: 'ai', text: "Sorry, I'm having trouble connecting right now. Please try again later." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, onAddToCart]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl h-[80vh] bg-gray-900/80 border border-cyan-400/30 rounded-2xl shadow-2xl shadow-cyan-500/10 flex flex-col">
        <header className="flex items-center justify-between p-4 border-b border-gray-700/50">
          <div className="flex items-center gap-3">
            <Bot className="text-cyan-400" />
            <h2 className="font-orbitron text-xl text-white font-bold">AI Assistant</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white">
            <X size={20} />
          </button>
        </header>
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-6">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                {msg.sender === 'ai' && <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0"><Bot size={20} className="text-white" /></div>}
                <div className={`p-3 rounded-xl max-w-lg ${msg.sender === 'ai' ? 'bg-gray-800 text-gray-200' : 'bg-fuchsia-600 text-white'}`}>
                  {typeof msg.text === 'string' ? <p className="whitespace-pre-wrap">{msg.text}</p> : msg.text}
                </div>
                 {msg.sender === 'user' && <div className="w-8 h-8 rounded-full bg-fuchsia-600 flex items-center justify-center flex-shrink-0"><User size={20} className="text-white" /></div>}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                 <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0"><Bot size={20} className="text-white" /></div>
                 <div className="p-3 rounded-xl bg-gray-800 text-gray-200 flex items-center gap-2">
                    <Loader size={16} className="animate-spin text-cyan-400" />
                    <span>Thinking...</span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <footer className="p-4 border-t border-gray-700/50">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Ask about our RC cars..."
              className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 pl-4 pr-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              disabled={isLoading}
            />
            <button onClick={handleSend} disabled={isLoading || input.trim() === ''} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-md bg-cyan-500 text-white disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-cyan-400 transition-colors">
              <Send size={20} />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AiChat;
