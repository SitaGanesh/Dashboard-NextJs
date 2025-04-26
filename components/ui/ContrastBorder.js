import Image from 'next/image'
import React from 'react'

const ContrastBorder = ({ imgSrc }) => {
    return (
      <div className="rounded-full border-[1.5px] border-white">
        <Image src={imgSrc} alt="Icon" width={24} height={24} />
      </div>
    );
  };

export default ContrastBorder
