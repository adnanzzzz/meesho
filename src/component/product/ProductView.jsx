import React, { useContext, useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { RxDoubleArrowRight } from "react-icons/rx";
import { Commoncontext } from '../context/Context.jsx';
import { BsCart2 } from "react-icons/bs";
import Productcard from './Productcard.jsx';
import axios, { all } from 'axios';
import lowestprice from '../../assets/images/lowest_price_new.png'
import cashondelivery from '../../assets/images/cod_new.png'
import returndel from '../../assets/images/return_new.png'
import { useParams } from 'react-router-dom';
export default function ProductView() {

  let [ProductViewData, setProductViewData] = useState([])
  let [imagess, setimages] = useState([])
  let [reviews,setreviews]=useState()
  // let [imagemul,setimagemul]= useState([])
  let [products, setproducts] = useState([])
  let [similarproduct, setsimilarproduct] = useState([])
  let [displayimg, setdisplayimg] = useState('')

  // --------------------------------------------------------------------------------------------------------------------------------------->>>
  const params = useParams()
  useEffect(() => {
    axios.get(`https://wscubetech.co/ecommerce-api/productdetalis.php?id=${params.id}`)
      .then(function (response) {
        // handle succes
        // console.log(response.data.product)
        setProductViewData(response.data.product);
        // console.log(ProductViewData.map)
        setimages(response.data.product.multiple_images)
        setreviews(response.data.product.reviews)
        // console.log(response.data.reviews)
        // setimagemul(ProductViewData.images)



      })
      .catch(function (error) {
        // handle error
        // alert("error")
        console.log(error);
      })
  }, [imagess])


  let showimg = (e) => {
    setdisplayimg(e)
  }
  useEffect(() => {
    
console.log(ProductViewData)
    axios.get(`https://wscubetech.co/ecommerce-api/products.php?limit=28`)

      .then(function (response) {
        // handle succes
        // console.log(response.data.data)
        setproducts(response.data.data);

        // settotalpages(response.data.toal_pages)

        // setLoader(false)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }, [])
  useEffect(()=>{
    let allData= products.filter((v,i)=>{
      let vcat= v.category_name.trim();
     if(vcat==ProductViewData.category.trim()){
      return v;
     } 
    })
    console.log(allData)
    setsimilarproduct(allData)

  },[])


  
  
  return (
    <>
      <div className='w-[100%]'>
        <div className='max-w-[1330px] mx-auto py-5  gap-3 tablet:flex'>
          <div className='tablet:basis-[49%] flex   ' >
            <div className='basis-[11%] largemob:block hidden'>
              {
                imagess.map((v, i) => {
                  return (
                    <div className={`w-[56px] flex items-center mt-3 rounded h-[60px] ${(v == displayimg) ? 'border-[1px] border-[#C53EAD]' : ''}`} key={i}>

                      <img src={v} height='100%' onClick={() => showimg(v)} alt="" />
                    </div>
                  )
                })
              }
            </div>
            <div className='tablet:basis-[86%]  basis-[100%] '>
              <div className='border flex items-center justify-center rounded-md '>
                <img className='largemob:h-[472px]' src={(displayimg == '') ? ProductViewData.image : displayimg} alt="" />
              </div>
              <div className='flex  justify-evenly largemob:hidden'>
              {
                imagess.map((v, i) => {
                  return (
                    <div className={`w-[56px] flex items-center mt-3 rounded h-[60px] ${(v == displayimg) ? 'border-[1px] border-[#C53EAD]' : ''}`} key={i}>

                      <img src={v} height='100%' onClick={() => showimg(v)} alt="" />
                    </div>
                  )
                })
              }

              </div>
              <div className='border-b-[1px] border-[gray] py-8 flex justify-evenly'>
                <button className='w-[46%] rounded justify-center border-[#9F2089] text-[#9F2089] gap-2 py-[10px] flex text-[18px] font-semibold  border text-center'>
                  <BsCart2 className='text-[19px] mt-[1px]' />
                  <div>Add to Cart</div>
                </button>
                <button className='w-[46%] border rounded justify-center border-[#9F2089] text-[white] bg-[#9F2089] gap-2 py-[10px] flex text-[18px] font-semibold   text-center'>
                  <RxDoubleArrowRight className='text-[23px] mt-[1px]' />
                  Buy now</button>

              </div>

            </div>

          </div>

          <div className='tablet:basis-[49%] rounded-md ' >
            <div className='py-[15px] px-[10px] rounded-md border   '>
              <h3 className='font-semibold text-[19px] text-[#8B8BA3]'>
                {
                  ProductViewData.name
                }
              </h3>
              <div className='flex items-center'>
                <div className='flex items-center'>
                  <FaIndianRupeeSign className="text-[25px] " /> <span className="text-[32px] font-medium">{ProductViewData.price}</span>
                </div>

                {/* ------------------------------------------------------------------------------------->>>>>>>>>>>>>>> */}
                <div className="line-through flex items-center font-medium text-[#8B8BA3] px-2">
                  {/* Discounted Price / (1 - (Discount Percentage / 100)) */}
                  <FaIndianRupeeSign className="text-[14px] mt-1 line-through " />
                  {
                    Math.floor(1 + ProductViewData.price / (1 - (ProductViewData.discount_percentage / 100)))

                  }
                </div>

                {/* ------------------------------------------------------------------------------------->>>>>>>>>>>>>>> */}
                <div className="text-[green] text-[18px] font-semibold">
                  {ProductViewData.discount_percentage}% off
                </div>
                {/* ---------------------------------------------------------------------------------------------------------->>>>>>>> */}


              </div>

              <div className='p-0 m-0 bg-[#038D63] pb-1 items-center my-3 justify-center w-14 rounded-2xl text-white font-medium flex mb-4' >{ProductViewData.rating}.0 <FaStar className="text-[10px] ml-1" /></div>
              <div>
                <div className='flex items-center justify-center rounded-full text-[rgb(97,97,115)] text-[12px] font-semibold w-[92px] py-[3px] bg-[#F8F8FF] text-center'>
                  <p>Free Delivery</p>

                </div>
              </div>
            </div>




            <div className='mt-5 py-[15px] px-[10px] rounded-md border '>
              <h3 className='text-[19px] font-medium'>Product Details</h3>
              <div className='text-[rgb(97,97,115)] font-medium' >
                <p>Name :&nbsp;
                  {
                    ProductViewData.name
                  }
                </p>
                <p>Brand :&nbsp;
                  {
                    ProductViewData.brand
                  }
                </p>
                <p>Warrenty :&nbsp;
                  {
                    ProductViewData.warrantyInformation
                  }

                </p>
                <p>Shipping :&nbsp;
                  {
                    ProductViewData.shippingInformation
                  }
                </p>
                <p>
                  Stock Status :&nbsp;
                  {
                    ProductViewData.stock
                  }
                </p>
                <p>
                  Return Policy : &nbsp;
                  {
                    ProductViewData.returnPolicy
                  }
                </p>
                <p>Description :  &nbsp;
                  {
                    ProductViewData.description
                  }

                </p>
              </div>

            </div>
            <div className='mt-5 py-[8px] px-[10px] flex bg-[#E7EEFF] rounded-md border '>
                <div className='flex-grow-[1]'>
                  <div className='bg-white w-10 rounded-full  py-1  mx-auto'><img src={lowestprice} width='40px' alt="" />
                  </div>
                  <p className='text-[12px] font-semibold text-center'>Lowest Price</p>


                </div>
                <div className='flex-grow-[1]'>
                <div className='bg-white w-10 rounded-full  py-1  mx-auto'><img src={cashondelivery} width='40px' alt="" /></div>
                <p className='text-[12px] font-semibold text-center'>Cash on Delivery</p>
                  
                </div>
                <div className='flex-grow-[1]'>
                <div className='bg-white w-10 rounded-full py-1 mx-auto'><img src={returndel} width='40px' alt="" /></div>
                <p className='text-[12px] font-semibold text-center'>7-day Returns</p>
                  
                </div>
            </div>
            <div className='mt-5 py-[8px] px-[10px]  bg-[white] rounded-md border '>
                  <p>
                  Product Ratings & Reviews
                  </p>
                 {

                  // reviews.map((v,i)=>{
                  //   return (
                  //     <div>{v}</div>
                  //   )
                  // })
                 }

            </div>



          </div>
        </div>
        <div className='max-w-[1330px] py-3  mx-auto'>
          <h3 className='font-bold text-[30px] '>Related Product</h3>
        </div>
        <div className='max-w-[1330px] tablet:justify-normal justify-center flex gap-5 flex-wrap  py-3 mx-auto'>

          {
            similarproduct.map((v, i) => {
              return (
                <Productcard v={v} key={i}/>
              )
            })
          }
        </div>


      </div>
    </>

  )
}
