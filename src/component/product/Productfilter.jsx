import React from 'react'
import { useContext } from 'react'
import Productcard from './Productcard'
import { Commoncontext } from '../context/Context.jsx'
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
export default function Productfilter({ products, setclears, clear, mobilemenu, setmobilemenu, sort, totalpages, setSORT, pagecount, setpagecount }) {
  // console.log(sort)
  // let gg=()=>{
  //     setclears(!clear)
  // }\
  let { addtocart } = useContext(Commoncontext)
  let openmenu = () => [
    setmobilemenu(true)
  ]
  let next = () => {
    pagecount++;
    console.log(pagecount)
    setpagecount(pagecount)
    // console.log(totalpages)
  }
  let previous = () => {
    pagecount--;
    console.log(pagecount)
    setpagecount(pagecount)
  }
  return (
    <>
      <div className=" laptop:basis-[70%]  ">
        <div className='flex pt-6 items-end '>
          <div>
            <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
              <span className="sr-only">View grid</span>
              <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clipRule="evenodd" />
              </svg>
            </button>
            <button type="button" onClick={() => openmenu()} className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 smallmob:ml-6 laptop:hidden">
              <span className="sr-only">Filters</span>
              <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex w-[100%] items-baseline justify-end border-b border-gray-200 pt-5 pb-20 ">
          {/* <div className="d-flex justify-content-between border-bottom align-items-center">
                    <h2 className="title">Clear All</h2>
                    <div className="filters-actions">
                        <div>
                            <button className="btn filter-btn d-md-none"><svg xmlns="http://www.w3.org/2000/svg" className="mr-2" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" /></svg>
                                Filter</button>
                        </div>
                        <div className="d-flex align-items-center">


                            <label for="cars">Choose a car : </label>
                            <select onChange={(a) => {
                                setSORT(a.target.value)


                            }} name="cars" id="cars">
                                <option value="soting">soring </option>
                                <option value="1">Accending</option>
                                <option value="2">Decending</option>
                                <option value="3">Price Low to high</option>
                                <option value="4">Price high to Low</option>
                                <option value="5"> Discounted Price Low to high</option>
                                <option value="6">Discounted Price high to Low</option>
                                <option value="7">Rating Low to high</option>
                                <option value="8">Rating high to Low</option>
                            </select>
                        </div>
                    </div>
                </div> */}

          <div className="flex justify-center gap-5 flex-wrap">
            {
              products.map((v, i) => {
                // aa(v)
                return (
                  <Productcard v={v} addtocart={addtocart} key={i} />
                )
              })
            }

            {/* /<!--col-end-->       */}
          </div>
          <br />
          <br />
          <hr />
        </div>
        <div className='mx-auto max-w-[500px] items-center justify-between py-7 flex '>
          <div className='flex font-medium'> <MdOutlineKeyboardDoubleArrowLeft className='text-[23px] mt-[1px]' /> Page <span>{pagecount}</span></div>
          <button className='rounded font-medium  pt-2 border border-[#E5E6E8] pl-2 pr-4 pb-1 flex items-center ' onClick={previous} disabled={pagecount === 1} ><MdOutlineKeyboardArrowLeft className='text-[23px] mt-1 ' />Previous</button>
          <div className='px-5 text-[14px]'>  page <span>{pagecount}</span> of {totalpages}  </div>
          <button className='rounded pl-4 pr-2 pb-1 pt-2 flex items-center font-medium  border border-[#E5E6E8]' onClick={next} disabled={pagecount === totalpages}
          >Next <MdOutlineKeyboardArrowRight className='text-[23px] mt-1 ' /> </button>
        </div>
        {/* <div class="flex items-center"> */}
        {/* <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            --> */}
        {/* <div class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"> */}
        {/* <div class="py-1" role="none"> */}
        {/* <!--
                  Active: "bg-gray-100", Not Active: ""

                  Selected: "font-medium text-gray-900", Not Selected: "text-gray-500"
                --> */}
        {/* <a href="#" class="block px-4 py-2 text-sm font-medium text-gray-900" role="menuitem" tabindex="-1" id="menu-item-0">Most Popular</a>
                      <a href="#" class="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabindex="-1" id="menu-item-1">Best Rating</a>
                      <a href="#" class="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabindex="-1" id="menu-item-2">Newest</a>
                      <a href="#" class="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabindex="-1" id="menu-item-3">Price: Low to High</a>
                      <a href="#" class="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabindex="-1" id="menu-item-4">Price: High to Low</a>
                    </div> */}
        {/* </div> */}
        {/* </div> */}


        {/* </div> */}
      </div>
      {/* <div className='flex'>
                  <!-- Your content -->
                <div>sdlkfdfjvb</div>
                <div>dfnoldkvpv</div>
                <div>cvkdjv;fhv</div>
                </div>
                </div> */}
    </>
  )
}
