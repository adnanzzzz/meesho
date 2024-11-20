import React, { createContext, useState } from 'react'
const Commoncontext = createContext()

export default function Context({ children }) {
  let[popupsignup,setpopup]=useState(false)
  //All Categories store in Categories state---------------------------------------------------------->>>>
  let [Categories, setCategories] = useState([])
  //All product store in products state---------------------------------------------------------->>>>
  let [products, setproducts] = useState([])
  let getsignupdata = JSON.parse(localStorage.getItem('signup')) ?? [];
  let [signup, setsignup] = useState(getsignupdata)
  let getlogedin = JSON.parse(localStorage.getItem('logedin')) ?? '';
  let [userlogedin, setuserlogedin] = useState(getlogedin)
  let [wish, setwish] = useState(userlogedin.wish)
  let [cartitems, setcartitems] = useState(userlogedin.cart)
  // console.log(userlogedin)

  let addtocart = (product) => {
    if (userlogedin != '') {

      let data = cartitems.filter((value) => {
        if (value.id == product.id) {
          return value;
        }

      })
      if (data.length == 0) { //if cart value is 0 
        let carts = {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          qty: 1

        }

        const newData = JSON.parse(localStorage.getItem('logedin')) ?? {};

        newData.cart = [carts, ...cartitems];

        // console.log('cart =>',newData);
        // let finalcart = 
        localStorage.setItem('logedin', JSON.stringify(newData))
        signup.map((v, i) => {
          if (v.id == newData.id) {
            signup[i] = newData
            setsignup(signup)
            let final = [...signup]
            localStorage.setItem('signup', JSON.stringify(final))
          }
        })
        // getlogedin
        setcartitems([carts, ...cartitems])
        // console.log(cartitems)
      }
      else { //cart value is not null
        cartitems.map((value) => {
          if (value.id == product.id) {
            if (value.qty <= 4) {
              value.qty = value.qty + 1;
            }
            else {
              alert('max cart for')
            }

            // console.log(value.qty)

          }

        })

        setcartitems(cartitems)
        let newData = JSON.parse(localStorage.getItem('logedin')) ?? {};
        newData.cart = [...cartitems]
        localStorage.setItem('logedin', JSON.stringify(newData))
        signup.map((v, i) => {
          if (v.id == newData.id) {
            signup[i] = newData
            setsignup(signup)
            let final = [...signup]
            localStorage.setItem('signup', JSON.stringify(final))
          }
        })
        // console.log(cartitems)
      }

    }
    else {
      setpopup(true)
    }

  }


  // ------------------------------------------------------------------------------------------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


  let deleteCart = (id) => {
    cartitems.map((v, i) => {
      if (v.id == id) {
        cartitems.splice(i, 1);
        let finalcart = [...cartitems]
        // localStorage.setItem('logedin',JSON.stringify())
        userlogedin.cart = finalcart;
        localStorage.setItem('logedin', JSON.stringify(userlogedin))
        setcartitems(finalcart)
        signup.map((v, i) => {
          if (v.id == userlogedin.id) {
            signup[i] = userlogedin
            setsignup(signup)
            let final = [...signup]
            localStorage.setItem('signup', JSON.stringify(final))

          }
        })
      }
    })
    console.log(id)
    }



  let setheart = (v) => {
    // setlaldil(!laldil)
    var data = '';
    if (wish != []) {
      data = wish.filter((value) => {
        if (value.id == v.id) {
          return value;
        }
      })
    }


    if (data.length == 0) { //if cart value is 0 
      let wishitem = {
        id: v.id,
        name: v.name,
        image: v.image,
        rating: v.rating,
        discount_percentage: v.discount_percentage,
        price: v.price,

      }
      // let finalwish = [wishitem, ...wish];

      userlogedin.wish = [wishitem, ...wish];
      setuserlogedin(userlogedin)
      localStorage.setItem('logedin', JSON.stringify(userlogedin))
      console.log('if no data ', userlogedin)

      signup.map((v, i) => {
        if (v.id == userlogedin.id) {
          signup[i] = userlogedin
          setsignup(signup)
          let final = [...signup]
          localStorage.setItem('signup', JSON.stringify(final))
        }
      })
      setwish([wishitem, ...wish])
    }
    else {
      wish.map((value, i) => {
        if (value.id == v.id) {
          wish.splice(i, 1);
          let finalwish = [...wish]
          // localStorage.setItem('logedin',JSON.stringify())
          userlogedin.wish = finalwish;
          localStorage.setItem('logedin', JSON.stringify(userlogedin))
          setwish(finalwish)
          console.log('else same data ', userlogedin)
          signup.map((v, i) => {
            if (v.id == userlogedin.id) {
              signup[i] = userlogedin
              setsignup(signup)
              let final = [...signup]
              localStorage.setItem('signup', JSON.stringify(final))

            }
          })
        }
      })

    }



  }



  let increaseCartqty = (v) => {
     cartitems.map((value) => {
      if (value.id == v.id) {
        if (value.qty <= 4) {
          value.qty = value.qty + 1;
        }

      }
    })
    setcartitems(cartitems)
    let newData = JSON.parse(localStorage.getItem('logedin')) ?? {};
    newData.cart = [...cartitems]
    localStorage.setItem('logedin', JSON.stringify(newData))
    signup.map((v, i) => {
      if (v.id == newData.id) {
        signup[i] = newData
        setsignup(signup)
        let final = [...signup]
        localStorage.setItem('signup', JSON.stringify(final))
      }
    })
    console.log(cartitems)
}
  let decreaseCartqty = (v) => {
    cartitems.map((value) => {
      if (value.id == v.id) {
        if (value.qty > 1) {
          value.qty = value.qty - 1;
        }

      }
    })
    setcartitems(cartitems)
    let newData = JSON.parse(localStorage.getItem('logedin')) ?? {};
    newData.cart = [...cartitems]
    localStorage.setItem('logedin', JSON.stringify(newData))
    signup.map((v, i) => {
      if (v.id == newData.id) {
        signup[i] = newData
        setsignup(signup)
        let final = [...signup]
        localStorage.setItem('signup', JSON.stringify(final))
      }
    })
    console.log(cartitems)
  }
  let allitems = {
    cartitems, setcartitems, addtocart, deleteCart, wish
    , setheart, setwish,
    Categories, setCategories,
    products, setproducts,
    signup, setsignup,
    userlogedin, setuserlogedin,
    increaseCartqty, decreaseCartqty,
    popupsignup,setpopup
  }
  return (
    <div>
      <Commoncontext.Provider value={allitems}>
        {children}
      </Commoncontext.Provider>
    </div>
  )
}
export { Commoncontext };
