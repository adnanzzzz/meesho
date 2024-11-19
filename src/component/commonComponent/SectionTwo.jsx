import React from 'react'
import sectintowimg from '../../assets/images/section2.webp'
import playstore from '../../assets/images/playstoreSmallIcon.png'
export default function SectionTwo() {
  return (
    <>
      <section className='w-[100%]'>
        <div className='max-w-[1150px] flex  bg-[brown] mx-auto' >
          <div className=' w-[52%] pt-10 py-5 bg-[#F8F8FF] px-10'>
            <p className='text-5xl  font-semibold'>Lowest Prices</p>
            <p className='text-5xl font-semibold'>Best Ouality Shopping</p>
            <div className='rounded-xl w-[100%] p-5 bg-[white] my-8'></div>
            <div className='bg-[#9F2089] flex gap-3 items-center w-[330px] py-3 px-6'> <img src={playstore} alt="" />
              <span className='capitalize text-[18px] text-white'>downlaod the meesho app</span>
            </div>
          </div>
          <div className='  w-[48%] '>
            <img src={sectintowimg} width='100%' alt="" />
          </div>
        </div>

      </section>
    </>
  )
}
