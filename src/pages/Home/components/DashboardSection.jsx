import React from 'react';
import TicketCard from './TicketCard/TicketCard';
import TaskStatusCard from './TaskStatusCard/TaskStatusCard';
import ResolvedTaskCard from './TicketCard/ResolvedTaskCard/ResolvedTaskCard';

const DashboardSection = () => {
  return (
    <section className="grid grid-cols-3 lg:grid-cols-8 gap-8">
      {/* Ticket Section */}
      <div className="col-span-2 lg:col-span-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <h2 className="col-span-1 lg:col-span-2 font-semibold text-2xl whitespace-nowrap">
          Customer Tickets
        </h2>
        {/* Ticket Card */}
        <TicketCard />
      </div>

      {/* Status Section */}
      <div className="col-span-1 lg:col-span-2 space-y-8">
        <div className="space-y-5">
          <h2 className="font-semibold text-2xl whitespace-nowrap">
            Task Status
          </h2>
          {/* Task Status Card */}
          <TaskStatusCard />
        </div>
        <div className="space-y-5">
          <h2 className="font-semibold text-2xl whitespace-nowrap">
            Resolved Task
          </h2>
          {/* Resolved Task Card */}
          <ResolvedTaskCard />
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
