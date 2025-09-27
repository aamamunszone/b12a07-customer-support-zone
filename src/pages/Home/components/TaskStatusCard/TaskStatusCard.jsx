import React from 'react';
const TaskStatusCard = ({ card, handleComplete }) => {
  // console.log(card);

  return (
    <>
      <div className="space-y-5">
        <div
          className="bg-white  p-4 flex flex-col justify-between items-center gap-4 shadow-sm hover:shadow-md active:shadow-inner rounded-md transform  hover:scale-101 active:scale-98
  transition-all duration-300 ease-in-out"
        >
          <h3 className="w-full font-semibold text-lg text-[#001931]">
            {card.title}
          </h3>
          <button
            onClick={() => handleComplete(card)}
            className="w-full px-3 py-2 rounded-md bg-[#02A53B] text-white cursor-pointer"
          >
            Complete
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskStatusCard;
