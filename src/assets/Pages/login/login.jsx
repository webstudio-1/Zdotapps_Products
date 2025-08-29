import React, { useState, useEffect } from 'react';
import styles from './login.module.css'; // Import the CSS module


const Login = () => {
    const [emailMobile, setEmailMobile] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [showPassword, setShowPassword] = useState(false);
    const [contactMethod, setContactMethod] = useState('');
    const [showLoginSection, setShowLoginSection] = useState(true);
    const [emailMobileError, setEmailMobileError] = useState('');
    const [passwordOtpError, setPasswordOtpError] = useState('');
    const [forgotEmail, setForgotEmail] = useState('');

    useEffect(() => {
        // Initialize Bootstrap Toasts only if bootstrap is available globally
        if (window && window.bootstrap && typeof window.bootstrap.Toast === 'function') {
            const toastElList = Array.prototype.slice.call(document.querySelectorAll('.toast'));
            toastElList.forEach(function (toastEl) {
                return new window.bootstrap.Toast(toastEl);
            });
        }
    }, []);

    const handleEmailMobileChange = (e) => {
        const { value } = e.target;
        // Limit mobile number to 10 digits
        if (/^\d+$/.test(value) && value.length > 10) {
            setEmailMobile(value.slice(0, 10));
        } else {
            setEmailMobile(value);
        }
        setEmailMobileError(''); // Clear error on change
    };

    const handleOtpChange = (e, index) => {
        const { value } = e.target;
        if (/^\d*$/.test(value)) { // Only allow digits
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move focus to the next input if a digit is entered
            if (value && index < otp.length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
        setPasswordOtpError(''); // Clear error on change
    };

    const handleOtpKeyDown = (e, index) => {
        if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus();
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleGetKeyFrom = (method) => {
        setContactMethod(method); // Store the selected method
        if (!emailMobile) {
            setEmailMobileError("Please enter your registered email or mobile number.");
            return;
        }

        // --- Frontend Simulation of OTP sending (replace with actual API call) ---
        let message = '';
        if (method === 'whatsapp') {
            message = "Key sent to your registered mobile number via WhatsApp";
        } else if (method === 'email') {
            message = "Key sent to your registered email address";
        } else if (method === 'Ontropi') {
            message = "Key sent to your registered Ontropi App (simulated)"; // Your HTML had 'Ontropi' but referenced 'zdotapps_icon_v4.png' with alt 'Ontropi Icon' and data-value 'Ontropi'. Let's stick with 'Ontropi' for the value.
            swal("Note", "Ontropi App integration requires backend logic.", "info"); // Use swal for specific messages
        }

        // Show toast for success (if not Ontropi for now)
        if (method !== 'Ontropi') {
            const toastBody = document.getElementById('toast-msg');
            if (toastBody) {
                toastBody.innerText = message;
                const toastElement = document.querySelector('.toast');
                if (window && window.bootstrap && typeof window.bootstrap.Toast === 'function' && toastElement) {
                    const toast = new window.bootstrap.Toast(toastElement);
                    toast.show();
                }
            }
        }
        // ---------------------------------------------------------------------
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const fullOtp = otp.join('');

        if (!emailMobile) {
            setEmailMobileError("Please enter your registered email or mobile number.");
            return;
        }

        if (!password && !fullOtp) {
            setPasswordOtpError("Please enter your password or key.");
            return;
        }

        // --- Frontend Simulation of Login (replace with actual API call) ---
        console.log('Login attempt:', { emailMobile, password, otp: fullOtp });

        if ((emailMobile === 'lokesh.v@station-s.org' || emailMobile === '9121440767') && (password === '123' || fullOtp === '123456')) {
            swal("Success", "Logged in successfully!", "success");
            // Simulate redirection
            // window.location.href = '/dashboard';
        } else {
            swal("Login Failed", "Invalid credentials or OTP.", "error");
        }
        // ------------------------------------------------------------------
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        if (!forgotEmail) {
            swal("Warning", "Please enter your email ID.", "warning");
            return;
        }

        // --- Frontend Simulation of Forgot Password (replace with actual API call) ---
        console.log('Forgot password request for:', forgotEmail);
        swal("Password Reset Initiated!", "Your password (simulated) has been sent to your email.", "success");
        setShowLoginSection(true); // Go back to login after simulation
        // --------------------------------------------------------------------------
    };

    return (
        <form onSubmit={showLoginSection ? handleLogin : handleForgotPassword}>
            <div className="container-fluid">
                <div className="row">
                    <div className={`${styles.imageSection} col-lg-8`}>
                        <div className={`${styles.formContainer} ${showLoginSection ? '' : 'd-none'}`} id="logincheck_section">
                            <div className="text-center mb-5">
                                <img src="https://zdotapps.com/gidER/images/gider%20white.png" alt="Logo" className={styles.logo} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email_mobile" className="form-label">Email Id or Mobile Number</label>
                                <input
                                    type="text"
                                    id="email_mobile"
                                    name="email_mobile"
                                    className={`form-control text-white bg-transparent border-white ${styles.inputField}`}
                                    value={emailMobile}
                                    onChange={handleEmailMobileChange}
                                    required
                                    autoComplete="off"
                                />
                                {emailMobileError && <small className="form-text" style={{ fontSize: '1.1rem', color: 'red' }}>{emailMobileError}</small>}
                            </div>

                            <div className="mb-3 d-flex align-items-center justify-content-between">
                                <p className="mb-0 me-3 text-nowrap">Get key from:</p>
                                <div className="d-flex" style={{ marginRight: '60px' }}>
                                    <div className={`${styles.iconContainer} me-3`}>
                                        <img
                                            src="https://zdotapps.com/gidER/assets/img/email_icon_v5.png"
                                            alt="Email Icon"
                                            className={`${styles.icon} ${styles.item}`}
                                            onClick={() => handleGetKeyFrom('email')}
                                        />
                                    </div>
                                    <div className={`${styles.iconContainer} me-3`}>
                                        <img
                                            src="https://zdotapps.com/gidER/assets/img/whatsapp_icon_v4.png"
                                            alt="WhatsApp Icon"
                                            className={`${styles.icon} ${styles.item}`}
                                            onClick={() => handleGetKeyFrom('whatsapp')}
                                        />
                                    </div>
                                    <div className={styles.iconContainer}>
                                        <img
                                            src="https://zdotapps.com/gidER/assets/img/zdotapps_icon_v4.png"
                                            alt="Ontropi Icon"
                                            className={`${styles.icon} ${styles.item}`}
                                            onClick={() => handleGetKeyFrom('Ontropi')}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="mb-2 d-block">Enter Key</label>
                                <div className="d-flex justify-content-between">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            id={`otp-input-${index}`}
                                            type="text"
                                            className={styles.otpInput}
                                            maxLength="1"
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            value={digit}
                                            onChange={(e) => handleOtpChange(e, index)}
                                            onKeyDown={(e) => handleOtpKeyDown(e, index)}
                                        />
                                    ))}
                                </div>
                            </div>
                            {passwordOtpError && <small className="form-text" style={{ fontSize: '1.1rem', color: 'red' }}>{passwordOtpError}</small>}

                            <div className="mb-3">
                                <p className="mb-1 text-center">(OR)</p>
                                <label htmlFor="password" className="form-label">Password</label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        className={`form-control text-white bg-transparent border-white ${styles.inputField}`}
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value); setPasswordOtpError(''); }}
                                    />
                                    <span className={styles.togglePassword} onClick={togglePasswordVisibility}>
                                        <i className={showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'} id="eyePassword"></i>
                                    </span>
                                </div>
                            </div>

                            <p className="text-left">
                                <a className={styles.forgotPwdLink} onClick={() => setShowLoginSection(false)}> Forgot Password?</a>
                            </p>

                            <div className="mb-3 text-center">
                                <button type="submit" className="btn btn-light w-100">
                                    Log in
                                </button>
                            </div>
                        </div>

                        <div className={`${styles.formContainer} ${showLoginSection ? 'd-none' : ''}`} id="forgot_pwd_section">
                            <div className="text-center mb-5">
                                <img src="https://zdotapps.com/gidER/images/gider%20white.png" alt="Logo" className={styles.logo} />
                            </div>

                            <div className="text-center mb-2">
                                <p style={{ fontSize: '1.5rem' }}>Forgotten password?</p>
                                <p style={{ fontSize: '15px' }}>Enter your email to reset your password:</p>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="emailID" className="form-label">Email Id</label>
                                <input
                                    type="text"
                                    id="emailID"
                                    name="emailID"
                                    className={`form-control text-white bg-transparent border-white ${styles.inputField}`}
                                    value={forgotEmail}
                                    onChange={(e) => setForgotEmail(e.target.value)}
                                    required
                                    autoComplete="off"
                                />
                            </div>

                            <div className="mb-3 text-center">
                                <button type="submit" className="btn btn-light w-100 mb-3">Proceed</button>
                                <button type="button" className="btn btn-secondary w-100" onClick={() => setShowLoginSection(true)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.toastContainer}>
                <div className="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true" style={{ backgroundColor: '#24A4C4 !important' }}>
                    <div className="d-flex">
                        <div id="toast-msg" className="toast-body">
                            <i className="bi bi-check-circle ms-2"></i>
                        </div>
                        <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;