import React from 'react';
import { Link } from 'react-router-dom';
import '../register/register.css';
import ticksuccess from '../../assets/tickgreen.svg';
import tick from '../../assets/tick.svg';

const Register = () => {
    return (
        <div className="register_">
            <div className="register-header">
                <h3><span>Post</span>Bird</h3>
                <p>Registration</p>
            </div>
            <div className="register-form">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="progress-top-bar">
                                    <div className="group1">
                                        <img src={ticksuccess} alt="" />
                                        <p>Personal Info</p>
                                    </div>
                                    <div className="group2">
                                        <img src={tick} alt="" />
                                        <p>Vehicle details</p>
                                    </div>
                                    <div className="group3">
                                        <img src={tick} alt="" />
                                        <p>Documents</p>
                                    </div>
                                </div>
                                <form action="#">
                                    <div className="form-group">
                                        <label htmlFor="">Vehicle Brand</label>
                                        <select name="" id="">
                                            <option value="">Toyota</option>
                                            <option value="">Honda</option>
                                            <option value="">BWM</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Model</label>
                                        <select name="" id="">
                                            <option value="">Camry</option>
                                            <option value="">Corolla</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Year</label>
                                        <select name="" id="">
                                            <option value="">2019</option>
                                            <option value="">2017</option>
                                            <option value="">2016</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Licence Plate</label>
                                        <input type="text" placeholder="43A 435 F4" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Color</label>
                                        <select name="" id="">
                                            <option value="">White</option>
                                            <option value="">Grey</option>
                                            <option value="">Blue</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Booking type</label>
                                        <select name="" id="">
                                            <option value="">Taxi 7 seats</option>
                                            <option value="">Taxi 4 seats</option>
                                        </select>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button>
                                                <Link to='/register-documents'>Continue</Link>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
