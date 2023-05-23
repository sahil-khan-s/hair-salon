import React from 'react'

const index = ({
    image,
    location,
    locationIcon,
    callIcon,
    phone,
})  => {
  return (
    <div>
       <div className='flex flex-col md:flex-row justify-center gap-[64px] py-[96px]'>
        <div className='flex justify-center'>
        <img src={image} alt="" width={322} height={90} />
        </div>
        <div>
        <div className='flex justify-center gap-[6px] pt-[32px]'>
                <img src={locationIcon} alt="" />
                <span className='text-[#AE7029]'>{location}</span>
         </div>
         <div className="flex pt-[16px] justify-center gap-[4px] ">
                <img
                  src={callIcon}
                  alt="none"
                  className="h-[16px] mt-1 w-[16px] 2xl:h-[20px] 2xl:w-[20px]"
                />
                <span className="text-[#AE7029] text-[16px]  2xl:text-[17px] font-[600]">
                  {phone}
                </span>
              </div>
        </div>
        
       </div>
 
 <div className='bg-[#ECEBE6] min-h-[37px]'>
    <h1 className='text-center pt-[10px] text-[14px] 2xl:text-[16px] text-[#221F20]'>Copyright ©2023 Company Name</h1>
 </div>


    </div>
  )
}

export default index