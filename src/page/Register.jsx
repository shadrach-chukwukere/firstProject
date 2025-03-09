import {Link} from 'react-router-dom'
import { BsEyeSlashFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs"
import { useState } from 'react';
import { useRef } from 'react';


export default function Register(){

    const show = useRef(null)
    const hide = useRef(null)
    const passwordInput = useRef(null);


    const [view , setview] = useState(false)






    return(
        <div>
              <div className="loginHead container-fluid text-center w-100 align-content-center">
            Register
            </div>
           <div className="container-fluid col-md-6 col-12 regForm mt-4 p-3 p-lg-4 mb-4">
            <div className="regTitle text-center">Create Account</div>
            <div className="name">
                <input type="text" className='container-fluid' placeholder='name'/>
            </div>
            <div className="name">
                <input type="text" className='container-fluid' placeholder='username'/>
            </div>
            <div className="name">
                <input type="email" className='container-fluid' placeholder='email'/>
            </div>
            <div className="name flex-nowrap d-flex">
                <input ref={passwordInput} className='container-fluid' placeholder='password' type={view ? "text" : "password"} /> 
                <span onClick={()=>setview((prev) => !prev)} > {view ? <BsEyeSlashFill className='hide position-absolute'/> : <BsFillEyeFill className='hide position-absolute'/>} </span>
            </div>
            <div className="text-center">
                <button className='loginBtn' type='submit'>Register</button>
            </div>
            <div className='text-center regNext'>Got an account already?<span><Link to="/login" className='text-decoration-none'> Sign In!</Link></span></div> 
           </div>
        </div>
    )
}