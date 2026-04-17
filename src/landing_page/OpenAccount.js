import React from 'react';
import { useNavigate } from 'react-router-dom';

function OpenAccount() {
    const navigate = useNavigate();
    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
            .oa-section {
                font-family: 'Inter', sans-serif;
                background: radial-gradient(circle at 20% 0%, #1e293b 0%, #0a0a0a 60%);
                padding: 88px 32px;
            }
            .oa-inner {
                max-width: 640px; margin: 0 auto; text-align: center;
            }
            .oa-h2 {
                font-size: 36px; font-weight: 600; color: #fff;
                letter-spacing: -0.8px; margin-bottom: 14px;
            }
            .oa-sub { font-size: 16px; color: #9ca3af; line-height: 1.65; margin-bottom: 36px; }
            .oa-btn {
                font-size: 15px; font-weight: 500; color: #111;
                background: #fff; border: none; padding: 13px 32px;
                border-radius: 8px; cursor: pointer; transition: background 0.15s;
                text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
            }
            .oa-btn:hover { background: #e5e7eb; color: #111; }
            .oa-note { font-size: 13px; color: #6b7280; margin-top: 16px; }
            .oa-badge {
                display: inline-flex;
                align-items: center;
                gap: 7px;
                padding: 5px 12px;
                border-radius: 999px;
                border: 1px solid #334155;
                background: rgba(255, 255, 255, 0.06);
                color: #cbd5e1;
                font-size: 12px;
                margin-bottom: 18px;
            }
        `}</style>
        <section className="oa-section">
            <div className="oa-inner">
                <div className="oa-badge"><i className="fa fa-clock-o" aria-hidden="true"></i>Setup in under 5 minutes</div>
                <h2 className="oa-h2">Ready to start trading?</h2>
                <p className="oa-sub">Open your account in minutes. No paperwork, no branch visits — 100% online.</p>
                <button className="oa-btn" onClick={() => navigate('/signup')}><i className="fa fa-user-plus" aria-hidden="true"></i>Open free account</button>
                <p className="oa-note">No minimum balance required.</p>
            </div>
        </section>
        </>
    );
}

export default OpenAccount;
