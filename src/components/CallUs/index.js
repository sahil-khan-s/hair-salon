import React from "react";

const index = ({
     title, 
     discription, 
     btnText ,
    image,
    powerText,
    icon1,
    icon2,
    icon3,
    icon4,
    licence,
    mail,
    location,
    phone,
    servingSan,
    ServingSanDisc1,
    ServingSanDisc2,
}) => {
  return (
    <div className="  ">
      <div className="flex justify-center sm:py-[96px]">
        <div>
          <h1 className="text-center text-[48px] font-[300]">{title}</h1>
          <p className="text-center text-[24px] font-[700] pt-[14px]">
            {discription}
          </p>
          <div className="flex justify-center">
            <button className=" mt-[32px] font-[600] text-[#FEFDFD] bg-[#00205B] py-[16px] px-[32px] rounded-[4px]">
              {btnText}
            </button>
          </div>
        </div>
      </div>
      <div className="container md:max-w-container px-4 lg:px-[112px] sm:py-[64px]  mx-auto">
      <div className="flex lg:flex-nowrap flex-wrap justify-center gap-[64px]">
         <div className="sm:pt-12 ">
            <div className="w-[213px]">
          <img src={image} alt="" className="w-[212px] h-[128px]" />

            </div>
          <h1 className="text-center font-[600] pt-[16px]">{powerText}</h1>
         </div>
         <div className="sm:pt-12 ">
            <div className="flex gap-[8px] text-[#00205B] pt-[5px]">
                <img src={icon1} alt="" className="w-[24px] h-[24px]" />
                <span className=" font-[400]">{licence}</span>
            </div>
            <div className="flex gap-[8px] text-[#00205B] pt-[16px]">
                <img src={icon2} alt="" className="w-[24px] h-[24px]" />
                <span className=" font-[400]">{mail}</span>
            </div>
            <div className="flex gap-[8px] text-[#00205B] pt-[16px]">
                <img src={icon3} alt="" className="w-[24px] h-[24px]" />
                <span className="xl:w-[291px] font-[400]">{location}</span>
            </div>
            <div className="flex gap-[8px] text-[#00205B] pt-[16px]">
                <img src={icon4} alt="" className="w-[24px] h-[24px]" />
                <span className=" font-[400]">{phone}</span>
            </div>
         </div>
         <div className="max-w-[520px]">
             <h1 className="font-[700] text-[#221F20;] text-[24px]">{servingSan}</h1>
             <p className="font-[400] pt-[16px]">{ServingSanDisc1}</p>
             <p className="font-[400] pt-[16px]" >{ServingSanDisc2}</p>
         </div>
      </div>
      </div>
    </div>
  );
};

export default index;
