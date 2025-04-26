import React from 'react';
import Logo from '../ui/Logo';
import Send from '../ui/Send';
import Button2 from '../ui/Button2';
import Image1 from '../ui/Image1';
import Image2 from '../ui/Image2';

const Query = () => {
  return (
    <div className="absolute top-[733px] left-[248px] w-[1192px] h-[291px] border-t  border-gray-300 bg-white flex">

      {/* Left Section */}
      <div className="w-[360px] h-full flex flex-col border-r border-[#EAECF0] bg-white flex-1">

        {/* Header */}
        <div className="w-full h-[52px] flex items-center justify-between px-[24px] py-[12px] border-b border-[#D7DFE9] flex-shrink-0">
          {/* Title and Badge */}
          <div className="flex items-center gap-[8px]">
            <span className="font-inter font-semibold text-[18px] leading-[28px] text-[#101828]">
              Pending Questions
            </span>
            <div className="w-[28px] h-[22px] flex items-center justify-center rounded-[4px] bg-[#2FBDFF] shadow-sm">
              <span className="font-inter font-medium text-[12px] leading-[18px] text-white text-center">
                02
              </span>
            </div>
          </div>
        </div>

        {/* Two Questions */}
        <div className="flex flex-col flex-1">

          {/* First Query */}
          <div className="w-full h-[119.5px] border-b border-[#EAECF0] p-[16px]">
            {/* Top Row */}
            <div className="flex items-center gap-[16px] mb-[8px]">
              {/* Bullet */}
              <div className="w-[8px] h-[8px] rounded-[5px] bg-[#2FBDFF]"></div>
              {/* Avatar */}
              <div className="w-[40px] h-[40px] rounded-full bg-gray-300 border-2 border-white"><Image1/></div>
              {/* Name + Username */}
              <div className="flex flex-col">
                <span className="font-inter font-semibold text-[14px] leading-[20px] text-[#344054]">
                  Phoenix Baker
                </span>
                <span className="font-inter font-normal text-[14px] leading-[20px] text-[#344054]">
                  @phoenix
                </span>
              </div>
              {/* Time */}
              <span className="ml-auto font-inter font-normal text-[14px] leading-[20px] text-[#475467]">
                5 min ago
              </span>
            </div>

            {/* Question Text */}
            <div className="pl-[20px]">
              <span className="font-inter font-normal text-[14px] leading-[20px] text-[#475467]">
                What are the requirements for opening a new store?
              </span>
            </div>
          </div>

          {/* Second Query */}
          <div className="w-full h-[119.5px] p-[16px]">
            {/* Top Row */}
            <div className="flex items-center gap-[16px] mb-[8px]">
              {/* Bullet */}
              <div className="w-[8px] h-[8px] rounded-[5px] bg-[#2FBDFF]"></div>
              {/* Avatar */}
              <div className="w-[40px] h-[40px] rounded-full bg-gray-300 border-2 border-white"><Image2/></div>
              {/* Name + Username */}
              <div className="flex flex-col">
                <span className="font-inter font-semibold text-[14px] leading-[20px] text-[#344054]">
                Koray Okumus
                </span>
                <span className="font-inter font-normal text-[14px] leading-[20px] text-[#344054]">
                 @koray
                </span>
              </div>
              {/* Time */}
              <span className="ml-auto font-inter font-normal text-[14px] leading-[20px] text-[#475467]">
               4hr ago
              </span>
            </div>

            {/* Question Text */}
            <div className="pl-[20px]">
              <span className="font-inter font-normal text-[14px] leading-[20px] text-[#475467]">
              How do I manage inventory effectively?
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* You can add Right Section here if needed */}
      <div className="relative w-[680px] border-[#E9EFF6] h-[169.56px] mt-[61.22px] rounded-lg px-6 py-4 flex flex-col items-center gap-[32px]">

        {/* Top Centered Div */}
        <div className="w-[486px] h-[93.56px] flex flex-col items-center gap-[20px]">
          {/* Logo */}
          <div className="w-[64px] h-[35.56px]">
            <Logo />
          </div>

          {/* Welcome Text */}
          <div className="text-[#212121] text-[30px] leading-[38px] font-semibold font-['Inter'] text-center">
            Welcome to the AI Chat Assistant
          </div>

        </div>

        {/* Input Box */}
        <div className="relative w-[680px] h-[44px]">
          <input
            type="text"
            placeholder="Ask your question here.."
            className="w-full h-full text-black pl-4 pr-12 rounded-lg font-['Inter'] text-[16px] leading-[24px] placeholder-[#1C222B99] focus:outline-none"
          />

          {/* Send Icon */}
          <button className="absolute top-1/2 right-4 transform -translate-y-1/2 w-[20px] h-[20px] flex items-center justify-center cursor-pointer">
            <Send />
          </button>
        </div>
      </div>
      <button
        className="absolute top-[40px] left-[1136px] bg-[#E9EFF6] rounded-full flex items-center justify-center"
      >
        {/* Icon inside the button */}
        <Button2 />
      </button>
    </div>
  );
};

export default Query;
