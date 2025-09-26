import React from 'react';
import TicketCard from './TicketCard/TicketCard';
import TaskStatusCard from './TaskStatusCard/TaskStatusCard';
import ResolvedTaskCard from './TicketCard/ResolvedTaskCard/ResolvedTaskCard';

const DashboardSection = ({ tickets, handleTicketCardClick, statusCard }) => {
  return (
    <section className="grid grid-cols-3 lg:grid-cols-8 gap-8">
      {/* Ticket Section */}
      <div className="col-span-2 lg:col-span-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <h2 className="col-span-1 lg:col-span-2 font-semibold text-2xl whitespace-nowrap">
          Customer Tickets : {tickets.length}
        </h2>
        {/* Ticket Card */}
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            handleTicketCardClick={handleTicketCardClick}
          />
        ))}
      </div>

      {/* Status Section */}
      <div className="col-span-1 lg:col-span-2 space-y-8">
        <div className="space-y-5">
          <h2 className="font-semibold text-2xl whitespace-nowrap">
            Task Status
          </h2>
          {/* Blank Message for Task Status */}
          <div className="px-4 py-10 flex flex-col justify-between items-center gap-4 shadow-sm hover:shadow-md active:shadow-inner rounded-md">
            <h3 className="text-lg">No Task in Progress</h3>
            <p className="text-[#627382] tracking-wide">
              Click on a{' '}
              <span className="text-[#02A53B] underline underline-offset-4 cursor-pointer ">
                Ticket
              </span>{' '}
              to start working
            </p>
          </div>
          {/* Task Status Card */}
          {statusCard.map((card) => (
            <TaskStatusCard key={card.id} card={card.title} />
          ))}
        </div>
        <div className="space-y-5">
          <h2 className="font-semibold text-2xl whitespace-nowrap">
            Resolved Task
          </h2>
          {/* Blank Message for Resolved Task */}
          <div className="px-4 py-10 flex flex-col justify-between items-center gap-4 shadow-sm hover:shadow-md active:shadow-inner rounded-md">
            <h3 className="text-lg">No Resolved Task Yet</h3>
          </div>
          {/* Resolved Task Card */}
          <ResolvedTaskCard />
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
