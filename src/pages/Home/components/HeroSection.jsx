import React from 'react';
import vector1 from '../../../assets/images/vector1.png';

const HeroSection = ({inProgressCount}) => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center gap-7">
      <div className="relative w-full h-[250px] p-10 rounded-xl bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white flex flex-col justify-center items-center gap-5 overflow-hidden">
        <h2 className="text-2xl">In-Progress</h2>
        <span className="font-semibold text-5xl"> {inProgressCount} </span>
        <div className="absolute flex justify-between inset-0 w-full h-full object-cover">
          <img src={vector1} alt="" />
          <img src={vector1} alt="" className="rotate-y-180" />
        </div>
      </div>
      <div className="relative w-full h-[250px] p-10 rounded-xl bg-linear-to-br from-[#54CF68] to-[#00827A] text-white flex flex-col justify-center items-center gap-5 overflow-hidden">
        <h2 className="text-2xl">Resolved</h2>
        <span className="font-semibold text-5xl">0</span>
        <div className="absolute flex justify-between inset-0 w-full h-full object-cover">
          <img src={vector1} alt="" />
          <img src={vector1} alt="" className="rotate-y-180" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
