import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { CiCalendar } from 'react-icons/ci';

const TicketCard = () => {
  return (
    <>
      <div
        className="p-4 flex flex-col justify-between items-center gap-4 shadow-sm hover:shadow-md active:shadow-inner rounded-md cursor-pointer transform  hover:scale-101 active:scale-98
              transition-all duration-300 ease-in-out"
      >
        <div className="w-full flex justify-between items-center font-semibold text-lg text-[#001931]">
          <h3>Payment Failed - Card Declined</h3>{' '}
          <span className="flex justify-center items-center gap-1 px-3 py-1 bg-[#B9F8CF] text-[#0B5E06] rounded-full">
            <FaCircle className="text-[#02A53B]" /> Open
          </span>
        </div>
        <div className="w-full  py-2">
          <p className=" text-[#627382] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            eveniet natus dicta quaerat odio magnam recusandae repellendus
            aliquid, quos enim.
          </p>
        </div>
        <div className="w-full py-2 flex justify-between items-center text-[#627382]">
          <div className="flex justify-between items-center gap-4">
            <span>#1001</span>
            <span className="text-[#F83044] font-medium">HIGH PRIORITY</span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <span>John Smith</span>
            <span className="flex justify-between items-center gap-2">
              {' '}
              <CiCalendar className=" text-2xl" strokeWidth={1} />{' '}
              <span> 1/15/2024 </span>
            </span>
          </div>
        </div>
      </div>
      <div
        className="p-4 flex flex-col justify-between items-center gap-4 shadow-sm hover:shadow-md active:shadow-inner rounded-md cursor-pointer transform  hover:scale-101 active:scale-98
              transition-all duration-300 ease-in-out"
      >
        <div className="w-full flex justify-between items-center font-semibold text-lg text-[#001931]">
          <h3>Payment Failed - Card Declined</h3>{' '}
          <span className="flex justify-center items-center gap-1 px-3 py-1 bg-[#B9F8CF] text-[#0B5E06] rounded-full">
            <FaCircle className="text-[#02A53B]" /> Open
          </span>
        </div>
        <div className="w-full  py-2">
          <p className=" text-[#627382] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            eveniet natus dicta quaerat odio magnam recusandae repellendus
            aliquid, quos enim.
          </p>
        </div>
        <div className="w-full py-2 flex justify-between items-center text-[#627382]">
          <div className="flex justify-between items-center gap-4">
            <span>#1001</span>
            <span className="text-[#F83044] font-medium">HIGH PRIORITY</span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <span>John Smith</span>
            <span className="flex justify-between items-center gap-2">
              {' '}
              <CiCalendar className=" text-2xl" strokeWidth={1} />{' '}
              <span> 1/15/2024 </span>
            </span>
          </div>
        </div>
      </div>
      <div
        className="p-4 flex flex-col justify-between items-center gap-4 shadow-sm hover:shadow-md active:shadow-inner rounded-md cursor-pointer transform  hover:scale-101 active:scale-98
              transition-all duration-300 ease-in-out"
      >
        <div className="w-full flex justify-between items-center font-semibold text-lg text-[#001931]">
          <h3>Payment Failed - Card Declined</h3>{' '}
          <span className="flex justify-center items-center gap-1 px-3 py-1 bg-[#B9F8CF] text-[#0B5E06] rounded-full">
            <FaCircle className="text-[#02A53B]" /> Open
          </span>
        </div>
        <div className="w-full  py-2">
          <p className=" text-[#627382] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            eveniet natus dicta quaerat odio magnam recusandae repellendus
            aliquid, quos enim.
          </p>
        </div>
        <div className="w-full py-2 flex justify-between items-center text-[#627382]">
          <div className="flex justify-between items-center gap-4">
            <span>#1001</span>
            <span className="text-[#F83044] font-medium">HIGH PRIORITY</span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <span>John Smith</span>
            <span className="flex justify-between items-center gap-2">
              {' '}
              <CiCalendar className=" text-2xl" strokeWidth={1} />{' '}
              <span> 1/15/2024 </span>
            </span>
          </div>
        </div>
      </div>
      <div
        className="p-4 flex flex-col justify-between items-center gap-4 shadow-sm hover:shadow-md active:shadow-inner rounded-md cursor-pointer transform  hover:scale-101 active:scale-98
              transition-all duration-300 ease-in-out"
      >
        <div className="w-full flex justify-between items-center font-semibold text-lg text-[#001931]">
          <h3>Payment Failed - Card Declined</h3>{' '}
          <span className="flex justify-center items-center gap-1 px-3 py-1 bg-[#B9F8CF] text-[#0B5E06] rounded-full">
            <FaCircle className="text-[#02A53B]" /> Open
          </span>
        </div>
        <div className="w-full  py-2">
          <p className=" text-[#627382] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            eveniet natus dicta quaerat odio magnam recusandae repellendus
            aliquid, quos enim.
          </p>
        </div>
        <div className="w-full py-2 flex justify-between items-center text-[#627382]">
          <div className="flex justify-between items-center gap-4">
            <span>#1001</span>
            <span className="text-[#F83044] font-medium">HIGH PRIORITY</span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <span>John Smith</span>
            <span className="flex justify-between items-center gap-2">
              {' '}
              <CiCalendar className=" text-2xl" strokeWidth={1} />{' '}
              <span> 1/15/2024 </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketCard;
