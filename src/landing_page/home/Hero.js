import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();
    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
            .hero-wrap {
                font-family: 'Inter', sans-serif;
                max-width: 1200px; margin: 0 auto;
                padding: 104px 32px 84px;
                display: flex; flex-direction: column; align-items: center; text-align: center;
                position: relative;
            }
            .hero-wrap::before {
                content: '';
                position: absolute;
                width: 380px;
                height: 380px;
                right: -120px;
                top: -140px;
                background: radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0) 70%);
                pointer-events: none;
            }
            .hero-label {
                display: inline-flex; align-items: center; gap: 6px;
                font-size: 12px; font-weight: 500; color: #2563eb;
                background: #eff6ff; border: 1px solid #bfdbfe;
                padding: 4px 12px; border-radius: 20px; margin-bottom: 32px;
                letter-spacing: 0.3px; text-transform: uppercase;
            }
            .hero-label span { width: 5px; height: 5px; background: #2563eb; border-radius: 50%; }
            .hero-h1 {
                font-size: clamp(38px, 6vw, 68px);
                font-weight: 600; color: #0a0a0a;
                line-height: 1.1; letter-spacing: -1.5px;
                margin-bottom: 20px; max-width: 760px;
            }
            .hero-h1 em { font-style: normal; color: #2563eb; }
            .hero-sub {
                font-size: 17px; color: #6b7280; font-weight: 400;
                line-height: 1.65; max-width: 500px; margin-bottom: 40px;
            }
            .hero-actions { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; justify-content: center; }
            .hero-btn-main {
                font-size: 15px; font-weight: 500; color: #fff;
                background: linear-gradient(120deg, #0f172a, #1e293b);
                border: none; padding: 12px 28px;
                border-radius: 10px; cursor: pointer; transition: background 0.15s, transform 0.15s;
                text-decoration: none;
                display: inline-flex; align-items: center; gap: 8px;
            }
            .hero-btn-main:hover { background: linear-gradient(120deg, #0f172a, #334155); color: #fff; transform: translateY(-1px); }
            .hero-btn-ghost {
                font-size: 15px; font-weight: 400; color: #374151;
                background: none; border: 1px solid #d1d5db;
                padding: 12px 28px; border-radius: 10px; cursor: pointer;
                transition: border-color 0.15s, background 0.15s, transform 0.15s;
                text-decoration: none;
                display: inline-flex; align-items: center; gap: 8px;
            }
            .hero-btn-ghost:hover { border-color: #9ca3af; background: #f9fafb; color: #111; transform: translateY(-1px); }
            .hero-stats {
                display: flex; gap: 48px; margin-top: 72px;
                padding-top: 40px; border-top: 1px solid #f3f4f6;
                flex-wrap: wrap; justify-content: center;
            }
            .hero-stat-icon {
                width: 28px; height: 28px; border-radius: 8px;
                display: inline-flex; align-items: center; justify-content: center;
                background: #f1f5f9; color: #475569; font-size: 13px; margin-bottom: 8px;
            }
            .hero-stat-num { font-size: 28px; font-weight: 600; color: #111; letter-spacing: -0.5px; }
            .hero-stat-lbl { font-size: 13px; color: #9ca3af; margin-top: 2px; }
        `}</style>
        <div className="hero-wrap">
            <div className="hero-label"><span></span>Real-time trading engine</div>
            <h1 className="hero-h1">Trade smarter.<br/><em>Move faster.</em></h1>
            <p className="hero-sub">
                Professional-grade tools, real-time market data, and zero-commission equity delivery — built for traders who mean business.
            </p>
            <div className="hero-actions">
                <button className="hero-btn-main" onClick={() => navigate('/signup')}><i className="fa fa-rocket" aria-hidden="true"></i>Open free account</button>
                <button className="hero-btn-ghost" onClick={() => navigate('/product')}><i className="fa fa-play-circle-o" aria-hidden="true"></i>See how it works</button>
            </div>
            <div className="hero-stats">
                <div>
                    <div className="hero-stat-icon"><i className="fa fa-inr" aria-hidden="true"></i></div>
                    <div className="hero-stat-num">₹0</div>
                    <div className="hero-stat-lbl">Equity delivery brokerage</div>
                </div>
                <div>
                    <div className="hero-stat-icon"><i className="fa fa-exchange" aria-hidden="true"></i></div>
                    <div className="hero-stat-num">₹20</div>
                    <div className="hero-stat-lbl">Flat F&amp;O fee per order</div>
                </div>
                <div>
                    <div className="hero-stat-icon"><i className="fa fa-shield" aria-hidden="true"></i></div>
                    <div className="hero-stat-num">99.9%</div>
                    <div className="hero-stat-lbl">Platform uptime</div>
                </div>
                <div>
                    <div className="hero-stat-icon"><i className="fa fa-bolt" aria-hidden="true"></i></div>
                    <div className="hero-stat-num">&lt;1ms</div>
                    <div className="hero-stat-lbl">Order execution latency</div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Hero;
