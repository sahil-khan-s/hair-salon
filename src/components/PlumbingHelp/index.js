import React from 'react'

const index = ({ title, discription , cards , discription2, image , image2}) => {
  return (
<div className='container md:max-w-container px-4 lg:px-[112px] py-[96px] mx-auto '>
    <div>
    <h1 className='text-[48px] text-[#221F20;] font-[300] leading-[125%] text-center tracking-tighter'>{title}</h1>
    <p className='pt-[48px] text-[#221F20;] font-[400] pt-[16px]  max-w-[1216px] mx-auto   '>{discription}</p>
  
    </div>
    <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-y-[48px] max-w-[1216px] mx-auto pt-[48px]'>
        {cards.map((card) => (
          <div key={card.id} className=''>
            <div className='flex justify-center'>
            <img src={card.image} alt="" className='w-[64px] h-[64px] ' />
            </div>
            <div className='flex justify-center'>
            <p className='font-[600] pt-[8px] text-[24px] text-[#221F20] '>{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center pt-[70px] md:pt-[128px]'>
        <div>
        <h1 className='text-[36px] text-center pb-[32px] font-[300]'>{discription2}</h1>
    <div className='flex flex-col sm:flex-row items-center gap-[48px] '>
        <img src={image} alt=""  className='md:w-[350px] w-[250px] h-[120px]'/>
        <img src={image2} alt="" className='md:w-[350px] w-[250px] h-[120px]' />
    </div>
        </div>
      </div>

    </div>
 
   
  )
}

export default index