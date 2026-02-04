
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Journal from './components/Journal';
import Assistant from './components/Assistant';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import JournalDetail from './components/JournalDetail';
import CartDrawer from './components/CartDrawer';
import Checkout from './components/Checkout';
import Reservation from './components/Reservation';
import ContactPage from './components/ContactPage';
import ExperienceBuilder from './components/ExperienceBuilder';
import AbidjanOracle from './components/KyotoOracle';
import Gallery from './components/Gallery';
import RestaurantPage from './components/RestaurantPage';
import { Product, ViewState } from './types';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);
  
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement> | null, targetId: string) => {
    if (e) e.preventDefault();
    if (targetId === 'reservation') { setView({ type: 'reservation' }); window.scrollTo(0,0); return; }
    if (targetId === 'contact') { setView({ type: 'contact' }); window.scrollTo(0,0); return; }
    if (targetId === 'gallery') { setView({ type: 'gallery' }); window.scrollTo(0,0); return; }
    if (targetId === 'restaurant') { setView({ type: 'restaurant' }); window.scrollTo(0,0); return; }
    if (targetId === 'about') { setView({ type: 'home' }); setTimeout(() => scrollToSection('about'), 50); return; }
    if (targetId === 'journal') { setView({ type: 'home' }); setTimeout(() => scrollToSection('journal'), 50); return; }
    if (targetId === 'home' || targetId === '') { setView({ type: 'home' }); window.scrollTo(0,0); return; }

    if (view.type !== 'home') {
      setView({ type: 'home' });
      setTimeout(() => scrollToSection(targetId), 50);
    } else {
      scrollToSection(targetId);
    }
  };

  const handleProceedToPayment = (room: Product, dates: {checkIn: string, checkOut: string}) => {
    // On ajoute la chambre au panier ou on passe directement au checkout avec l'item unique
    setCartItems([room]); 
    setView({ type: 'checkout' });
    window.scrollTo(0, 0);
  };

  const scrollToSection = (targetId: string) => {
    if (!targetId) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-[1000ms] ${isNightMode ? 'bg-[#020617] text-[#DBEAFE]' : 'bg-[#F8FBFF] text-[#1E3A8A]'} font-sans selection:bg-[#BFDBFE]`}>
      
      {/* Mood Toggle */}
      <button 
        onClick={() => setIsNightMode(!isNightMode)}
        className={`fixed top-24 right-8 z-[60] w-14 h-14 rounded-full flex items-center justify-center border shadow-2xl hover:scale-110 transition-all duration-500 group ${
          isNightMode 
          ? 'bg-blue-600 border-blue-400 text-yellow-300' 
          : 'bg-white border-blue-100 text-blue-900'
        }`}
        title="Changer l'ambiance"
      >
        <span className="text-2xl">{isNightMode ? '☀️' : '🌙'}</span>
      </button>

      {view.type !== 'checkout' && (
        <Navbar 
            onNavClick={handleNavClick} 
            cartCount={cartItems.length}
            onOpenCart={() => setIsCartOpen(true)}
            currentView={view.type}
            onOpenAssistant={() => setIsAssistantOpen(true)}
            isNightMode={isNightMode}
        />
      )}
      
      <main>
        {view.type === 'home' && (
          <>
            <Hero onBookNow={() => setView({ type: 'reservation' })} isNightMode={isNightMode} />
            <ProductGrid onProductClick={(p) => setView({ type: 'product', product: p })} isNightMode={isNightMode} />
            <About isNightMode={isNightMode} />
            <ExperienceBuilder isNightMode={isNightMode} />
            <AbidjanOracle isNightMode={isNightMode} />
            <Journal onArticleClick={(a) => setView({ type: 'journal', article: a })} isNightMode={isNightMode} />
          </>
        )}

        {view.type === 'product' && (
          <ProductDetail 
            product={view.product} 
            onBack={() => setView({ type: 'home' })}
            onAddToCart={(p) => { setCartItems([...cartItems, p]); setIsCartOpen(true); }}
            onBook={() => setView({ type: 'reservation', selectedProductId: view.product.id })}
            isNightMode={isNightMode}
          />
        )}

        {view.type === 'journal' && <JournalDetail article={view.article} onBack={() => setView({ type: 'home' })} isNightMode={isNightMode} />}
        
        {view.type === 'reservation' && (
          <Reservation 
            onBack={() => setView({ type: 'home' })} 
            onProceedToPayment={handleProceedToPayment}
            selectedId={view.selectedProductId} 
            isNightMode={isNightMode} 
          />
        )}
        
        {view.type === 'contact' && (
          <ContactPage 
            onBack={() => setView({ type: 'home' })} 
            onOpenAssistant={() => setIsAssistantOpen(true)}
            isNightMode={isNightMode}
          />
        )}

        {view.type === 'gallery' && <Gallery onBack={() => setView({ type: 'home' })} isNightMode={isNightMode} />}
        
        {view.type === 'restaurant' && (
          <RestaurantPage 
            onAddToCart={(p) => setCartItems([...cartItems, p])} 
            onGoToCheckout={() => setView({ type: 'checkout' })}
            isNightMode={isNightMode}
          />
        )}
        
        {view.type === 'checkout' && <Checkout items={cartItems} onBack={() => setView({ type: 'home' })} isNightMode={isNightMode} />}
      </main>

      {view.type !== 'checkout' && <Footer onLinkClick={handleNavClick} isNightMode={isNightMode} />}
      
      <Assistant 
        isOpen={isAssistantOpen} 
        onToggle={() => setIsAssistantOpen(!isAssistantOpen)} 
        onNavigate={(pageId) => handleNavClick(null, pageId)}
      />
      
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={(idx) => { const n = [...cartItems]; n.splice(idx,1); setCartItems(n); }}
        onCheckout={() => { setIsCartOpen(false); setView({ type: 'checkout' }); }}
        isNightMode={isNightMode}
      />
    </div>
  );
}

export default App;
