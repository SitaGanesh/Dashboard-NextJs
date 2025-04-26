import React from 'react'
import ProgressCircle from '../ui/ProgressCircle'
import CheckIcon from '../ui/CheckIcon'
import CheckIcon2 from '../ui/CheckIcon2'
import BadgeWrap from '../ui/BadgeWrap'
import ContrastBorder from '../ui/ContrastBorder'
import Stage from '../ui/Stage'
import BadgeWrap2 from '../ui/BadgeWrap2'
import Lead from '../ui/Lead'
import Baked from '../ui/Baked'



const Main = () => {
    const images = [
        { id: 1, img: '/main/img1.png' },
        { id: 2, img: '/main/img2.png' },
        { id: 3, img: '/main/img3.png' },
        { id: 4, img: '/main/img4.png' },
        { id: 5, img: '/main/img5.png' },
        { id: 6, img: '/main/img6.png' },
    ];
    const stage = [
        { color: '#1F7EAA', string: 'Stage 1 (Initial inquiry)', no: 2 },
        { color: '#2FBDFF', string: 'Stage 2 (Document Submission)', no: 7 },
        { color: '#97DEFF', string: 'Stage 3 (Training)', no: 5 },
    ];
    const leads = [
        { img: "/main/lead1.png", name: "Wade Warren", stage: "Stage: Initial Inquiry" },
        { img: "/main/lead2.png", name: "Ava Wright", stage: "Stage: Initial Inquiry" },
        { img: "/main/lead3.png", name: "Wade Warren", stage: "Stage: Initial Inquiry" },
    ]
    return (
        <div className="absolute top-[104px] left-[280px] w-[1128px] h-[586px] grid grid-cols-[316px_386px_386px] gap-[20px] overflow-hidden">

            {/* First Grid - left side spanning full height */}
            <div className="w-[316px] h-[586px] rounded-xl border border-[#EAECF0] shadow-sm p-[24px]">
                <div className="w-[268px] h-[538px] flex flex-col gap-[20px] bg-white">

                    {/* New Inner Box with height 212, border bottom, etc. */}
                    <div className="w-[268px] h-[212px] flex flex-col gap-[24px] pb-[16px] border-b border-[#E9EFF6]">
                        <div className="w-[139px] h-[24px] mx-auto text-center text-black font-inter font-semibold text-[16px] leading-[24px]">
                            Account Progress
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <ProgressCircle />
                        </div>
                    </div>

                    <div className="w-[268px] flex flex-col gap-[16px]">

                        {/* Completed Steps Box */}
                        <div className="w-[268px] h-[162px] bg-[#F6F7FB] rounded-[8px] p-[16px] flex flex-col gap-[16px]">
                            <div className="w-[118px] h-[24px] text-start font-inter font-semibold text-[14px] leading-[24px] tracking-[0%] text-[#1C222B]">
                                Steps Completed
                            </div>
                            <div className="w-[236px] h-[90px] flex flex-col justify-between">
                                <div className="w-[236px] h-[24px] flex justify-between items-center">
                                    <span className="text-sm text-[#1C222B]">Profile Setup</span>
                                    {/* ✅ Replace with your icon */}
                                    <span><CheckIcon /></span>
                                </div>
                                <div className="w-[236px] h-[24px] flex justify-between items-center">
                                    <span className="text-sm text-[#1C222B]">Initial Training</span>
                                    <span><CheckIcon /></span>
                                </div>
                                <div className="w-[236px] h-[24px] flex justify-between items-center">
                                    <span className="text-sm text-[rgb(28,34,43)]">Legal Document</span>
                                    <span><CheckIcon /></span>
                                </div>
                            </div>
                        </div>

                        {/* Remaining Steps Box */}
                        <div className="w-[268px] h-[128px] bg-[#F6F7FB] rounded-[8px] p-[16px] flex flex-col gap-[16px]">
                            <div className="w-[114px] h-[24px] text-start font-inter font-semibold text-[14px] leading-[24px] tracking-[0%] text-[#1C222B]">
                                Steps Remaining
                            </div>
                            <div className="w-[236px] h-[56px] flex flex-col gap-[8px]">
                                <div className="w-[236px] h-[24px] flex justify-between items-center">
                                    <span className="text-sm text-[#1C222B]">Financial District</span>
                                    <span><CheckIcon2 /></span>
                                </div>
                                <div className="w-[236px] h-[24px] flex justify-between items-center">
                                    <span className="text-sm text-[#1C222B]">Final Review</span>
                                    <span><CheckIcon2 /></span>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            {/* Second Column - two grids stacked */}
            <div className="flex flex-col justify-between h-[586px]">
                <div className="w-[386px] h-[284px] bg-white rounded-xl border border-[#EAECF0] shadow-sm p-[24px]">
                    <div className="w-[338px] h-[78px] text-black font-semibold text-base flex flex-col gap-[16px] border-b border-[#EAECF0] pb-[16px]">
                        Total Franchisees Onboard
                        <div className="w-[338px] h-[38px] flex justify-between">
                            <div className="w-[215px] h-[38px] flex gap-[16px]">
                                <div className="w-[35px] h-[38px] text-[30px] leading-[38px] font-inter font-semibold text-[#101828]">
                                    14
                                </div>
                                <BadgeWrap />
                            </div>
                            {/* Avatar Group - Parent Container */}
                            <div className="flex items-center  w-[124px] h-[24px]">
                                {images.map((image) => (
                                    <ContrastBorder key={image.id} imgSrc={image.img} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2 w-[338px] h-[12px] mt-[16px]">
                        {/* First bar */}
                        <div className="w-[100px] h-[12px] rounded-[4px] bg-[#1F7EAA]"></div>

                        {/* Second bar */}
                        <div className="w-[76px] h-[12px] rounded-[4px] bg-[#2FBDFF]"></div>

                        {/* Third bar */}
                        <div className="w-[146px] h-[12px] rounded-[4px] bg-[#97DEFF]"></div>
                    </div>

                    <div className="w-[338px] h-[98px] flex flex-col gap-[16px] mt-[16px]">
                        {stage.map((sta, index) => (
                            <Stage key={index} color={sta.color} string={sta.string} no={sta.no} />
                        ))}
                    </div>
                </div>

                <div className="w-[386px] h-[282px] bg-white rounded-xl border border-[#EAECF0] shadow-sm p-[24px]">
                    <div className="w-[338px] h-[112px] flex flex-col gap-[16px] pb-[12px] border-b border-[#E9EFF6]">
                        <div className="w-[150px] h-[24px] text-center text-[#000000] font-inter font-semibold text-[16px] leading-[24px]">
                            Financial Wellbeing
                        </div>
                        <div className="w-[338px] h-[60px] flex justify-between">
                            {/* First Inner Box */}
                            <div className="w-[118px] h-[60px] flex flex-col gap-[2px]">
                                <div className="w-[39px] h-[38px] text-[30px] leading-[38px] font-semibold text-[#101828] font-inter">
                                    20
                                </div>

                                {/* Bottom - Label */}
                                <div className="w-[118px] h-[20px] text-[14px] leading-[20px] font-medium text-[#101828] font-inter">
                                    Total Franchisees
                                </div>
                            </div>

                            {/* Second Inner Box */}
                            <div className="w-[64px] h-[24px] flex justify-center">
                                <BadgeWrap2 />
                            </div>
                        </div>
                    </div>

                    <div className="w-[338px] h-[102px] flex justify-between gap-[16px] mt-[16px]">
                        {/* Target Block */}
                        <div className="w-[161px] h-[102px] bg-[#F6F7FB] rounded-[8px] pr-[16px] pl-[16px] pt-[16px] pb-[16px] border-r border-[#EAECF0] flex flex-col gap-[8px]">
                            <div className="text-[14px] leading-[24px] font-semibold text-center font-inter text-[#000000]">
                                Target
                            </div>
                            <div className="text-[20px] leading-[38px] font-semibold text-center font-inter text-[#000000]">
                                $500,000
                            </div>
                        </div>

                        {/* Current Block */}
                        <div className="w-[161px] h-[102px] bg-[#F6F7FB] rounded-[8px] pr-[16px] pl-[16px] pt-[16px] pb-[16px] flex flex-col gap-[8px]">
                            <div className="text-[14px] leading-[24px] font-semibold text-center font-inter text-[#000000]">
                                Current
                            </div>
                            <div className="text-[20px] leading-[38px] font-semibold text-center font-inter text-[#000000]">
                                $450,000
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Third Column - two grids stacked */}
            <div className="flex flex-col justify-between h-[586px]">
                <div className="w-[386px] h-[282px] bg-white rounded-xl border border-[#EAECF0] shadow-sm p-[24px]">

                    {/* Key Insights & Feedback Header */}
                    <div className="w-[338px] h-[24px] border-b border-[#E9EFF6] mb-[12px]">
                        <p className="text-[14px] font-semibold font-inter leading-[24px] text-[#1C222B]">
                            Key Insights & Feedback
                        </p>
                    </div>

                    {/* Feedback Summary or Stats */}
                    <div className="w-[338px] h-[80px] flex justify-between pb-[12px] border-b border-[#E9EFF6] mb-[12px]">
                        <div className="w-[90px] h-[68px] flex flex-col gap-[16px]">
                            <div className="w-[90px] h-[60px] flex flex-col gap-[4px]">
                                <div className="w-[60px] h-[38px] text-[30px] leading-[38px] font-semibold font-inter text-[#101828]">
                                    10%
                                </div>
                                <div className="w-[90px] h-[20px] text-[14px] leading-[20px] font-medium font-inter text-[#475467]">
                                    Sales Growth
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-[16px] w-[107px] h-[68px]">
                            {/* Top Small Box */}
                            <div className="w-[36px] h-[36px] bg-gray-300 rounded-full">
                                <Baked />
                            </div>

                            {/* Bottom Badge */}
                            <div className="flex items-center justify-center w-[107px] h-[24px] px-[12px] py-[2px] rounded-[20px] border border-[#BAE9FF] bg-[#D5F2FF80]">
                                <span className="text-[#279DD4] font-['Inter'] font-medium text-[12px] leading-[20px]">
                                    Top Performer
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Insight Card or Message */}
                    <div className="w-[338px] h-[90px] gap-[6px] px-[16px] py-[8px] rounded-[8px] bg-[#F6F7FB] flex flex-col">
                        {/* Feedback Heading */}
                        <div className="w-[66px] h-[24px] text-center text-[#1C222B] text-[14px] font-semibold leading-[24px] font-inter mb-[8px]">
                            Feedback
                        </div>

                        {/* Feedback Message */}
                        <div className="w-[306px] h-[36px] flex gap-[8px]">
                            {/* Bullet */}
                            <div className="w-[10px] h-[36px] pt-[4px]">
                                <div className="w-[10px] h-[10px] rounded-full bg-[#D9D9D9]"></div>
                            </div>

                            {/* Message */}
                            <div className="w-[288px] h-[36px] text-[#455468] text-[12px] font-medium leading-[18px] font-inter">
                                Franchisees are requesting more detailed training materials.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[386px] h-[284px] bg-white rounded-xl border border-[#EAECF0] shadow-sm p-[24px]">

                    {/* Prospect Leads Heading */}
                    <div className="w-[121px] h-[24px] text-[16px] leading-[24px] font-semibold font-inter text-[#000000]">
                        Prospect Leads
                    </div>

                    {/* Leads Detail Section */}
                    <div className="w-[338px] h-[192px] flex flex-col gap-[12px]">
                        {leads.map((lead, index) => (
                            <Lead
                                key={index}
                                img={lead.img}
                                name={lead.name}
                                stage={lead.stage}
                            />
                        ))}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Main
