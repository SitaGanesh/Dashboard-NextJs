import React from 'react';
import Gear from '../ui/Gear';
import Avatar from '../ui/Avatar';

const Header = () => {
  return (
    <div className="w-full max-w-[1192px] h-20 border-b border-gray-300 px-8 fixed top-0 left-[248px] z-10 bg-white">
      <div className="w-full max-w-[1128px] flex justify-end py-5 gap-[16px]">
        <div className="w-[96px] h-[40px]">
          <header className="flex gap-[16px] items-center">
            <Gear />
            <Avatar />
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;
