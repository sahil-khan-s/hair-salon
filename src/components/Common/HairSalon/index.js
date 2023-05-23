import React from 'react'
const index = ({
    title,
    discription,
    discription2,
    discription3,
    image,
    imageStyle,
}) => {
  return (
    <div>
         <div className="flex flex-wrap xl:flex-nowrap px-4 xl:px-[112px] justify-center gap-[32px]">
          <div className="w-[100%] grid  md:grid-cols-2 items-center justify-center gap-[32px]">
          <div className="  ">
            <img 
            style={imageStyle}
              src={image}
              alt="none"
              className="lg:w-[592px] w-[500px] mx-auto lg:h-[480px] "
            />
          </div>
          <div className="">
            <h1 className="text-[30px] text-center md:text-start sm:text-[48px] font-[300] text-[#221F20]  leading-[125%] ">
              {title}
            </h1>
            <p className=" text-[#221F20;]  pt-[16px] text-[16px] 2xl:text-[20px]  ">
              {discription}
            </p>
            <p className=" text-[#221F20;] pt-[16px]  text-[16px] 2xl:text-[20px]  ">
              {discription2}
            </p>
            <p className=" text-[#221F20;] pt-[16px]  text-[16px] 2xl:text-[20px]">
              {discription3}
            </p>
          </div>

          </div>
        </div> 
    </div>
  )
}

export default index