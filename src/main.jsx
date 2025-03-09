import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/home.jsx'
import Register from './page/Register.jsx'
import Login from './page/Login.jsx'
import MainLayout from './Layout/MainLayout.jsx'
import ForgotPassword from './page/ForgotPassword.jsx'
import BuyDomain from './page/BuyDomain.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css'
import './assets/css/home.css'
import './assets/css/sign.css'
import './assets/css/buyDomain.css'
import './assets/css/cart.css'
import Cart from './page/Cart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route element={<MainLayout/>}>
    <Route path="/" Component={Home} />
    <Route path='/cart' Component={Cart}/>
    <Route path='/login' Component={Login}/>
    <Route path='/forgot-password' Component={ForgotPassword}/>
    <Route path='/register' Component={Register}/>
    <Route path='/buy-domain' Component={BuyDomain}/>
    </Route>
    </Routes> 
    </BrowserRouter>
  </StrictMode>,
)
