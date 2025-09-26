import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { CiCalendar } from 'react-icons/ci';

const TicketCard = ({ ticket, handleTicketCardClick }) => {
  return (
    <>
      <div
        onClick={() => handleTicketCardClick(ticket)}
        className="p-4 flex flex-col justify-between items-center gap-4 shadow-sm hover:shadow-md active:shadow-inner rounded-md cursor-pointer transform  hover:scale-101 active:scale-98
              transition-all duration-300 ease-in-out"
      >
        <div className="w-full flex justify-between items-center font-semibold text-lg text-[#001931]">
          <h3>{ticket.title}</h3>{' '}
          <span className="flex justify-center items-center gap-1 px-2 py-[2px] bg-[#B9F8CF] text-[#0B5E06] rounded-full">
            <FaCircle className="text-[#02A53B]" /> {ticket.status}
          </span>
        </div>
        <div className="w-full  py-2">
          <p className=" text-[#627382] leading-relaxed">
            {ticket.description}
          </p>
        </div>
        <div className="w-full py-2 flex justify-between items-center text-[#627382]">
          <div className="flex justify-between items-center gap-4">
            <span># {ticket.id}</span>
            <span className="text-[#F83044] font-medium">
              {ticket.priority} PRIORITY
            </span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <span>{ticket.customer}</span>
            <span className="flex justify-between items-center gap-2">
              {' '}
              <CiCalendar className=" text-2xl" strokeWidth={1} />{' '}
              <span> {ticket.createdAt} </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketCard;
