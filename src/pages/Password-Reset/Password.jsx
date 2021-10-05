import React from 'react';
import '../Fleet-Registration/fleet-registration.css';
import Logo1 from '../../assets/logo.svg';
import {Link} from "react-router-dom";

const RESET_PASSWORD = () => {
    return (
        <div className="login-page">
            <div className="login-header">
                <div className="container">
                    <div className="contents">
                        <Link class="navbar-brand" to='/'>
                            <img src={Logo1} alt="logo" className="logo"/>
                        </Link>
                        <p>Reset Password</p>
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-8">
                        <div className="form-content">
                            <form action="#">
                                <h5 className="mb-3">Reset Password</h5>
                                <p className="mb-4">Please enter your email address and we’ll email you instructions to reset your password.</p>

                                <div className="form-group">
                                    <label for="" className="mb-2">Email</label>
                                    <input type="text" placeholder="name@example.com" className="form-control"/>
                                </div>
                                
                                <button>
                                    <Link to="/email-verification">Continue</Link>
                                </button>
                            </form>

                            <div className="tnc justify-content-center">
                                <p className="text-center">Don't have an account?
                                     <span> 
                                         <Link to='/fleet-registration'> Register here</Link>
                                    </span>
                                </p>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RESET_PASSWORD;
