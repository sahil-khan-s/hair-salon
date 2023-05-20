import React from 'react'

const index = ({ title, buttonText }) => {
  return (
    <div className='bg-gray-200 mt-[16px] min-h-[374px] '>
 <div className='container md:max-w-container px-4 lg:px-[112px] min-h-[72px] mx-auto grid items-center '>
        <div className='max-w-[700px] mx-auto pt-20'>
     <h1 className='font-bold text-black text-[35px] sm:text-[64px] text-center'>
        {title}
     </h1>
     <div className='flex justify-center pt-[32px]' >
        <button className='font-bold text-[20px] text-[#FEFDFD] bg-[#00205B] py-[20px] px-[40px] rounded-[4px]'>            
            {buttonText}          
        </button>
     </div>
        </div>
       </div>
    </div>
   
  )
}

export default index