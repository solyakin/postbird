import React from 'react';
import '../Fleet-Registration/fleet-registration.css';
import Logo1 from '../../assets/logo.svg';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="login-page">
            <div className="login-header">
                <div className="container">
                    <div className="contents">
                        <Link class="navbar-brand" to='/'>
                            <img src={Logo1} alt="logo" className="logo"/>
                        </Link>
                        <p>LOG IN</p>
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-8">
                        <div className="form-content">
                            <form action="#">
                                <h5 className="mb-3">Log in to manage your account</h5>
                                <p className="mb-4">Hello welcome back to your account.</p>

                                <div className="form-group">
                                    <label for="" className="mb-2">Email</label>
                                    <input type="text" placeholder="name@example.com" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="" className="mb-2">Password</label>
                                    <input type="password" placeholder="**********" className="form-control"/>
                                </div>
                                <button>
                                    <Link to="/reset-password">Login</Link>
                                </button>
                            </form>

                            <p className="text-center"> <span>Forgot Password?</span></p>
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

export default Login;
