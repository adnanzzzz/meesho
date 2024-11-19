import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import CommonRoute from './component/CommonRoute.jsx';
import Productlisting from './component/product/Productlisting.jsx';
import Cart from './component/Cart.jsx';
import Context from './component/context/Context.jsx';
import Wishlist from './component/Wishlist.jsx';
import ProductView from './component/product/ProductView.jsx';
import LogIn from './component/LogIn.jsx';
import SignIn from './component/SignIn.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<CommonRoute />}>
        <Route path='/' element={<App />} />
        <Route path='productlisting' element={<Productlisting />} />
        <Route path='cart' element={<Cart />} />
        <Route path='ProductView/:id' element={<ProductView />} />
        <Route path='Wishlist' element={<Wishlist />} />
      </Route>
      <Route path='signin' element={<SignIn/>} />
      <Route path='login' element={<LogIn />}></Route>
    </>

  ));


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>

  </StrictMode>,
) 