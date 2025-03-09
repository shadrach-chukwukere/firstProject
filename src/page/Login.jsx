import www from '../assets/image/www.png'
import { Link } from 'react-router-dom'
import { BsEyeSlashFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs"
import { useState } from 'react';
import { useRef } from 'react';




export default function Login(){

    
        const show = useRef(null)
        const hide = useRef(null)
        const passwordInput = useRef(null);
    
    
        const [view , setview] = useState(false)


    return(
        <div>
             <div className="loginHead container-fluid text-center w-100 align-content-center">
            Login
            </div>
            <div className="container-fluid login">
            <div className="row p-0 p-lg-2 logDash">
                <div className="container-fluid col-lg-6 p-4 text-center logGrad">
                    <img src={www} alt="www" className='' />
                </div>
                <div className="container-fluid col-lg-6 p-lg-4 p-3 loginForm">
                    <p className='text-center title'>Login to your account</p>
                    <form action="">
                    <div className="name">
                            <input type="text" className='container-fluid' placeholder='username'/>
                           </div>
             <div className="name flex-nowrap d-flex">
                 <input ref={passwordInput} className='container-fluid' placeholder='password' type={view ? "text" : "password"} /> 
                <span onClick={()=>setview((prev) => !prev)} > {view ? <BsEyeSlashFill className='hide position-absolute'/> : <BsFillEyeFill className='hide position-absolute'/>} </span>
            </div>
                    <div className="text-center">
                           <button className='loginBtn' type='submit'>Login</button>
                    </div>
                    </form>
                    <div className="d-flex justify-content-between formNext">
                        <p className='text-center'>Not a client yet?<span><Link className='nav-link' to="/register"> Create Account! </Link></span> </p>
                        <p className='text-center'>Forgot password? <span><Link className='nav-link' to="/forgot-password" >Click here! </Link></span> </p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
    )
}

