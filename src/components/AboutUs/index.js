import React from 'react'

const index = ({
    title,
 discription,
 text1,
 text2,
 text3,
 text4,
 text5,
 text6,
 text7,
 text8,
 image,
 location,
 locationIcon,
 callIcon,
 phone,
 map
}) => {
  return (
    <div className='container py-[32px] md:max-w-container px-4 lg:px-[112px]  mx-auto'>
      <div className="grid md:grid-cols-2 gap-[32px]">
        <div>
         <h1 className='text-[36px] text-[#221F20]  font-[300]'>{title}</h1>
<p className='font-[400] pt-[32px ] text-[#221F20] pb-[24px]'>{discription}</p>
<div className='grid grid-cols-2'>
   <div>
    <h1 className='text-[#AE7029] font-[400]'>{text1}</h1>
    <h1 className='text-[#AE7029] pt-[16px] font-[400]'>{text2}</h1>
    <h1 className='text-[#AE7029] pt-[16px] font-[400]'>{text3}</h1>
    <h1 className='text-[#AE7029] pt-[16px] font-[400]'>{text4}</h1>
    </div> 
   <div>
    <h1 className='text-[#AE7029] font-[400]'>{text5}</h1>
    <h1 className='text-[#AE7029] pt-[16px] font-[400]'>{text6}</h1>
    <h1 className='text-[#AE7029] pt-[16px] font-[400]'>{text7}</h1>
    <h1 className='text-[#AE7029] pt-[16px] font-[400]'>{text8}</h1>
    </div> 
</div>

        </div>
        <div>
             <img src={image} alt="" width={592} height={197} />
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
       <div className='py-[32px]'>
        <img src={map} alt="" width={1216} height={480}  className='mx-auto'/>
       </div>

    </div>
  )
}

export default index