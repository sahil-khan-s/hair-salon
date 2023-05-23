import React from 'react'

const index = ({cardData }) => {
  return (
    <div className='container md:max-w-container px-4 xl:px-[112px] pt-[32px] mx-auto '>
 <h1 className='text-center text-[48px] font-[300]'>Our Work</h1>
 <div className='card-container grid justify-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[48px]'>
        {cardData.map((card, index) => (
          <div className="card flex flex-col justify-center items-center" key={index}>
            <img src={card.image} alt="Card Image" width={268} height={200}  className='pt-[48px]'/>
            <p className='text-center font-[300] pt-[24px]'>{card.text}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default index