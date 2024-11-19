import React, { useContext, useEffect, useState } from 'react'
import Filterproductsidebar from './Filterproductsidebar'
import axios from 'axios';
import Productfilter from './Productfilter'
import { IoMdHeart } from "react-icons/io";
import { Commoncontext } from '../context/Context.jsx';
import { Link } from 'react-router-dom';

export default function Productlisting() {
    let {Categories,setCategories,products, setproducts,wish}= useContext(Commoncontext)
   
    
    //cat contain the checked slug name cat added in api ---------------------------------------------------------->>>>
    let [cat, setcat] = useState([]);
    //filter  state is use in dependecy in url in checkboc have any changes the filter state will be change------------------->>>
    let [filter, setFilter] = useState(false);

    let [sort, setSORT] = useState('')

    let [pricee, setprice] = useState([])
    //All brands store in brand state----------------------------------------------------------------------->>>
    let [brand, setbrand] = useState([])

    let [BRAND, SETBRAND] = useState([])

    let [filbrand, setfilbrand] = useState(false)

    let [discount, setdiscount] = useState([])

    let [rating, setrating] = useState('')

    let [clear, setclears] = useState(false)

    let [pagecount, setpagecount] = useState(1)

    let [totalpages, settotalpages] = useState('')

    let [mobilemenu, setmobilemenu] = useState(false)

    //     if(clear==true){
    //         setrating('')
    //         let f=['','']
    //         discount=f
    //         setdiscount(discount)
    //         SETBRAND([''])
    //         pricee=f
    //         setprice(pricee)
    //         setSORT('')
    //         // setcat([''])
    //}

    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/brands.php')
            .then(function (response) {
                setbrand(response.data.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        if (pricee[0] == undefined) {
            let a = '';
            pricee[0] = a;
            setprice(pricee)
        }
        if (pricee[1] == undefined) {
            let b = '';
            pricee[1] = b;
            setprice(pricee)
        }
        if (discount[0] == undefined) {
            let a = ''
            discount[0] = a;
            setdiscount(discount)
        }
        if (discount[1] == undefined) {
            let a = ''
            discount[1] = a;
            setdiscount(discount)
        }

        axios.get(`https://wscubetech.co/ecommerce-api/products.php?limit=28&categories=${cat}&sorting=${sort}&price_from=${pricee[0]}&price_to=${pricee[1]}&brands=${BRAND}&discount_from=${discount[0]}&discount_to=${discount[1]}&rating=${rating}&page=${pagecount}`)

            .then(function (response) {
                // handle succes
                setproducts(response.data.data);
                settotalpages(response.data.toal_pages)

                // setLoader(false)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [filter, filbrand, sort, pricee, discount, rating, clear, pagecount])


    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/categories.php')
            .then(function (response) {
                // handle success
                setCategories(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])


    // console.log(wish)

    return (
        <>
            <div className="bg-white">
                <div className={` ${(wish==undefined) ? 'hidden' : 'fixed'} top-[45%] rounded-full border shadow py-3 px-2 right-6`}>
                    <Link to={'/Wishlist'}>
                <IoMdHeart className='text-[red] mx-auto text-[30px]'/>
                <p className='text-[20-px] font-semibold'>Wishlist</p>
                </Link>
                </div>
                <div className='flex max-w-[1350px] laptop:gap-[20px] mx-[auto]'>
                    <Filterproductsidebar
                        // trueprice={trueprice} 
                        // settrueprice={settrueprice} 
                        pricee={pricee}
                        setprice={setprice}
                        cat={cat}
                        setcat={setcat}
                        filter={filter}
                        setFilter={setFilter}
                        Categories={Categories}
                        brand={brand}
                        setbrand={setbrand}
                        BRAND={BRAND}
                        SETBRAND={SETBRAND}
                        filbrand={filbrand}
                        setfilbrand={setfilbrand}
                        discount={discount}
                        setdiscount={setdiscount}
                        setrating={setrating}
                        sort={sort}
                        setSORT={setSORT}
                        mobilemenu={mobilemenu}
                        setmobilemenu={setmobilemenu} />

                    <Productfilter
                        sort={sort} ///
                        setSORT={setSORT} //
                        cat={cat}
                        setcat={setcat}
                        products={products}
                        clear={clear}
                        setclears={setclears}
                        setpagecount={setpagecount}
                        pagecount={pagecount}
                        totalpages={totalpages}
                        mobilemenu={mobilemenu}
                        setmobilemenu={setmobilemenu}
                    />
                </div>

            </div>

        </>
    )
}
