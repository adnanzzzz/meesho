import { useContext, useEffect, useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
// import { Commoncontext } from "../context/context";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Commoncontext } from "../context/Context.jsx";

export default function Productcard({ v, addtocart }) {
  let { heart, wish, setheart, cartitems } = useContext(Commoncontext)
  // console.log(v.multiple_images)
  var checkwishin = [];
  
  if(wish!=undefined){
  // console.log(wish)
  checkwishin = wish.filter((items) => items.id == v.id)
  }
  // useEffect(()=>{
  //   console.log('check wish',checkwishin)
  // },[])
  // let checkcartin = cartitems.filter((items)=> items.id==v.id)
  //
  return (
    <>
      <div className="laptop:w-[220px] smallmob:w-[50%] border largemob:mt-6 p-3 largemob:rounded-lg ">
        <div className="w-[100%] relative">
          <Link to={`/ProductView/${v.id}`} >
            <img className='rounded-t-lg' src={v.image} />
          </Link>
          {
            (checkwishin=='')
              ?
              <div className="absolute top-1 right-1 bg-[white] p-2 rounded-full text-[black]"> 
              <IoIosHeartEmpty className={` `} onClick={() => setheart(v)} />
              </div>
              :
              <div className="absolute  top-1 right-1 bg-[white] p-2 rounded-full text-[red] "> 
              <IoMdHeart className={``} onClick={() => setheart(v)} />
              </div>
          }
        </div>
        <div className="overflow-hidden "><h5 className="text-[#8B8BA3] largemob:text-[16px] text-[10px] font-medium">{v.name}</h5></div>
        <div className="flex items-center ">
          <p className='p-0  flex items-center m-0'><FaIndianRupeeSign className="largemob:text-[20px] text-[12px] " /> 
          <span className="largemob:text-[24px] text-[15px] font-bold">
            {v.price}
            </span>
            </p>
          <div className="line-through largemob:text-[16px] text-[11px] flex items-center font-medium text-[#8B8BA3] px-2">
            {/* Discounted Price / (1 - (Discount Percentage / 100)) */}
            <FaIndianRupeeSign className="largemob:text-[14px] text-[9px] largemob:mt-1 line-through " />
            {
              Math.floor(v.price / (1 - (v.discount_percentage / 100)))

            }
          </div>
          <div className="text-[green] largemob:text-[16px] text-[11px]  font-semibold">
            {v.discount_percentage}% off
          </div>
        </div>
        <div className='p-0 m-0 bg-[#038D63] pb-1 largemob:text-[16px] text-[13px] items-center my-3 justify-center w-14 rounded-2xl text-white font-medium flex mb-4' >{v.rating}.0 <FaStar className="largemob:text-[10px] text-[12px] ml-1" /></div>
        {/* <p>Discount : {v.discount_percentage}</p> */}
        <div className="pb-2">
          <div className='flex items-center justify-center rounded-full text-[rgb(97,97,115)] largemob:text-[12px] text-[10px] font-semibold w-[92px] py-[3px] bg-[#F8F8FF] text-center'>
            <p>Free Delivery</p>

          </div>
        </div>
        <button onClick={() => addtocart(v)} type="submit" className="rounded-md w-[100%] my-1 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add To Cart</button>
      </div>
    </>
  )
}
