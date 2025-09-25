import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from '../../pages/Home/HomePage';

const MainLayout = () => {
  return (
    <div className="flex flex-col justify-between gap-16 min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Main Section */}
      <main className="container flex flex-col gap-16 mx-auto h-[200px] flex-1">
        <HomePage />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default MainLayout;
