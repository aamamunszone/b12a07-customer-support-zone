import React, { Suspense, useState } from 'react';
import { toast } from 'react-toastify';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from '../../pages/Home/HomePage';

const fetchTickets = async () => {
  const res = await fetch('/tickets.json');
  return await res.json();
};

const ticketsPromise = fetchTickets();

// console.log(ticketsPromise);

const MainLayout = () => {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [statusCard, setStatusCard] = useState([]);

  const handleTicketCardClick = (ticket) => {
    console.log('Ticket Card Clicked.', ticket);

    setInProgressCount((prev) => prev + 1);

    setStatusCard((prev) => [...prev, ticket]);

    toast.success(`Ticket "${ticket.title}" is now In Progress!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Main Section */}
      <Suspense
        fallback={
          <div className="min-h-screen flex justify-center items-center">
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </div>
        }
      >
        <main className="bg-[#f5f5f5]">
          <div className="container flex flex-col gap-16 py-16 mx-auto flex-1">
            <HomePage
              ticketsPromise={ticketsPromise}
              handleTicketCardClick={handleTicketCardClick}
              inProgressCount={inProgressCount}
              statusCard={statusCard}
            />
          </div>
        </main>
      </Suspense>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default MainLayout;
