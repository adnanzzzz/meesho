import React, { useState } from 'react'

export default function Filterproductsidebar({ Categories,
  // setbrand,
  brand,
  cat,
  setcat,
  setFilter,
  settrueprice,
  setprice,
  filter,
  setLoader,
  SETBRAND,
  BRAND,
  filbrand,
  setfilbrand,
  setdiscount,
  setSORT,
  setrating,
  mobilemenu, setmobilemenu }) {

  // b is a function that store a slug of brand------------------------------------------------------------>>>>>
  let b = (slug) => {
    console.log(slug)
    if (BRAND.includes(slug)) {
      var category = BRAND.filter((v, i) => {
        if (v != slug) {
          return v;
        }
      })
      console.log(category)
      SETBRAND(category)
    }
    else {
      BRAND.push(slug)
      // SETBRAND(BRAND)
    }
    console.log(BRAND)
    setfilbrand(!filbrand);
  }
  // cc is a function that store a slug of product------------------------------------------------------------>>>>>
  let cc = (slug) => {
    ///if cat contain same slug that cc function have ---------------------------------------------------------->>>>
    if (cat.includes(slug)) {
      var category = cat.filter((v, i) => {
        // if cat not have slug------------------------------------------------------------->>>>>>
        if (v != slug) {
          return v; //value store in category variable 
        }
      })
      console.log(category)
      setcat(category)
    }
    else {
      cat.push(slug)
      setcat(cat)
    }
    setFilter(!filter);

    setLoader(true);

  }
  let pricerange = (c) => {
    console.log(c.target.value)
    if (c.target.value == '1') {
      let a = [10, 250];
      setprice(a)
    }
    else if (c.target.value == '2') {
      let a = [250, 500];
      setprice(a)
    }
    else if (c.target.value == '3') {
      let a = [500, 1000];
      setprice(a)
    }
    else if (c.target.value == '4') {
      let a = [1000, 'above'];
      setprice(a)
    }
    else {
      let a = ['', ''];
      setprice(a)
    }
    //  settrueprice(!trueprice)
  }
  let dis = (d) => {
    if (d.target.value == '1') {
      let e = [5, 10];
      setdiscount(e)
    }
    else if (d.target.value == '2') {
      let e = [10, 15];
      setdiscount(e)
    }
    else if (d.target.value == '3') {
      let e = [15, 20];
      setdiscount(e)
    }
    else if (d.target.value == '4') {
      let e = [20, 'above'];
      setdiscount(e)
    }
    else {
      let e = ['', ''];
      setdiscount(e)
    }
  }

  let [opencat, setopencat] = useState(true);
  let closecat = () => {
    setopencat(!opencat)
    // alert('sadudgs')
  }
  let [openbrand, setopenbrand] = useState(true);
  let closebrand = () => {
    setopenbrand(!openbrand)
  }
  let [opensort, setopensort] = useState(true);
  let closesort = () => {
    setopensort(!opensort)
  }
  let [opendis, setopendis] = useState(true)
  let closedis = () => {
    setopendis(!opendis)
  }
  let [openprice, setopenprice] = useState(true)
  let closeprice = () => [
    setopenprice(!openprice)
  ]
  let [openrating, setopenrating] = useState(true)
  let closerating = () => {
    setopenrating(!openrating)
  }
  let settiingsort = (event) => {
    setSORT(event.target.value)
  }

  return (
    <>

      {/* <!--
      Mobile filter dialog

      Off-canvas filters for mobile, show/hide based on off-canvas filters state.
    --> */}
      <div className={`relative z-40 ${mobilemenu ? '' : 'hidden'}  `} role="dialog" aria-modal="true">
        {/* <!--
        Off-canvas menu backdrop, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      --> */}
        <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>

        <div className="fixed inset-0 z-40 flex">
          {/* <!--
          Off-canvas menu, show/hide based on off-canvas menu state.

          Entering: "transition ease-in-out duration-300 transform"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "translate-x-full"
        --> */}
          <div className="relative top-[125px] ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
            <div className="flex items-center justify-between px-4">
              <h2 className=" text-[25px] font-medium text-gray-900">Filters</h2>
              <button type="button" onClick={() => setmobilemenu(false)} className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* <!-- Filters --> */}
            <form className="">
              

              <div className="border-b  border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  {/* <!-- Expand/collapse section button --> */}
                  <button type="button" onClick={() => closesort()} className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                    <span className="font-medium text-gray-900">Sort</span>
                    <span className="ml-6 flex items-center">
                      {/* <!-- Expand icon, show/hide based on section open state. --> */}
                      {
                        opensort
                          ?
                          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          :

                          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                          </svg>
                      }
                    </span>
                  </button>
                </h3>
                {/* <!-- Filter section, show/hide based on section state. --> */}
                <div className={`pt-6 ${opensort ? 'hidden' : ''}`} id="filter-section-0">
                  <div className="space-y-4" onChange={settiingsort}>

                    <div className="flex items-center" >
                      <input name="sort" value="1" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor='f' className="ml-3 text-sm text-gray-600">Accending</label>
                    </div>
                    <div className="flex items-center" >
                      <input name="sort" value="2" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor='f' className="ml-3 text-sm text-gray-600">Decending</label>
                    </div>
                    <div className="flex items-center" >
                      <input name="sort" value="3" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor='f' className="ml-3 text-sm text-gray-600">Price Low to high</label>
                    </div>
                    <div className="flex items-center" >
                      <input name="sort" value="4" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor='f' className="ml-3 text-sm text-gray-600">Price high to Low</label>
                    </div>
                    <div className="flex items-center" >
                      <input name="sort" value="5" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor='f' className="ml-3 text-sm text-gray-600">Discounted Price Low to high</label>
                    </div>
                    <div className="flex items-center" >
                      <input name="sort" value="6" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor='f' className="ml-3 text-sm text-gray-600">Discounted Price high to Low</label>
                    </div>
                    <div className="flex items-center" >
                      <input name="sort" value="7" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor='f' className="ml-3 text-sm text-gray-600">Rating Low to high</label>
                    </div>
                    <div className="flex items-center" >
                      <input name="sort" value="8" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor='f' className="ml-3 text-sm text-gray-600">Rating high to Low</label>
                    </div>



                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  {/* <!-- Expand/collapse section button --> */}
                  <button type="button" onClick={() => closecat()} className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                    <span className="font-medium text-[19px]   text-gray-900">Categories</span>
                    <span className="ml-6    flex items-center">
                      {/* <!-- Expand icon, show/hide based on section open state. --> */}
                      {
                        opencat
                          ?
                          <svg className=" h-6  text-[19px] " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          :

                          <svg className="h-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                          </svg>
                      }


                    </span>
                  </button>
                </h3>
                {/* <!-- Filter section, show/hide based on section state. --> */}
                <div className={`pt-6 ${opencat ? 'hidden' : ''}`} id="filter-section-0">
                  <div className="space-y-4">
                    {
                      Categories.map((v, i) => {
                        return (
                          <div className="flex items-center" key={i}>
                            <input name="categories" id={v.slug} onClick={() => cc(v.slug)} value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor={v.slug} className="ml-3 text-sm text-gray-600">{v.name}</label>
                          </div>
                        )
                      })
                    }


                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  {/* <!-- Expand/collapse section button --> */}
                  <button type="button" onClick={() => closebrand()} className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                    <span className="font-medium text-gray-900">Brands</span>
                    <span className="ml-6 flex items-center">
                      {
                        openbrand
                          ?
                          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          :
                          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                          </svg>
                      }
                      {/* <!-- Expand icon, show/hide based on section open state. --> */}

                      {/* <!-- Collapse icon, show/hide based on section open state. -->// */}

                    </span>
                  </button>
                </h3>
                {/* <!-- Filter section, show/hide based on section state. --> */}
                <div className={`pt-6 ${openbrand ? 'hidden' : ''}`} id="filter-section-1">
                  <div className="space-y-4">
                    {
                      brand.map((v, i) => {
                        return (
                          <div className="flex items-center" key={i}>
                            <input onClick={() => b(v.slug)} id={v.slug} name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor={v.slug} className="ml-3 text-sm text-gray-600">{v.slug}</label>
                          </div>
                        )
                      })
                    }


                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  {/* <!-- Expand/collapse section button --> */}
                  <button type="button" onClick={() => closeprice()} className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                    <span className="font-medium text-gray-900">Price</span>
                    <span className="ml-6 flex items-center">
                      {/* <!-- Expand icon, show/hide based on section open state. --> */}
                      {
                        openprice
                          ?
                          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          :

                          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                          </svg>
                      }
                    </span>
                  </button>
                </h3>
                {/* <!-- Filter section, show/hide based on section state. --> */}
                <div className={`pt-6 ${openprice ? 'hidden' : ''}`} id="filter-section-2">
                  <div className="space-y-4" onClick={pricerange}>
                    <div className="flex items-center">
                      <input id="filter-size-0" name="size" value="l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-0" className="ml-3 text-sm text-gray-600">Rs. 10 to Rs. 250</label>
                    </div>
                    <div className="flex items-center">
                      <input id="filter-size-1" name="size" value="2" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-1" className="ml-3 text-sm text-gray-600">Rs. 250 to Rs. 500 </label>
                    </div>
                    <div className="flex items-center">
                      <input id="filter-size-2" name="size" value="3" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-2" className="ml-3 text-sm text-gray-600">Rs. 500 to Rs. 1000</label>
                    </div>
                    <div className="flex items-center">
                      <input id="filter-size-3" name="size" value="4" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-3" className="ml-3 text-sm text-gray-600">Rs. 1000 to Above</label>
                    </div>

                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  {/* <!-- Expand/collapse section button --> */}
                  <button type="button" onClick={() => closerating()} className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                    <span className="font-medium text-gray-900">Rating</span>
                    <span className="ml-6 flex items-center">
                      {/* <!-- Expand icon, show/hide based on section open state. --> */}
                      {
                        openrating
                          ?
                          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          :

                          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                          </svg>
                      }
                    </span>
                  </button>
                </h3>
                {/* <!-- Filter section, show/hide based on section state. --> */}
                <div className={`pt-6 ${openrating ? 'hidden' : ''}`} id="filter-section-2">
                  <div className="space-y-4" onClick={(event) => { setrating(event.target.value) }}>
                    <div className="flex items-center">
                      <input id="filter-size-0" name="size" value="4" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-0" className="ml-3 text-sm text-gray-600">4★ & above</label>
                    </div>
                    <div className="flex items-center">
                      <input id="filter-size-1" name="size" value="3" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-1" className="ml-3 text-sm text-gray-600">3★ & above  </label>
                    </div>
                    <div className="flex items-center">
                      <input id="filter-size-2" name="size" value="2" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-2" className="ml-3 text-sm text-gray-600">2★ & above</label>
                    </div>
                    <div className="flex items-center">
                      <input id="filter-size-3" name="size" value="1" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-3" className="ml-3 text-sm text-gray-600">1★ & above</label>
                    </div>

                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  {/* <!-- Expand/collapse section button --> */}
                  <button type="button" onClick={() => closedis()} className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                    <span className="font-medium text-gray-900">DISCOUNT RANGE</span>
                    <span className="ml-6 flex items-center">
                      {/* <!-- Expand icon, show/hide based on section open state. --> */}
                      {
                        opendis
                          ?
                          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          :

                          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                          </svg>
                      }
                    </span>
                  </button>
                </h3>
                {/* <!-- Filter section, show/hide based on section state. --> */}
                <div className={`pt-6 ${opendis ? 'hidden' : ''}`} id="filter-section-2">
                  <div className="space-y-4" onClick={dis}>
                    <div className="flex items-center">
                      <input id="filter-size-0" name="size" value="l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-0" className="ml-3 text-sm text-gray-600">5% and above</label>
                    </div>
                    <div className="flex items-center">
                      <input id="filter-size-1" name="size" value="2" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-1" className="ml-3 text-sm text-gray-600">10% and above </label>
                    </div>
                    <div className="flex items-center">
                      <input id="filter-size-2" name="size" value="3" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-2" className="ml-3 text-sm text-gray-600">15% and above</label>
                    </div>
                    <div className="flex items-center">
                      <input id="filter-size-3" name="size" value="4" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-3" className="ml-3 text-sm text-gray-600">20% and above</label>
                    </div>
                    
                    </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <main className=" basis-[25%]  hidden laptop:block ">


        <section aria-labelledby="products-heading" className="p-2  border border-[2px ] basis-[30%] pt-6">
          <h2 id="products-heading" className="sr-only">Products</h2>

          <div className=" ">
            {/* <!-- Filters --> */}
            <form className="hidden laptop:block">
              <h3 className="text-[25px]">Filter</h3>

              <div className="border-b  border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  {/* <!-- Expand/collapse section button --> */}
                  <button type="button" onClick={() => closesort()} className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                    <span className="font-medium text-[19px] text-gray-900">Sort</span>
                    <span className="ml-6 flex items-center">
                      {/* <!-- Expand icon, show/hide based on section open state. --> */}
                      {
                        opensort
                          ?
                          <svg className="h-6 text-[19px]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          :

                          <svg className="h-6 text-[19px]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                          </svg>
                      }
                    </span>
                  </button>
                </h3>
                {/* <!-- Filter section, show/hide based on section state. --> */}
                <div className={`pt-6 ${opensort ? 'hidden' : ''}`} id="filter-section-0">
                  <div className="space-y-4" onChange={settiingsort}>

                    <div className="flex items-center" >
                      <input name="sort" value="1" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor='f' className="ml-3 text-sm text-gray-600">Accending</label>
                    </div>
                    <div className="flex items-center" >
                      <input name="sort" value="2" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor='f' className="ml-3 text-sm text-gray-600">Decending</label>
                    </div>
                    <div className="flex items-center" >
                      <input name="sort" value="3" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor='f' className="ml-3 text-sm text-gray-600">Price Low to high</label>
                    </div>
                    <div className="flex items-center" >
                      <input name="sort" value="4" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor='f' className="ml-3 text-sm text-gray-600">Price high to Low</label>
                    </div>
                    <div className="flex items-center" >
                      <input name="sort" value="5" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor='f' className="ml-3 text-sm text-gray-600">Discounted Price Low to high</label>
                    </div>
                    <div className="flex items-center" >
                      <input name="sort" value="6" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor='f' className="ml-3 text-sm text-gray-600">Discounted Price high to Low</label>
                    </div>
                    <div className="flex items-center" >
                      <input name="sort" value="7" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor='f' className="ml-3 text-sm text-gray-600">Rating Low to high</label>
                    </div>
                    <div className="flex items-center" >
                      <input name="sort" value="8" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor='f' className="ml-3 text-sm text-gray-600">Rating high to Low</label>
                    </div>



                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  {/* <!-- Expand/collapse section button --> */}
                  <button type="button" onClick={() => closecat()} className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                    <span className="font-medium text-[19px]   text-gray-900">Categories</span>
                    <span className="ml-6    flex items-center">
                      {/* <!-- Expand icon, show/hide based on section open state. --> */}
                      {
                        opencat
                          ?
                          <svg className=" h-6   " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          :

                          <svg className="h-6 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                          </svg>
                      }


                    </span>
                  </button>
                </h3>
                {/* <!-- Filter section, show/hide based on section state. --> */}
                <div className={`pt-6 ${opencat ? 'hidden' : ''}`} id="filter-section-0">
                  <div className="space-y-4">
                    {
                      Categories.map((v, i) => {
                        return (
                          <div className="flex items-center" key={i}>
                            <input name="categories" id={v.slug} onClick={() => cc(v.slug)} value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor={v.slug} className="ml-3 text-sm text-gray-600">{v.name}</label>
                          </div>
                        )
                      })
                    }


                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  {/* <!-- Expand/collapse section button --> */}
                  <button type="button" onClick={() => closebrand()} className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                    <span className="font-medium text-[19px]   text-gray-900">Brands</span>
                    <span className="ml-6 flex items-center">
                      {
                        openbrand
                          ?
                          <svg className="h-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          :
                          <svg className="h-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                          </svg>
                      }
                      {/* <!-- Expand icon, show/hide based on section open state. --> */}

                      {/* <!-- Collapse icon, show/hide based on section open state. -->// */}

                    </span>
                  </button>
                </h3>
                {/* <!-- Filter section, show/hide based on section state. --> */}
                <div className={`pt-6 ${openbrand ? 'hidden' : ''}`} id="filter-section-1">
                  <div className="space-y-4">
                    {
                      brand.map((v, i) => {
                        return (
                          <div className="flex items-center" key={i}>
                            <input onClick={() => b(v.slug)} id={v.slug} name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor={v.slug} className="ml-3 text-sm text-gray-600">{v.slug}</label>
                          </div>
                        )
                      })
                    }


                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  {/* <!-- Expand/collapse section button --> */}
                  <button type="button" onClick={() => closeprice()} className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                    <span className="font-medium text-[19px] text-gray-900">Price</span>
                    <span className="ml-6 flex items-center">
                      {/* <!-- Expand icon, show/hide based on section open state. --> */}
                      {
                        openprice
                          ?
                          <svg className="h-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          :

                          <svg className="h-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                          </svg>
                      }
                    </span>
                  </button>
                </h3>
                {/* <!-- Filter section, show/hide based on section state. --> */}
                <div className={`pt-6 ${openprice ? 'hidden' : ''}`} id="filter-section-2">
                  <div className="space-y-4" onClick={pricerange}>
                    <div className="flex items-center">
                      <input id="filter-size-0" name="size" value="l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-0" className="ml-3 text-sm text-gray-600">Rs. 10 to Rs. 250</label>
                    </div>
                    <div className="flex items-center">
                      <input id="filter-size-1" name="size" value="2" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-1" className="ml-3 text-sm text-gray-600">Rs. 250 to Rs. 500 </label>
                    </div>
                    <div className="flex items-center">
                      <input id="filter-size-2" name="size" value="3" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-2" className="ml-3 text-sm text-gray-600">Rs. 500 to Rs. 1000</label>
                    </div>
                    <div className="flex items-center">
                      <input id="filter-size-3" name="size" value="4" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-3" className="ml-3 text-sm text-gray-600">Rs. 1000 to Above</label>
                    </div>

                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  {/* <!-- Expand/collapse section button --> */}
                  <button type="button" onClick={() => closerating()} className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                    <span className="font-medium text-[19px] text-gray-900">Rating</span>
                    <span className="ml-6 flex items-center">
                      {/* <!-- Expand icon, show/hide based on section open state. --> */}
                      {
                        openrating
                          ?
                          <svg className="h-6 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          :

                          <svg className="h-6 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                          </svg>
                      }
                    </span>
                  </button>
                </h3>
                {/* <!-- Filter section, show/hide based on section state. --> */}
                <div className={`pt-6 ${openrating ? 'hidden' : ''}`} id="filter-section-2">
                  <div className="space-y-4" onClick={(event) => { setrating(event.target.value) }}>
                    <div className="flex items-center">
                      <input id="filter-size-0" name="size" value="4" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-0" className="ml-3 text-sm text-gray-600">4★ & above</label>
                    </div>
                    <div className="flex items-center">
                      <input id="filter-size-1" name="size" value="3" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-1" className="ml-3 text-sm text-gray-600">3★ & above  </label>
                    </div>
                    <div className="flex items-center">
                      <input id="filter-size-2" name="size" value="2" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-2" className="ml-3 text-sm text-gray-600">2★ & above</label>
                    </div>
                    <div className="flex items-center">
                      <input id="filter-size-3" name="size" value="1" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-3" className="ml-3 text-sm text-gray-600">1★ & above</label>
                    </div>

                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  {/* <!-- Expand/collapse section button --> */}
                  <button type="button" onClick={() => closedis()} className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                    <span className="font-medium text-[19px] text-gray-900">DISCOUNT RANGE</span>
                    <span className="ml-6 flex items-center">
                      {/* <!-- Expand icon, show/hide based on section open state. --> */}
                      {
                        opendis
                          ?
                          <svg className="h-6 text-[19px]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          :

                          <svg className="h-6 text-[19px]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                          </svg>
                      }
                    </span>
                  </button>
                </h3>
                {/* <!-- Filter section, show/hide based on section state. --> */}
                <div className={`pt-6 ${opendis ? 'hidden' : ''}`} id="filter-section-2">
                  <div className="space-y-4" onClick={dis}>
                    <div className="flex items-center">
                      <input id="filter-size-0" name="size" value="l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-0" className="ml-3 text-sm text-gray-600">5% and above</label>
                    </div>
                    <div className="flex items-center">
                      <input id="filter-size-1" name="size" value="2" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-1" className="ml-3 text-sm text-gray-600">10% and above </label>
                    </div>
                    <div className="flex items-center">
                      <input id="filter-size-2" name="size" value="3" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-2" className="ml-3 text-sm text-gray-600">15% and above</label>
                    </div>
                    <div className="flex items-center">
                      <input id="filter-size-3" name="size" value="4" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label htmlFor="filter-size-3" className="ml-3 text-sm text-gray-600">20% and above</label>
                    </div>
                    
                    </div>
                </div>
              </div>
            </form>

            {/* <!-- Product grid --> */}

          </div>
        </section>
      </main>


    </>
  )
}
