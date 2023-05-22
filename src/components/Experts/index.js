import React from 'react'

const index = ({ title, discription , discription2 , image , subSectionTitle, subSectionDiscrp , name }) => {
  return (
 <div className='container md:max-w-container px-4 lg:px-[112px] pb-[136px] mx-auto '>
       <div className='grid md:grid-cols-2 pb-[96px]'>
           <div className='xl:pt-[139px] pt-20'>
             <h1 className='font-normal text-[46px]  text-[#221F20;] text-[#221F20]'>{title}</h1>
             <p className='pt-[14px] 2xl:text-[22px] font-[500] text-[#221F20]'>{discription}</p>
             <p className='pt-[24px] 2xl:text-[22px] font-[500] text-[#221F20]'> {discription2}</p>
           </div>
           <div className='flex justify-center md:justify-end pt-[96px]'>
           <img src={image} alt="" className='w-[300px] sm:w-[429px] sm:h-[363px] 2xl:w-[560px] 2xl:h-[430px]' />
           </div>
       </div>
       <div>
        <h1 className='text-[36px] font-[700] text-[#221F20]  leading-[125%] text-center'>{subSectionTitle}</h1>
        <p className='text-[20px] text-[#221F20;] font-[400] pt-[16px] text-center max-w-[980px] mx-auto  2xl:text-[22px] '>{subSectionDiscrp}</p>
        <p className='text-center pt-[16px] font-[600]'>{name}</p>
       </div>
       </div>
   
  )
}

export default index