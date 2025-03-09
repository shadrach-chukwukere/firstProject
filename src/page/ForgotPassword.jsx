
import www from '../assets/image/www.png'
import { Link } from 'react-router-dom'

export default function ForgotPassword(){
    return(
        <div>
              <div className="loginHead container-fluid text-center w-100 align-content-center">
            Account Recovery
            </div>
            <div className="container-fluid login">
            <div className="row p-0 p-lg-2 logDash">
                <div className="container-fluid col-lg-6 p-4 text-center logGrad">
                    <img src={www} alt="www" className='' />
                </div>
                <div className="container-fluid col-lg-6 p-lg-4 p-3 loginForm">
                    <p className='text-center title'>Verify and Recover Account</p>
                    <form action="">
                    <div className="name">
                            <input type="email" className='container-fluid' placeholder='email'/>
                           </div>
                    <div className="text-center">
                           <button className='loginBtn' type='submit'>Verify</button>
                    </div>
                    </form>
                    <div className="d-flex justify-content-between formNext">
                        <p className='text-center'>Not a client yet?<span><Link className='nav-link' to="/register"> Create Account! </Link></span> </p>
                        <p className='text-center'>Already have an account <span><Link className='nav-link' to="/login" >Click here! </Link></span> </p>
                    </div>
                    </div>
                    </div>
                </div>
        </div>
    )
}