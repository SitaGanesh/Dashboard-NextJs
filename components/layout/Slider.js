import React from 'react';
import Button from '../ui/Button';
import sliderData from '../../data/SideBar';
import Number from '../ui/Number';

const Slider = () => {
  const firstGroup = sliderData.slice(0, 9);
  const lastGroup = sliderData.slice(9);

  return (
    <div className="w-[248px] h-[1024px] bg-[#11455D] shadow-[0px_0px_5px_0px_#0000001F] fixed top-0 left-0 overflow-y-auto z-10">
      <div className="w-[248px] h-[924px] pt-[68px] pb-[32px] overflow-y-auto">
        <div className="w-[248px] h-[422px] px-[16px] space-y-[12px] text-left">
          {firstGroup.map((item, index) => (
            <div className="w-[216px] h-[36px]" key={index}>
              <ButtonWithHover>{item.label}</ButtonWithHover>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[248px] h-[36px] px-[16px] py-[12px]">
        {lastGroup.map((item, index) => (
          item.label === 'Pending Questions' ? (
            <div className="w-[216px] h-[36px] flex justify-between items-center" key={index}>
              <ButtonWithHover>{item.label}</ButtonWithHover>
              <div>
                <Number />
              </div>
            </div>
          ) : (
            <Button key={index} type="gray" size="sm" state="default">
              {item.label}
            </Button>
          )
        ))}
      </div>
    </div>
  );
};

const ButtonWithHover = ({ children }) => {
  return (
    <button className="w-[216px] text-left h-[36px] px-[16px] py-[8px] bg-transparent border-none text-white text-[16px] leading-[20px] tracking-[-0.5%] font-[500]
      hover:text-[#2FBCFE] hover:bg-transparent hover:border-none focus:outline-none cursor-pointer">
      {children}
    </button>
  );
};

export default Slider;
