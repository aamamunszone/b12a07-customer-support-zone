import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from '../../pages/Home/HomePage';

const MainLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Main Section */}
      <main className="bg-[#f5f5f5]">
        <div className="container flex flex-col gap-16 py-16 mx-auto flex-1">
          <HomePage />
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default MainLayout;
