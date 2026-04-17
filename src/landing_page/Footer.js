import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
            .footer {
                font-family: 'Inter', sans-serif;
                background: linear-gradient(180deg, #ffffff 0%, #f9fbff 100%);
                border-top: 1px solid #e5e7eb;
                padding: 60px 32px 32px;
            }
            .footer-inner { max-width: 1200px; margin: 0 auto; }
            .footer-top {
                display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px;
                margin-bottom: 48px;
            }
            .footer-brand-name {
                font-weight: 600; font-size: 16px; color: #111; margin-bottom: 10px;
                display: flex; align-items: center; gap: 7px;
            }
            .footer-brand-dot { width: 6px; height: 6px; background: #2563eb; border-radius: 50%; }
            .footer-brand-desc { font-size: 13px; color: #9ca3af; line-height: 1.65; max-width: 260px; margin-bottom: 20px; }
            .footer-social { display: flex; gap: 10px; }
            .footer-social-btn {
                width: 32px; height: 32px; border: 1px solid #e5e7eb; border-radius: 7px;
                display: flex; align-items: center; justify-content: center;
                color: #6b7280; font-size: 13px; text-decoration: none;
                transition: border-color 0.15s, color 0.15s;
            }
            .footer-social-btn:hover { border-color: #9ca3af; color: #111; }
            .footer-col-title { font-size: 12px; font-weight: 600; color: #111; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 16px; }
            .footer-links { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 9px; }
            .footer-links a { font-size: 13px; color: #6b7280; text-decoration: none; transition: color 0.15s; }
            .footer-links a:hover { color: #111; }
            .footer-bottom {
                border-top: 1px solid #f3f4f6; padding-top: 24px;
                display: flex; justify-content: space-between; align-items: center;
                flex-wrap: wrap; gap: 12px;
            }
            .footer-copy { font-size: 12px; color: #9ca3af; }
            .footer-legal { display: flex; gap: 20px; }
            .footer-legal a { font-size: 12px; color: #9ca3af; text-decoration: none; }
            .footer-legal a:hover { color: #111; }
            .footer-disclaimer {
                margin-bottom: 32px; padding: 20px 24px;
                background: #f9fafb; border-radius: 10px; border: 1px solid #f3f4f6;
            }
            .footer-disclaimer p { font-size: 12px; color: #9ca3af; line-height: 1.7; margin: 0; }
            @media (max-width: 768px) {
                .footer-top { grid-template-columns: 1fr 1fr; }
            }
        `}</style>
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-top">
                    <div>
                        <div className="footer-brand-name">
                            <span className="footer-brand-dot"></span>
                            RealTime Fintech Trading Engine
                        </div>
                        <p className="footer-brand-desc">A real-time fintech trading engine built for speed, reliability, and transparency.</p>
                        <div className="footer-social">
                            <a href="https://twitter.com" className="footer-social-btn" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="https://github.com" className="footer-social-btn" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com" className="footer-social-btn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div>
                        <div className="footer-col-title">Platform</div>
                        <ul className="footer-links">
                            <li><Link to="/product">Products</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/support">API Docs</Link></li>
                            <li><Link to="/support">System status</Link></li>
                        </ul>
                    </div>
                    <div>
                        <div className="footer-col-title">Company</div>
                        <ul className="footer-links">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/about">Blog</Link></li>
                            <li><Link to="/about">Careers</Link></li>
                            <li><Link to="/about">Press</Link></li>
                        </ul>
                    </div>
                    <div>
                        <div className="footer-col-title">Support</div>
                        <ul className="footer-links">
                            <li><Link to="/support">Help center</Link></li>
                            <li><Link to="/support">Contact us</Link></li>
                            <li><Link to="/support">Community</Link></li>
                            <li><Link to="/support">Compliance</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-disclaimer">
                    <p><strong style={{color:'#6b7280'}}><i className="fa fa-exclamation-triangle" aria-hidden="true"></i> Risk Disclosure:</strong> Trading in financial markets carries substantial risk of loss. Only trade with money you can afford to lose. Past performance does not guarantee future results. All transactions are encrypted and processed securely.</p>
                </div>
                <div className="footer-bottom">
                    <div className="footer-copy">© 2024–2025 RealTime Fintech Trading Engine. All rights reserved.</div>
                    <div className="footer-legal">
                        <Link to="/support">Terms</Link>
                        <Link to="/support">Privacy</Link>
                        <Link to="/support">Security</Link>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;
