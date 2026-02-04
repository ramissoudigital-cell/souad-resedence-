/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
  // Added isNightMode to props interface to fix type error in App.tsx
  isNightMode?: boolean;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemoveItem, onCheckout, isNightMode }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-blue-900/20 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-full md:w-[450px] z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out border-l flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ${isNightMode ? 'bg-[#020617] border-blue-900' : 'bg-white border-blue-50'}`}
      >
        {/* Header */}
        <div className={`flex items-center justify-between p-6 border-b ${isNightMode ? 'border-blue-900' : 'border-blue-50'}`}>
          <h2 className={`text-xl font-serif ${isNightMode ? 'text-blue-100' : 'text-blue-900'}`}>Your Cart ({items.length})</h2>
          <button 
            onClick={onClose} 
            className={`transition-colors ${isNightMode ? 'text-blue-400 hover:text-white' : 'text-blue-300 hover:text-blue-900'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-60">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={`w-12 h-12 ${isNightMode ? 'text-blue-900' : 'text-blue-200'}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <p className={`font-light ${isNightMode ? 'text-blue-400' : 'text-blue-400'}`}>Your cart is empty.</p>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="flex gap-4 animate-fade-in-up">
                <div className={`w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 ${isNightMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                  <img src={item.imageUrl} alt={item.name} className={`w-full h-full object-cover ${isNightMode ? 'brightness-75 grayscale' : ''}`} />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                        <h3 className={`font-serif ${isNightMode ? 'text-blue-100' : 'text-blue-900'}`}>{item.name}</h3>
                        <span className={`text-sm font-bold ${isNightMode ? 'text-blue-400' : 'text-blue-900'}`}>${item.price}</span>
                    </div>
                    <p className={`text-xs uppercase tracking-widest mt-1 ${isNightMode ? 'text-blue-500' : 'text-blue-300'}`}>{item.category}</p>
                  </div>
                  <button 
                    onClick={() => onRemoveItem(idx)}
                    className={`text-xs self-start underline underline-offset-4 transition-colors ${isNightMode ? 'text-blue-400 hover:text-white' : 'text-blue-400 hover:text-blue-900'}`}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className={`p-6 border-t ${isNightMode ? 'border-blue-900 bg-blue-900/10' : 'border-blue-50 bg-blue-50/20'}`}>
          <div className="flex justify-between items-center mb-6">
            <span className={`text-sm font-bold uppercase tracking-widest ${isNightMode ? 'text-blue-500' : 'text-blue-400'}`}>Subtotal</span>
            <span className={`text-xl font-serif ${isNightMode ? 'text-blue-100' : 'text-blue-900'}`}>${total}</span>
          </div>
          <button 
            onClick={onCheckout}
            disabled={items.length === 0}
            className={`w-full py-4 uppercase tracking-widest text-sm font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-xl rounded-xl ${
              isNightMode ? 'bg-blue-400 text-blue-950 hover:bg-blue-300' : 'bg-blue-900 text-white hover:bg-blue-800'
            }`}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;