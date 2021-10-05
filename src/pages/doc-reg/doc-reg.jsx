import React from 'react';
import '../register/register.css';
import ticksuccess from '../../assets/tickgreen.svg';
import tick from '../../assets/tick.svg';

const DOCUMENT_REGISTRATION = () => {
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
                                        <img src={ticksuccess} alt="" />
                                        <p>Vehicle details</p>
                                    </div>
                                    <div className="group3">
                                        <img src={tick} alt="" />
                                        <p>Documents</p>
                                    </div>
                                </div>
                                
                                <div className="documents">
                                    <h4>Driver’s profile photo</h4>
                                    <p>Your profile photo helps people recognize you. Please face the camera directly with your eyes open and mouth visible</p>
                                    <div className="text-right">
                                        <input type="file" name="" id="" className="custom-file-input" />
                                    </div>
                                </div>
                                <div className="documents">
                                    <h4>Driver’s Licence</h4>
                                    <p>Expiry date</p>
                                    <div className="text-right">
                                        <input type="file" name="" id="" className="custom-file-input" />
                                    </div>
                                </div>
                                <div className="documents">
                                    <h4>Identification card</h4>
                                    <p>Take a photo of your identification card and make sure all four corners are visible.</p>
                                    <div className="text-right">
                                        <input type="file" name="" id="" className="custom-file-input" />
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-12">
                                        <button>Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DOCUMENT_REGISTRATION;
