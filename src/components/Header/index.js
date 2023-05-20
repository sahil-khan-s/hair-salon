import React from 'react'
const Header = ({ headerData }) => {
  return (
    <div className=' '>
       
       <div className='bg-[#00205B]  '>
       <div className='container md:max-w-container px-4 lg:px-[112px] min-h-[72px] mx-auto md:flex py-3 md:py-0 justify-between'>
        <div>
        <h1 className='text-[#FEFDFD] font-bold text-[20px] leading-[125%] pt-[7px]'>
        24 Hour Emergency Service
        </h1>
        <p className='text-[#FEFDFD] pt-1 font-thin'>Hours: M-F 8:00 AM – 4:30 PM / 1705 W. Lewis St. San Diego, CA 92103</p>
        </div>
       <div>
       <button className='text-[#FEFDFD] border border-[#FEFDFD]  rounded-[2px] mt-1.5 py-[16px] px-[20px]'>Call Now +1 (619) 295-2115</button>

       </div>

       </div>
       </div>

  <div className='container md:max-w-container px-4 lg:px-[112px]  mx-auto'>
    <div className="flex justify-between items-center">
      <div>
        <img src={headerData.imageUrl} alt="Logo" className="w-[300px] mt-[16px] h-[181px]" />
      </div>
      <div className="ml-4 hidden md:block">
        <div className="flex space-x-4 text-[#00205B]">
          {headerData.texts.map((text, index) => (
            <h1  key={index} className='text-blue-900 font-bold'>{text}</h1>
          ))}
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Header;
