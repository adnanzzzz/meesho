import React, { useContext } from 'react'
import { Commoncontext } from './context/Context.jsx'
import CartCard from './CartCard.jsx'


export default function Cart() {
    let { cartitems, deleteCart, addToWishlist, userlogedin } = useContext(Commoncontext)



    return (
        // <div>
        //     <div className="flex  items-center justify-center py-8">
        //         {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}
        //         <button onclick="checkoutHandler(false)" className="py-2 px-10 rounded bg-indigo-600 hover:bg-indigo-700 text-white">Open Modal</button>
        //     </div>
        //     <div className="w-full h-full bg-black dark:bg-gray-900 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
        //         {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}
        //         <div className="w-full pt-[150px] absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
        //             <div className="flex items-end  laptop:flex-row flex-col justify-evenly" id="cart">
        //                 <div className="laptop:w-1/2 tablet:w-8/12 w-full laptop:px-8 laptop:py-14 tablet:px-6 px-4 tablet:py-8 py-4 bg-white dark:bg-gray-800  overflow-x-hidden laptop:h-screen h-auto" id="scroll">
        //                     <div className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer" onclick="checkoutHandler(false)">
        //                         <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        //                             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        //                             <polyline points="15 6 9 12 15 18" />
        //                         </svg>
        //                         <p className="text-largemob pl-2 leading-none dark:hover:text-gray-200">Back</p>
        //                     </div>
        //                     <p className="laptop:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">Cart</p>
        //-----------------------------------------------------------------
        //                     {
        //                         cartitems.map((v, i) => {
        //                             return (
        //                                 <div className="tablet:flex items-strech py-8  relative tablet:py-10 laptop:py-8 border-t border-gray-50">
        //                                     <div onClick={() => deleteCart(v.id)} className='absolute text-[30px] right-0 top-0 text-white'><button >delete</button></div>
        //                                     <div className="tablet:w-4/12 2xl:w-1/4 w-full">
        //                                         <img src={v.image} alt="Black Leather Bag" className="h-full object-center object-cover tablet:block hidden" />
        //                                         <img src="https://i.ibb.co/g9xsdCM/Rectangle-37.pngg" alt="Black Leather Bag" className="tablet:hidden w-full h-full object-center object-cover" />
        //                                     </div>
        //                                     <div className="tablet:pl-3 tablet:w-8/12 2xl:w-3/4 flex flex-col justify-center">

        //                                         <p className="text-xs leading-3 text-gray-800 dark:text-white tablet:pt-0 pt-4">{i + 1}</p>
        //                                         <div className="flex items-center justify-between w-full pt-1">
        //                                             <p className="text-base font-black leading-none text-gray-800 dark:text-white">North wolf bag</p>
        //                                             <select aria-label="Select quantity" className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
        //                                                 <option>01</option>
        //                                                 <option>02</option>
        //                                                 <option>03</option>
        //                                                 <option>04</option>
        //                                                 <option>05</option>
        //                                             </select>
        //                                         </div>
        //                                         <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">Height: 10 inches</p>
        //                                         <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">Color: Black</p>
        //                                         <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">Composition: 100% calf leather</p>
        //                                         <div className="flex items-center justify-between pt-5">
        //                                             <div className="flex itemms-center">
        //                                                 <div >
        //                                                     <p className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer" onClick={() => addToWishlist(v)} > <span >Add to favorites</span></p></div>
        //                                                 <p className="text-xs underline text-red-500 pl-5 cursor-pointer" >Remove</p>
        //                                             </div>
        //                                             <p className="text-base font-black leading-none text-gray-800 dark:text-white">{v.price * v.qty}</p>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             )
        //                         })
        //                     }

            //--------------------------------------------------------------------------------

        //                 </div>
        //                 <div className="laptop:w-96 tablet:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full">
        //                     <div className="flex flex-col laptop:h-screen bg-[#F3F4F6] h-auto laptop:px-8 tablet:px-7 px-4 laptop:py-20 tablet:py-10 py-6 justify-between overflow-y-auto">
        //                         <div>
        //                             <p className="laptop:text-4xl text-3xl font-black leading-9 text-gray-800 ">Summary</p>
        //                             <div className="flex items-center justify-between pt-16">
        //                                 <p className="text-base leading-none text-gray-800 ">Subtotal</p>
        //                                 <p className="text-base leading-none text-gray-800 ">,000</p>
        //                             </div>
        //                             <div className="flex items-center justify-between pt-5">
        //                                 <p className="text-base leading-none text-gray-800 ">Shipping</p>
        //                                 <p className="text-base leading-none text-gray-800 "></p>
        //                             </div>
        //                             <div className="flex items-center justify-between pt-5">
        //                                 <p className="text-base leading-none text-gray-800 ">Tax</p>
        //                                 <p className="text-base leading-none text-gray-800 "></p>
        //                             </div>
        //                         </div>
        //                         <div>
        //                             <div className="flex items-center pb-6 justify-between laptop:pt-5 pt-20">
        //                                 <p className="text-2xl leading-normal text-gray-800 ">Total</p>
        //                                 <p className="text-2xl font-bold leading-normal text-right text-gray-800 ">,240</p>
        //                             </div>
        //                             <button onclick="checkoutHandler1(true)" className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white ">Checkout</button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // </div>
        <div class="font-sans max-w-4xl max-tablet:max-w-xl mx-auto p-4">
            <h1 class="text-2xl font-extrabold text-gray-800">Your Cart</h1>
            <div class="grid tablet:grid-cols-3 gap-4 mt-8">
                <div class="tablet:col-span-2 space-y-4">
                    {
                        cartitems.map((v,i)=>{
                            return(
                                <CartCard deleteCart={deleteCart} v={v}/>
                            )
                        })
                    }
                    </div>

                <div class="bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
                    <ul class="text-gray-800 space-y-4">
                        <li class="flex flex-wrap gap-4 text-sm">Subtotal <span class="ml-auto font-bold">$200.00</span></li>
                        <li class="flex flex-wrap gap-4 text-sm">Shipping <span class="ml-auto font-bold">$2.00</span></li>
                        <li class="flex flex-wrap gap-4 text-sm">Tax <span class="ml-auto font-bold">$4.00</span></li>
                        <hr class="border-gray-300" />
                        <li class="flex flex-wrap gap-4 text-sm font-bold">Total <span class="ml-auto">$206.00</span></li>
                    </ul>

                    <div class="mt-8 space-y-2">
                        <button type="button" class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md">Buy Now</button>
                        <button type="button" class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md">Continue Shopping  </button>
                    </div>

                    <div class="mt-4 flex flex-wrap justify-center gap-4">
                        <img src='https://readymadeui.com/images/master.webp' alt="card1" class="w-10 object-contain" />
                        <img src='https://readymadeui.com/images/visa.webp' alt="card2" class="w-10 object-contain" />
                        <img src='https://readymadeui.com/images/american-express.webp' alt="card3" class="w-10 object-contain" />
                    </div>
                </div>
            </div>
        </div>




    )
}

