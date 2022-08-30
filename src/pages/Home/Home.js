import React from 'react';
import '../../assets/images/sprite.svg'
import CategoriesSection from '../../components/Categories-Section/CategoriesSection';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import NewArrival from '../../components/New-Arrival/NewArrival';
import Promotion from '../../components/Promotion/Promotion';


const Home = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Categories Section */}
      <CategoriesSection />
      {/* New Arrivals */}
      <NewArrival />
      {/* Promotion Section */}
      <Promotion />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;