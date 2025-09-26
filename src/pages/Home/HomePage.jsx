import React, { Suspense, use } from 'react';
import HeroSection from './components/HeroSection';
import DashboardSection from './components/DashboardSection';

const HomePage = ({
  ticketsPromise,
  handleTicketCardClick,
  inProgressCount,
  statusCard,
}) => {
  // console.log(ticketsPromise);

  const ticketsData = use(ticketsPromise);

  // console.log(ticketsData);

  const tickets = ticketsData.tickets;

  // console.log(tickets);

  return (
    <>
      {/* Hero Section */}
      <HeroSection inProgressCount={inProgressCount} />

      {/* Dashboard Section */}
      <DashboardSection
        tickets={tickets}
        handleTicketCardClick={handleTicketCardClick}
        statusCard={statusCard}
      />
    </>
  );
};

export default HomePage;
