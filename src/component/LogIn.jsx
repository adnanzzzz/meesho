import React, { useContext } from 'react'
import loginbanner from '../assets/images/loginbanner.webp'
import Header from './commonComponent/Header'
import CommonRoute from './CommonRoute'
import { Commoncontext } from './context/Context'
import { useNavigate } from 'react-router-dom'

export default function LogIn() {
  let {signup,userlogedin,setuserlogedin,cartitems,setcartitems} = useContext(Commoncontext)
  let navigation = useNavigate()
let submithandle =(event)=>{
event.preventDefault();
console.log(event.target.email.value)
let data = signup.filter((v,i)=>{
  if(v.email==event.target.email.value){
    return v;
  }
})
// console.log(signup)
console.log(data)

// console.log(userlogedin)
localStorage.setItem('logedin',JSON.stringify(data[0]))
setuserlogedin(data[0])
setcartitems(data[0].cart)
navigation('/productlisting')
}
// console.log(userlogedin[0].cart)
// console.log(cartitems)
// userlogedin[0].cart=cartitems
// console.log(userlogedin[0].cart)
// setuserlogedin[userlogedin]
// console.log(userlogedin)
  return (
    <><div className='bg-[#FDECED]'>
      <Header />
      {/* <div className='max-w-[433px] h-[600px] mx-auto my-10 rounded'>
        <div className='rounded-t-lg overflow-hidden h-52'>
        <img className='rounded-t-lg'  src={loginbanner} alt="" />
        </div>
        <div>
            hello
        </div>
     
    </div> */}
      <div class="flex items-center h-screen w-full">
        <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span class="block w-full text-xl uppercase font-bold mb-4">Login</span>
          <form class="mb-4"  onSubmit={submithandle} action="/" method="post">
            <div class="mb-4 md:w-full">
              <label for="email" class="block text-xs mb-1">Username or Email</label>
              <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="text" name="email" id="email" placeholder="Username or Email"/>
            </div>
            <div class="mb-6 md:w-full">
              <label for="password" class="block text-xs mb-1">Password</label>
              <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Password"/>
            </div>
            <button type='submit' class="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Login</button>
          </form>
          <a class="text-blue-700 text-center text-sm" href="/login">Forgot password?</a>
        </div>
      </div>
    </div>
    </>
  )
}
