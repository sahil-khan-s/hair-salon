import React from 'react'

const index = ({ title, discription  }) => {
  return (
    <div className='bg-gray-200 py-[96px]'>
<div className='container md:max-w-container px-4 lg:px-[112px]  mx-auto '>
    
    <h1 className='text-[48px] text-[#221F20;] font-[300] leading-[125%] text-center tracking-tighter'>{title}</h1>
    <p className='pt-[48px] text-[#221F20;] font-[400] pt-[16px]  max-w-[1216px] mx-auto   '>{discription}</p>
   </div>
    </div>
 
   
  )
}

export default index