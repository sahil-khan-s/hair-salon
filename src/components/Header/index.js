import React from "react";
const Header = ({
  headerData,
  text,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  callIcon,
  phone,
  btnText,
  title,
  discription,
  discription2,
  discription3,
  image,
}) => {
  return (
    <div className=" ">
      <div className="bg-[#AE7029] ">
        <div className="container md:max-w-container px-4 lg:px-[112px]  mx-auto min-h-[37px] ">
          <div>
            <p className="text-[#FEFDFD] pt-[6px] font-[14px] 2xl:font-[17px] font-thin text-center">
              Shop all your favorite products and gift cards 24/7 on our online
              store!
            </p>
          </div>
        </div>
      </div>
      <div className="background">
        <div className="container xl:max-w-container px-4 lg:px-[112px]  mx-auto">
          <div className="flex justify-between py-[55px]">
            <div className="grid lg:grid-cols-2 gap-[16px] items-baseline">
              <div>
                <h1 className="text-[#AE7029] font-[400] text-[14px] 2xl:text-[17px]">
                  {text}
                </h1>
              </div>
              <div className="flex gap-[8px] ">
                <img
                  src={icon1}
                  alt="none"
                  className="h-[16px] w-[16px] 2xl:h-[20px] 2xl:w-[20px]"
                />
                <img
                  src={icon2}
                  alt="none"
                  className="h-[16px] w-[16px] 2xl:h-[20px] 2xl:w-[20px]"
                />
                <img
                  src={icon3}
                  alt="none"
                  className="h-[16px] w-[16px] 2xl:h-[20px] 2xl:w-[20px]"
                />
                <img
                  src={icon4}
                  alt="none"
                  className="h-[16px] w-[16px] 2xl:h-[20px] 2xl:w-[20px]"
                />
                <img
                  src={icon5}
                  alt="none"
                  className="h-[16px] w-[16px] 2xl:h-[20px] 2xl:w-[20px]"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-[24px] ">
              <div className="flex max-w-[130px] 2xl:max-w-[200px] gap-[4px] lg:mt-4 ">
                <img
                  src={callIcon}
                  alt="none"
                  className="h-[16px] mt-1 w-[16px] 2xl:h-[20px] 2xl:w-[20px]"
                />
                <span className="text-[#AE7029] text-[14px]  2xl:text-[17px] font-[600]">
                  {phone}
                </span>
              </div>
              <div>
                <button className="py-[12px] px-[24px] font-[600] border border-[#AE7029] rounded-[4px] text-[#AE7029]">
                  {btnText}
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <img
                src={headerData.imageUrl}
                alt="Logo"
                className="w-[322px] mt-[16px] h-[90px]"
              />
            </div>
            <div className="pt-8 pb-[96px]">
              <div className="flex flex-wrap justify-center  gap-[48px] text-[#AE7029]">
                {headerData.texts.map((text, index) => (
                  <h1 key={index} className="text-[#AE7029] font-bold">
                    {text}
                  </h1>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap xl:flex-nowrap px-[112px] justify-center gap-[32px]">
          <div className="  ">
            <img
              src={image}
              alt="none"
              className="w-[592px] h-[480px] max-w-[592px]"
            />
          </div>
          <div className="">
            <h1 className="text-[48px] font-[300] text-[#221F20]  leading-[125%] ">
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
  );
};

export default Header;
