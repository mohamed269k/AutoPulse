
import React from 'react';
import { AutoPulseLogo } from '../constants';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
    const socialLinks = [
        { icon: <Facebook />, href: '#' },
        { icon: <Twitter />, href: '#' },
        { icon: <Instagram />, href: '#' },
        { icon: <Youtube />, href: '#' },
    ];
  return (
    <footer className="bg-black/50 border-t border-gray-800/50 mt-16">
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
                <a href="#/" className="w-48 text-white hover:text-cyan-400 transition-colors duration-300 block">
                    <AutoPulseLogo />
                </a>
                <p className="text-gray-400 mt-4 text-sm">Engineered for the drift.</p>
            </div>
            <div>
                <h4 className="font-orbitron text-white text-lg font-bold mb-4">Shop</h4>
                <ul className="space-y-2">
                    <li><a href="#products" className="text-gray-400 hover:text-cyan-400 transition-colors">RC Cars</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Parts</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Apparel</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Deals</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-orbitron text-white text-lg font-bold mb-4">Support</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact Us</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">FAQ</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Shipping</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Returns</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-orbitron text-white text-lg font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                    {socialLinks.map((link, i) => (
                        <a key={i} href={link.href} className="text-gray-400 hover:text-fuchsia-500 transition-colors">{link.icon}</a>
                    ))}
                </div>
            </div>
        </div>
        <div className="mt-12 border-t border-gray-800/50 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} AutoPulse RC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;