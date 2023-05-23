import React from "react";
const index = ({
    title,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
    sundayTime,
    saturdayTime,
    time,
    image,
    coments,
    discription,
    name,
}) => {
  return (
    <div className=" ">
      <div className=" ">
        <div className="container md:max-w-container px-4 xl:px-[112px] pt-[32px] mx-auto  ">
          <div className="w-[100%] grid  md:grid-cols-2 items-center justify-center gap-[32px]">
            <div>
            <h1 className="text-[36px] font-[300] text-center pt-[83px]  text-[#221F20]">{title}</h1>
            <div className="flex gap-[32px] pt-[32px] pb-[24px] justify-center  ">
                <span className="text-[20px] font-[600] text-[#221F20] ">{monday}</span><span className="text-[#221F20] text-[#221F20] text-[20px] font-[400]">{time}</span>
            </div>
            <div  className="flex gap-[32px] pb-[24px] justify-center">
                <span className="text-[20px] font-[600] text-[#221F20]">{tuesday}</span><span className="text-[#221F20] text-[20px] font-[400]">{time}</span>
            </div>
            <div   className="flex gap-[32px] pb-[24px] justify-center">
                <span className="text-[20px] font-[600] text-[#221F20]">{wednesday}</span><span className="text-[#221F20] text-[20px] font-[400]">{time}</span>
            </div>
            <div   className="flex gap-[32px] pb-[24px] justify-center">
                <span className="text-[20px] font-[600] text-[#221F20]">{thursday}</span><span className="text-[#221F20] text-[20px] font-[400]">{time}</span>
            </div>
            <div   className="flex gap-[32px] pb-[24px]  justify-center">
                <span className="text-[20px] font-[600] text-[#221F20]">{friday}</span><span className="text-[#221F20] text-[20px] font-[400]">{time}</span>
            </div>
            <div   className="flex gap-[32px] pb-[24px] justify-center">
                <span className="text-[20px] font-[600] text-[#221F20]">{saturday}</span><span className="text-[#221F20] text-[20px] font-[400]">{saturdayTime}</span>
            </div >
            <div   className="flex gap-[32px] pb-[24px] justify-center">
                <span className="text-[20px] font-[600] text-[#221F20]">{sunday}</span><span className="text-[#221F20] text-[20px] font-[400]">{sundayTime}</span>
            </div>
            </div>
            
            <div>
                <img src={image} alt="none" className="w-[592px] xl:h-[597px]" />
            </div>
          </div>

    

        </div>
        <div className="bg-[#ECEBE6]">
            <div className="max-w-[1056px] mx-auto pt-[96px] pb-[136px]">
            <h1 className="text-center text-[#221F20] pb-[16px] text-[36px] font-[700]">{coments}</h1>
        <p className="text-center text-[#221F20] pb-[16px]  text-[20px] font-[400]">{discription}</p>
        <p className="text-center text-[#221F20] font-[600] text-[14px] 2xl:text-[17px]">{name}</p>
   
            </div>
         </div>
      </div>
    </div>
  );
};

export default index;
