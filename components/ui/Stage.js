import React from 'react'

const Stage = ({ color, string, no}) => {
    return (
        <div>
            <div className="flex justify-between items-center w-[338px] h-[22px]">
                {/* Colored square replacing the image */}
                <div
                    style={{ backgroundColor: color }}
                    className="w-[10px] h-[10px] rounded"
                ></div>

                {/* Label text */}
                <div className="w-[150px] h-[20px] text-[#475467] font-inter font-medium text-[14px] leading-[20px]">
                    {string}
                </div>

                {/* Value text */}
                <div className="w-[24px] h-[22px] font-inter text-black font-semibold text-[18px] leading-[100%]">
                    0{no}
                </div>
            </div>
            </div>
        
    )
}

export default Stage
