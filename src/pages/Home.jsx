import React from 'react'
import HeroSection from '../components/UI/HeroSection';
import LiveAuction from '../components/UI/Live-auction/LiveAuction';
import SellerSection from '../components/UI/Seller-section/SellerSection';
import Trending from '../components/UI/Trending-section/Trending';
import StepSection from '../components/UI/Step-section/StepSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
      <Trending />
      <StepSection />
    </div>
  )
}

export default Home;