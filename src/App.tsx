import React from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import NewArrivals from './components/NewArrivals';
import VideoCampaign from './components/VideoCampaign';
import BestSellers from './components/BestSellers';
import SaleItems from './components/SaleItems';
import SpecialEvent from './components/SpecialEvent';
import StoreMap from './components/StoreMap';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white font-sans text-gray-900">
        <Header />
        <CartDrawer />
        <main>
          <Hero />
          <NewArrivals />
          <VideoCampaign />
          <BestSellers />
          <SaleItems />
          <SpecialEvent />
          <StoreMap />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
