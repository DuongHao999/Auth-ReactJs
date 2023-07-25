import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';

const Authentication = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleSignUpClick = () => {
        setShowLoginForm(false);
    };

    const handleSignInClick = () => {
        setShowLoginForm(true);
    };

    return (
        <div>
            {!showLoginForm ? (
                <div className="Auth-form-container">
                    <div className="Auth-form">
                        <h3 className="Auth-form-title">Sign Up</h3>
                        <p className="Auth-form-question">
                            Already have an account?
                            <span className="link-primary sp-link" onClick={handleSignInClick}>
                                Sign In
                            </span>
                        </p>
                        <Register />
                    </div>
                </div>
            ) : (
                <div className="Auth-form-container">
                    <div className="Auth-form">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <p className="Auth-form-question">
                            Already have an account?
                            <span className="link-primary sp-link" onClick={handleSignUpClick}>
                                Sign Up
                            </span>
                        </p>
                        <Login />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Authentication;