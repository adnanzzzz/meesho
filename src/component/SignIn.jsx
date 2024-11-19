import React, { useContext } from 'react'
import loginbanner from '../assets/images/loginbanner.webp'
import { Commoncontext } from './context/Context'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
  let { signup, setsignup,cartitems,setcartitems,setuserlogedin } = useContext(Commoncontext)
  let navigation = useNavigate()
  let letsignin = (event) => {
    setcartitems([])

    event.preventDefault()
    let objgsignup = {
      id: signup.length,
      username: event.target.uname.value,
      email: event.target.email.value,
      cart:[],
      wish:[],
      password: event.target.password.value,
    }
    let matchemail = signup.filter((v, i) => {
      if (v.email == objgsignup.email) {
        return v;
      }
      console.log()


    })
  

  
    if (matchemail == '') {

      signup.push(objgsignup)
      localStorage.setItem('logedin',JSON.stringify(objgsignup))
      setuserlogedin(objgsignup)
      setsignup(signup)
      localStorage.setItem('signup', JSON.stringify(signup))
      navigation('/productlisting')
      // console.log(signup)
      // navigation('/productlisting')
    }
    else {
      alert('email already used')
      // console.log(signup)
    }


    event.target.reset();
    
  } 
  console.log(cartitems)
// console.log(cartitems)
  return (
    <>

      <div class="signup-1 flex items-center relative h-screen">
        <div class="overlay absolute inset-0 z-0 bg-black opacity-75"></div>
        <div class="container px-4 mx-auto relative z-10">
          <div class="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto">
            <div class="box bg-white p-6 md:px-12 md:pt-12 border-t-10 border-solid border-indigo-600">
              <h2 class="text-3xl text-gray-800 text-center">Create Your Account</h2>

              <div class="signup-form mt-6 md:mt-12">
                <form action="" onSubmit={letsignin}>
                  <div class="border-2 border-solid rounded flex items-center mb-4">
                    <div class="w-10 h-10 flex justify-center items-center flex-shrink-0">
                      <span class="far fa-user text-gray-500"></span>
                    </div>

                    <div class="flex-1">
                      <input type="text" name='uname' placeholder="Username" class="h-10 py-1 pr-3 w-full" />
                    </div>
                  </div>

                  <div class="border-2 border-solid rounded flex items-center mb-4">
                    <div class="w-10 h-10 flex justify-center items-center flex-shrink-0">
                      <span class="far fa-envelope text-gray-500"></span>
                    </div>
                    <div class="flex-1">
                      <input type="text" name='email' placeholder="E-mail" class="h-10 py-1 pr-3 w-full" />
                    </div>
                  </div>

                  <div class="border-2 border-solid rounded flex items-center mb-4">
                    <div class="w-10 h-10 flex justify-center items-center flex-shrink-0">
                      <span class="fas fa-asterisk text-gray-500"></span>
                    </div>
                    <div class="flex-1">
                      <input type="password" name='password' placeholder="Password" class="h-10 py-1 pr-3 w-full" />
                    </div>
                  </div>

                  <p class="text-sm text-center mt-6">By signing up, you agree to our <a href="#" class="text-indigo-600 hover:underline">Terms</a> and <a href="#" class="text-indigo-600 hover:underline">Privacy Policy</a></p>

                  <div class="text-center mt-6 md:mt-12">
                    <button type='submit' class="bg-indigo-600 hover:bg-indigo-700 text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300">Sign Up <span class="far fa-paper-plane ml-2"></span></button>
                  </div>
                </form>

              </div>

              <div class="border-t border-solid mt-6 md:mt-12 pt-4">
                <p class="text-gray-500 text-center">Already have an account, <a href="#" class="text-indigo-600 hover:underline">Sign In</a></p>
              </div>

            </div>
          </div>
        </div>
      </div >
    </>
  )
}
