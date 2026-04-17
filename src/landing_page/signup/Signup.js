import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3002';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

function Signup() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [signupData, setSignupData] = useState({ fullName: '', email: '', username: '', password: '', confirmPassword: '' });
    const [loginError, setLoginError] = useState('');
    const [signupError, setSignupError] = useState('');
    const [signupSuccess, setSignupSuccess] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('');
    const [verifyCode, setVerifyCode] = useState('');
    const [verifyEmail, setVerifyEmail] = useState('');
    const [verifyMsg, setVerifyMsg] = useState('');
    const [verifyError, setVerifyError] = useState('');
    const [showVerifyStep, setShowVerifyStep] = useState(false);
    const [showLoginPw, setShowLoginPw] = useState(false);
    const [showSignupPw, setShowSignupPw] = useState(false);
    const [showConfirmPw, setShowConfirmPw] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('authToken')) navigate('/portfolio-dashboard');
    }, [navigate]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const oauthToken = params.get('oauthToken');
        if (oauthToken) {
            localStorage.setItem('authToken', oauthToken);
            navigate('/portfolio-dashboard');
        }
    }, [navigate]);

    const handleLoginChange = e => {
        setLoginData(p => ({ ...p, [e.target.name]: e.target.value }));
        setLoginError('');
    };
    const handleSignupChange = e => {
        setSignupData(p => ({ ...p, [e.target.name]: e.target.value }));
        setSignupError('');
        setSignupSuccess('');
    };

    const isValidEmail = value => EMAIL_REGEX.test(String(value || '').trim());

    const oauthLogin = () => {
        window.location.href = `${API_BASE_URL}/auth/google/start?returnTo=${encodeURIComponent(window.location.origin + '/signup')}`;
    };

    const handleLogin = async e => {
        e.preventDefault();
        if (!loginData.email || !loginData.password) return setLoginError('Please fill in all fields');
        if (!isValidEmail(loginData.email)) return setLoginError('Please enter a valid email address');
        if (loginData.password.length < 6) return setLoginError('Password must be at least 6 characters');
        try {
            const res = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData)
            });
            const data = await res.json();
            if (res.ok) {
                setLoginSuccess('Login successful! Redirecting…');
                localStorage.setItem('authToken', data.token);
                setTimeout(() => { navigate('/portfolio-dashboard'); }, 900);
            } else setLoginError(data.message || 'Invalid credentials');
        } catch { setLoginError('Error contacting server'); }
    };

    const handleSignup = async e => {
        e.preventDefault();
        const { fullName, email, username, password, confirmPassword } = signupData;
        if (!fullName || !email || !username || !password || !confirmPassword) return setSignupError('Please fill in all fields');
        if (!isValidEmail(email)) return setSignupError('Please enter a valid email address');
        if (password !== confirmPassword) return setSignupError('Passwords do not match');
        if (password.length < 6) return setSignupError('Password must be at least 6 characters');
        try {
            const res = await fetch(`${API_BASE_URL}/signup`, {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullName, email, username, password })
            });
            const result = await res.json();
            if (res.ok) {
                setSignupSuccess(result.message || 'Account created. Verification code sent to your email.');
                setVerifyEmail((result.email || email).toLowerCase());
                setShowVerifyStep(true);
            } else setSignupError(result.message || 'Signup failed');
        } catch { setSignupError('Error contacting server'); }
    };

    const handleVerifyEmail = async () => {
        setVerifyError('');
        setVerifyMsg('');

        if (!verifyCode || verifyCode.trim().length < 6) {
            return setVerifyError('Please enter the 6-digit verification code');
        }

        try {
            const res = await fetch(`${API_BASE_URL}/verify-email`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: verifyEmail, code: verifyCode.trim() })
            });
            const result = await res.json();
            if (res.ok) {
                setVerifyMsg(result.message || 'Email verified successfully');
                setVerifyCode('');
                setShowVerifyStep(false);
                setIsLogin(true);
                setLoginData({ email: verifyEmail, password: '' });
                setSignupData({ fullName: '', email: '', username: '', password: '', confirmPassword: '' });
            } else {
                setVerifyError(result.message || 'Verification failed');
            }
        } catch {
            setVerifyError('Error contacting server');
        }
    };

    const handleResendCode = async () => {
        setVerifyError('');
        setVerifyMsg('');
        try {
            const res = await fetch(`${API_BASE_URL}/resend-verification`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: verifyEmail })
            });
            const result = await res.json();
            if (res.ok) {
                setVerifyMsg(result.message || 'Verification code sent');
            } else {
                setVerifyError(result.message || 'Unable to resend code');
            }
        } catch {
            setVerifyError('Error contacting server');
        }
    };

    const eyeIcon = show => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {show
                ? <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></>
                : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>
            }
        </svg>
    );

    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
            .auth-page {
                font-family: 'Inter', sans-serif;
                min-height: 100vh; background: #fafafa;
                display: flex; align-items: center; justify-content: center;
                padding: 40px 16px;
            }
            .auth-card {
                background: #fff; border: 1px solid #e5e7eb;
                border-radius: 16px; padding: 40px 40px;
                width: 100%; max-width: 420px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.04);
            }
            .auth-brand { font-weight: 600; font-size: 16px; color: #111; margin-bottom: 32px; display: flex; align-items: center; gap: 7px; }
            .auth-brand-dot { width: 6px; height: 6px; background: #2563eb; border-radius: 50%; }
            .auth-h1 { font-size: 22px; font-weight: 600; color: #111; letter-spacing: -0.4px; margin-bottom: 6px; }
            .auth-sub { font-size: 14px; color: #9ca3af; margin-bottom: 28px; }
            .auth-tabs { display: flex; gap: 0; margin-bottom: 28px; border-bottom: 1px solid #e5e7eb; }
            .auth-tab {
                font-size: 14px; font-weight: 500; padding: 8px 0; margin-right: 24px;
                color: #9ca3af; background: none; border: none; cursor: pointer;
                border-bottom: 2px solid transparent; margin-bottom: -1px; transition: color 0.15s, border-color 0.15s;
            }
            .auth-tab.active { color: #2563eb; border-bottom-color: #2563eb; }
            .auth-label { font-size: 13px; font-weight: 500; color: #374151; margin-bottom: 6px; display: block; }
            .auth-input {
                width: 100%; padding: 10px 14px; font-size: 14px; font-family: 'Inter', sans-serif;
                border: 1px solid #e5e7eb; border-radius: 8px; outline: none;
                transition: border-color 0.15s; box-sizing: border-box; color: #111; background: #fff;
            }
            .auth-input:focus { border-color: #2563eb; }
            .auth-input-wrap { position: relative; margin-bottom: 16px; }
            .auth-eye {
                position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
                background: none; border: none; cursor: pointer; color: #9ca3af;
                display: flex; align-items: center;
            }
            .auth-alert {
                font-size: 13px; padding: 10px 14px; border-radius: 7px;
                margin-bottom: 16px;
            }
            .auth-alert.error { background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; }
            .auth-alert.success { background: #f0fdf4; color: #16a34a; border: 1px solid #bbf7d0; }
            .auth-btn {
                width: 100%; padding: 11px; font-size: 14px; font-weight: 500;
                color: #fff; background: #111; border: none; border-radius: 8px;
                cursor: pointer; transition: background 0.15s; margin-top: 4px; font-family: 'Inter', sans-serif;
            }
            .auth-btn:hover { background: #333; }
            .auth-switch { font-size: 13px; color: #9ca3af; text-align: center; margin-top: 20px; }
            .auth-switch-link { color: #2563eb; font-weight: 500; cursor: pointer; text-decoration: none; }
            .auth-switch-link:hover { text-decoration: underline; }
            .auth-divider { border: none; border-top: 1px solid #f3f4f6; margin: 20px 0; }
            .auth-help { text-align: center; }
            .auth-help a { font-size: 13px; color: #9ca3af; text-decoration: none; margin: 0 8px; }
            .auth-help a:hover { color: #111; }
            .auth-field-row { margin-bottom: 16px; }
            .oauth-btn {
                width: 100%; padding: 11px; font-size: 14px; font-weight: 500;
                color: #111; background: #fff; border: 1px solid #d1d5db; border-radius: 8px;
                cursor: pointer; transition: border-color 0.15s, background 0.15s;
                margin-top: 12px; font-family: 'Inter', sans-serif;
                display: inline-flex; align-items: center; justify-content: center; gap: 8px;
            }
            .oauth-btn:hover { border-color: #9ca3af; background: #f9fafb; }
            .verify-box {
                margin-top: 16px;
                border: 1px solid #e5e7eb;
                border-radius: 10px;
                padding: 14px;
                background: #fafcff;
            }
            .verify-title { font-size: 13px; font-weight: 600; color: #111; margin-bottom: 6px; }
            .verify-sub { font-size: 12px; color: #6b7280; margin-bottom: 12px; }
            .link-btn {
                background: none;
                border: none;
                color: #2563eb;
                cursor: pointer;
                font-size: 12px;
                padding: 0;
                margin-top: 8px;
            }
        `}</style>
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-brand"><span className="auth-brand-dot"></span>RealTime Fintech Trading Engine</div>
                <h1 className="auth-h1">{isLogin ? 'Welcome back' : 'Create your account'}</h1>
                <p className="auth-sub">{isLogin ? 'Log in to your trading account' : 'Start trading in minutes, for free'}</p>

                <div className="auth-tabs">
                    <button className={`auth-tab${isLogin ? ' active' : ''}`} onClick={() => setIsLogin(true)}>Log in</button>
                    <button className={`auth-tab${!isLogin ? ' active' : ''}`} onClick={() => setIsLogin(false)}>Sign up</button>
                </div>

                {isLogin ? (
                    <form onSubmit={handleLogin}>
                        {loginSuccess && <div className="auth-alert success">{loginSuccess}</div>}
                        {verifyMsg && <div className="auth-alert success">{verifyMsg}</div>}
                        {loginError && <div className="auth-alert error">{loginError}</div>}
                        <div className="auth-field-row">
                            <label className="auth-label">Email</label>
                            <input className="auth-input" type="email" name="email" value={loginData.email} onChange={handleLoginChange} placeholder="Enter your email" autoComplete="email" />
                        </div>
                        <div className="auth-field-row">
                            <label className="auth-label">Password</label>
                            <div className="auth-input-wrap" style={{marginBottom:0}}>
                                <input className="auth-input" type={showLoginPw ? 'text' : 'password'} name="password" value={loginData.password} onChange={handleLoginChange} placeholder="Enter your password" autoComplete="current-password" style={{paddingRight: 40}} />
                                <button type="button" className="auth-eye" onClick={() => setShowLoginPw(p => !p)}>{eyeIcon(showLoginPw)}</button>
                            </div>
                        </div>
                        <button type="submit" className="auth-btn" style={{marginTop: 20}}>Log in</button>
                        <button type="button" className="oauth-btn" onClick={oauthLogin}><i className="fa fa-google" aria-hidden="true"></i>Continue with Google</button>
                        <hr className="auth-divider" />
                        <div className="auth-help">
                            <a href="#">Forgot password?</a>
                            <a href="#">Need help?</a>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={handleSignup}>
                        {signupSuccess && <div className="auth-alert success">{signupSuccess}</div>}
                        {signupError && <div className="auth-alert error">{signupError}</div>}
                        <div className="auth-field-row">
                            <label className="auth-label">Full name</label>
                            <input className="auth-input" name="fullName" value={signupData.fullName} onChange={handleSignupChange} placeholder="Your full name" />
                        </div>
                        <div className="auth-field-row">
                            <label className="auth-label">Email address</label>
                            <input className="auth-input" type="email" name="email" value={signupData.email} onChange={handleSignupChange} placeholder="you@example.com" autoComplete="email" />
                        </div>
                        <div className="auth-field-row">
                            <label className="auth-label">Username</label>
                            <input className="auth-input" name="username" value={signupData.username} onChange={handleSignupChange} placeholder="Choose a username" autoComplete="username" />
                        </div>
                        <div className="auth-field-row">
                            <label className="auth-label">Password</label>
                            <div className="auth-input-wrap" style={{marginBottom:0}}>
                                <input className="auth-input" type={showSignupPw ? 'text' : 'password'} name="password" value={signupData.password} onChange={handleSignupChange} placeholder="Min 6 characters" style={{paddingRight: 40}} />
                                <button type="button" className="auth-eye" onClick={() => setShowSignupPw(p => !p)}>{eyeIcon(showSignupPw)}</button>
                            </div>
                        </div>
                        <div className="auth-field-row">
                            <label className="auth-label">Confirm password</label>
                            <div className="auth-input-wrap" style={{marginBottom:0}}>
                                <input className="auth-input" type={showConfirmPw ? 'text' : 'password'} name="confirmPassword" value={signupData.confirmPassword} onChange={handleSignupChange} placeholder="Repeat password" style={{paddingRight: 40}} />
                                <button type="button" className="auth-eye" onClick={() => setShowConfirmPw(p => !p)}>{eyeIcon(showConfirmPw)}</button>
                            </div>
                        </div>
                        <button type="submit" className="auth-btn" style={{marginTop: 20}}>Create account</button>
                        <button type="button" className="oauth-btn" onClick={oauthLogin}><i className="fa fa-google" aria-hidden="true"></i>Sign up with Google</button>

                        {showVerifyStep && (
                            <div className="verify-box">
                                <div className="verify-title">Verify your email</div>
                                <div className="verify-sub">Enter the 6-digit code sent to {verifyEmail}</div>
                                {verifyError && <div className="auth-alert error" style={{marginBottom: 10}}>{verifyError}</div>}
                                {verifyMsg && <div className="auth-alert success" style={{marginBottom: 10}}>{verifyMsg}</div>}
                                <input
                                    className="auth-input"
                                    value={verifyCode}
                                    onChange={e => setVerifyCode(e.target.value)}
                                    placeholder="Enter verification code"
                                    maxLength={6}
                                />
                                <button type="button" className="auth-btn" style={{marginTop: 10}} onClick={handleVerifyEmail}>Verify email</button>
                                <button type="button" className="link-btn" onClick={handleResendCode}>Resend code</button>
                            </div>
                        )}

                        <div className="auth-switch" style={{marginTop: 16}}>
                            <span style={{fontSize:12, color:'#9ca3af'}}>By signing up you agree to our <a href="#" className="auth-switch-link">Terms</a></span>
                        </div>
                    </form>
                )}

                <div className="auth-switch" style={{marginTop: 20}}>
                    {isLogin
                        ? <>No account? <span className="auth-switch-link" onClick={() => setIsLogin(false)}>Sign up free →</span></>
                        : <>Already have an account? <span className="auth-switch-link" onClick={() => setIsLogin(true)}>Log in</span></>
                    }
                </div>
            </div>
        </div>
        </>
    );
}

export default Signup;
