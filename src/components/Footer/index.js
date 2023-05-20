import React from 'react'
const Header = ({ 
copyWrite,
fb,
insta,
linkdIn,
youTube,
twitter,

 }) => {
  return (
    <div className=' sm:pt-5'>
       
       <div className='bg-[#00205B]  '>
       <div className='container md:max-w-container  px-4 lg:px-[112px] min-h-[42px] mx-auto flex justify-between'>
        <div className='pt-2 flex gap-[8px]'>
         <img src={fb} alt="" />
         <img src={twitter} alt="" />
         <img src={insta} alt="" />
         <img src={linkdIn} alt="" />
         <img src={youTube} alt="" />
        </div>
        <div>
            <h1 className=' pt-2 font-[400] text-white'>{copyWrite}</h1>
        </div>
      </div>
  </div>
    </div>
  );
};

export default Header;
