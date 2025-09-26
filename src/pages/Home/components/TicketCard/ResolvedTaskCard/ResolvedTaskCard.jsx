import React from 'react';
import { FaCheck } from 'react-icons/fa6';

const ResolvedTaskCard = () => {
  return (
    <>
      <div className="space-y-5">
        <div
          className="  p-4 flex flex-col justify-between items-center gap-4 shadow-sm hover:shadow-md active:shadow-inner rounded-md transform  hover:scale-101 active:scale-98
  transition-all duration-300 ease-in-out  bg-[#B9F8CF]"
        >
          <h3 className="w-full font-semibold text-lg text-[#001931]">
            Payment Failed - Card Declined
          </h3>
          <div className="w-full flex justify-between items-center px-3 py-2 rounded-md">
            <div className="flex justify-between items-center gap-2.5 text-[#02A53B]">
              <span>
                <FaCheck />
              </span>
              <span className="">Completed</span>
            </div>
            <button className="text-[#627382] hover:text-[red] text-sm hover:underline underline-offset-4 cursor-pointer">
              Click to Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResolvedTaskCard;
