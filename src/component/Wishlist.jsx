import React, { useContext } from 'react'
import Productcard from './product/Productcard'
import { Commoncontext } from './context/Context.jsx'


export default function Wishlist() {
  let { addwishlist, wish } = useContext(Commoncontext)
  return (
    <div className='flex  gap-5 flex-wrap'>
      {
        wish.map((v, i) => {
          return (
            <Productcard v={v} key={i} />
          )
        })
      }
    </div>
  )
}
