import React from 'react';
import '../Fleet-Registration/fleet-registration.css';
import Logo1 from '../../assets/logo.svg';
import rectangle from '../../assets/Rectangle 647.svg';
import {Link} from "react-router-dom";

const FLEET_REGISTRATION = () => {
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
                                <h5>Fleet Owners</h5>
                                <p>If you own a fleet of vechicles or multiple bikes, you can as a fleet owner sign up here.</p>
                                <p><Link to='/driver-registration'>Sign up here,</Link> if you are an individual driver.</p>

                                <div className="form-group">
                                    <label for="" className="mb-2">Email</label>
                                    <input type="text" placeholder="name@example.com" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="" className="mb-2">Full Name</label>
                                    <input type="text" placeholder="John Joe" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="" className="mb-2">Password</label>
                                    <input type="password" placeholder="**********" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="" className="mb-2">Phone number</label>
                                    <input type="text" placeholder="name@example.com" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="" className="mb-2">Vechicles in your feet</label>
                                    <select name="" id="" className="form-control">
                                        <option value="1-5">1-5</option>
                                        <option value="1-5">6-10</option>
                                        <option value="1-5">11-20</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="" className="mb-2 mt-2">City</label>
                                    <select name="" id="" className="form-control mb-2">
                                        <option value="lagos">Lagos</option>
                                        <option value="lagos">Abuja</option>
                                    </select>
                                </div>
                                <button>
                                    <Link to="/register">Continue</Link>
                                </button>
                            </form>

                            <p className="text-center">Have an account? <span>Log in</span></p>
                            <div className="tnc">
                                <img src={rectangle} alt="" />
                                <p>By creating an account, you agree to the <span>Terms and Conditions and Privacy Policy</span></p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FLEET_REGISTRATION;
