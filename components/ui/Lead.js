import Image from 'next/image';
import React from 'react';

const Lead = ({ img, name, stage }) => {
  // Fallback if props are missing
  if (!img || !name || !stage) {
    return (
      <div className="w-[338px] h-[56px] flex items-center gap-[16px]">
        <div className="w-[306px] h-[36px] flex items-center justify-between">
          <span className="text-red-500">Missing lead data</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[338px] h-[56px] flex items-center gap-[16px]">
      <div className="w-[306px] h-[36px] flex items-center justify-between">
        <div className="flex items-center gap-[12px]">
          <Image
            src={img}
            alt={name}
            width={36}
            height={36}
            className="w-[36px] h-[36px] rounded-full object-cover"
          />
          <span
            className="w-[90px] h-[20px] font-inter font-medium text-[14px] leading-[20px] text-[#101828]"
          >
            {name}
          </span>
        </div>
        <span
          className="w-[133px] h-[20px] font-inter font-medium text-[14px] leading-[20px] text-[#475467]"
        >
          {stage}
        </span>
      </div>
    </div>
  );
};

// Default props to handle missing values
Lead.defaultProps = {
  img: '/main/lead1.png',
  name: 'Unknown',
  stage: 'Unknown Stage',
};

export default Lead;