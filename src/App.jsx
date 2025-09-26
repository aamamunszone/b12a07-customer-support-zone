import React from 'react';
import MainLayout from './layouts/MainLayout/MainLayout';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <MainLayout />

      <ToastContainer />
    </>
  );
};

export default App;
