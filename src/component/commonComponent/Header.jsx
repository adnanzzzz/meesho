import React, { useContext } from 'react'
import logo from '../../assets/images/meeshoLogo.svg'
import playstore from '../../assets/images/playstore-icon-big.png'
import appstore from '../../assets/images/appstore-icon-big.png'
import { CiMobile3 } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { FiMenu } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";
import { SlBag } from "react-icons/sl";
import MegaMenu from './MegaMenu';
import { Link } from 'react-router-dom';
import categories from './megamenuInnercontent'
import { Commoncontext } from '../context/Context.jsx';
// import { Commoncontext } from '../context/context';
export default function Header() {
    let { cartitems, userlogedin, setuserlogedin,setcartitems,setwish } = useContext(Commoncontext);
    let clearlogin = () => {
        console.log(cartitems)
        // setcartitems([])
        
        localStorage.setItem('logedin', JSON.stringify([]))
        setuserlogedin([])
        setwish([])
        // localStorage.clear();
        
        console.log(userlogedin)
        // console.log(userlogedin)

    }
    let pleaselogin = () => {
        alert('please login')
    }
    // console.log(userlogedin)
    return (
        <>
            <div className=' max-w-[100%] shadow-xl z-[9999] bg-[white] laptop:sticky laptop:top-0 '>
                <header className='max-w-[1330px] bg-[white] largelaptop:gap-0 laptop:pb-0 pb-2 flex m-auto largelaptop:px-0 px-4 laptop:items-center smallmob:flex-col laptop:flex-row tablet:justify-between mx-auto ' >

                    <figure className='flex justify-between laptop:static sticky  top-0 laptop:py-0 py-5'>
                        <div className='flex'>
                            <Link to={'/productlisting'} >
                            <FiMenu className='laptop:hidden me-4  text-[24px]' />
                            </Link>
                            <FiMenu className='laptop:hidden me-4  text-[24px]' />
                            <Link to={'/'}><img src={logo} className='laptop:w-[156px] w-[87px] laptop:h-9 h-5' alt="" /></Link>

                        </div>
                        <div className='laptop:hidden gap-[15px] text-[23px] flex'>
                            <div> <Link to={'Wishlist'}><FcLike /></Link> </div>
                            <div className='text-[#C53EAD] relative pt-1 text-[20px]'><FaCartShopping />
                                {
                                    (userlogedin.length == 0)
                                        ?
                                        ''
                                        :
                                        <div className='absolute bottom-[15px] text-[10px] rounded-[50%] left-[15px] py-1 px-2 text-white bg-[green]'>{userlogedin.cart.length}</div>
                                }

                            </div>
                        </div>
                    </figure>
                    <div className='flex border-[#8B8BA3] w-100% px-2 font-normal py-[8.2px] border largelaptop:rounded rounded-[13px]  items-center' >
                        <div className='text-[27px] text-[#8B8BA3] font-bold'><CiSearch className='font-black' /></div>
                        <div className='w-[80%]'><input type="text" placeholder='Try Saree,Kurti or Search by Product Code' className='outline-none rounded laptop:w-[250px] smallmob:w-[100%]  largelaptop:w-[358px] px-1' /></div>
                    </div>

                    <nav className='hidden  font-medium laptop:block '>
                        <ul className='flex h-[100%] text-[17px]' >
                            <li className='h-[100%] py-4 flex hover:border-b-[2px] hover:text-[#9F2089]  hover:border-[#9F2089]   items-center  relative downlosd-app '>
                                {/* <a href=""> */}
                                <div className='flex  h-10  largelaptop:px-6 gap-[8px] laptop:px-4 items-center  border-[black]    '>
                                    <CiMobile3 className='text-[22px]' />
                                    Download App

                                    <div className='absolute shadow-md download-from rounded-b-lg hidden  border-[2px] top-[103%] left-0 bg-[white] z-[9] w-[110%] px-3 py-4'>
                                        <p className='capitalize font-medium'> download from</p>
                                        <div className='py-6'><a href="https://play.google.com/store/search?q=meesho&c=apps&hl=en">
                                            <img src={playstore} alt="" /></a></div>
                                        <div><a href="https://apps.apple.com/in/app/meesho-online-shopping/id1457958492">
                                            <img src={appstore} alt="" /></a></div>
                                    </div>
                                </div>
                                {/* </a> */}
                            </li>
                            <li className='h-[100%] py-4  flex items-center  '>
                                <a href="">
                                    <div className='flex h-10 largelaptop:px-6 border-l-[3px] border-[#CECEDE] laptop:px-4 items-center '>
                                        Become a Supplier
                                    </div>
                                </a>
                            </li>
                            <li className='h-[100%]  py-4  flex items-center border-[black]'>
                                <a href="">
                                    <div className='flex largelaptop:px-6 h-10  border-l-[3px] border-r-[3px]  items-center laptop:px-4 border-[#CECEDE]'>
                                        Newsroom
                                    </div>
                                </a>
                            </li>
                            <li className='h-[100%] profile py-4 relative flex items-center '>

                                <div className=' text-center  h-10 largelaptop:pl-9 laptop:pl-4  items-center '>
                                    <FaRegUser className=' text-[18px] w-[100%]' />Profile
                                    <div className='absolute hidden profileContainer shadow-md rounded-b-lg top-[100%] right-[-100%] px-4 py-5 border bg-[white] w-[296%] z-[9]'>
                                        <div className='text-left'>
                                            <p className='text-[18px]'>Hello User</p>

                                            <p className='text-[12px]'>To access your Meesho account</p>
                                            <Link to={'/signin'}>
                                                <button className='w-[100%] text-[18px] font-semibold rounded-lg my-3 text-white bg-[#9F2089] py-3 '>
                                                    Sign Up
                                                </button>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to={'/login'}>
                                                <button className='w-[100%] text-[18px] font-semibold rounded-lg my-3 text-white bg-[#9F2089] py-3 '>
                                                    Login in
                                                </button>

                                            </Link>

                                        </div>
                                        <div className='flex border-t-[3px] items-center gap-3'>
                                            <SlBag className='text-[13px]' />
                                            <p className='text-[18px] font-medium py-4'>My Order</p>

                                        </div>

                                        <div onClick={clearlogin} className='pt-4 text-[18px] pl-3 font-semibold text-left border-t-[3px]'>
                                            Delete account
                                        </div>

                                    </div>
                                </div>

                            </li>
                            <li className='h-[100%] py-4 flex items-center '>
                                {
                                    (userlogedin.length == 0)

                                        ?

                                        <div onClick={pleaselogin} className=' largelaptop:pl-9 h-10 laptop:pl-4 relative laptop:pr-4 largelaptop:pr-[27px]'>
                                            <BsCart2 className='w-[100%] text-[20px]' />Cart </div>
                                        :

                                        <Link to='/cart'>
                                            <div className=' largelaptop:pl-9 h-10 laptop:pl-4 relative laptop:pr-4 largelaptop:pr-[27px]'>
                                                <BsCart2 className='w-[100%] text-[20px]' />Cart
                                                {
                                                    (cartitems== '')
                                                        ?
                                                        ""
                                                        :
                                                        <div className='absolute  bg-[#FFE7FB] top-[-11px] px-2  right-[21px] text-[13px] text-[#9F2089] rounded-[50%]'>{cartitems.length}</div>

                                                }
                                            </div>
                                        </Link>
                                }

                            </li>


                        </ul>
                    </nav>


                </header>
                <nav className=' border-t-[0.5px] hidden bg-[white]  laptop:block border-[black]  border-b-[0.5px]  '>
                    <ul className='flex pt-4 max-w-[1355px] relative  mx-[auto] megamenuparent '>
                        {
                            categories.map((v, i) => {
                                return (
                                    <li className='grow capitalize h-[40px] hover:border-b-[2px] hover:text-[#9F2089]  hover:border-[#9F2089]  text-center' key={i} ><Link to='/productlisting' className='font-medium'> {v.name}</Link>
                                        <MegaMenu items={v.subCategories} />
                                    </li>
                                )
                            })
                        }

                    </ul>
                </nav>

            </div>
        </>
    )
}
