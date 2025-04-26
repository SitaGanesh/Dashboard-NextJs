import React from 'react';
import Header from "@/components/layout/Header";
import Slider from "@/components/layout/Slider";
import Main from '@/components/layout/Main';
import Query from '@/components/layout/Query';

export default function Home() {
  return (
    <div className="w-[1440px] h-[1024px] bg-white flex font-sans">
      {/* Left Side - Slider */}
      <div className="w-[248px] h-full">
        <Slider />
      </div>

      {/* Right Side - Header + Main + Query */}
      <div className="flex flex-col w-[1192px] h-full">
        <div className="h-[104px]">
          <Header />
        </div>
        <div className="h-[586px]">
          <Main />
        </div>
        <div className="h-[291px]">
          <Query />
        </div>
      </div>
    </div>
  );
}
