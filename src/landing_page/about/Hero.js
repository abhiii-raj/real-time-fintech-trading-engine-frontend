import React from 'react';

function Hero() {
    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
            .about-hero {
                font-family: 'Inter', sans-serif;
                max-width: 1200px; margin: 0 auto; padding: 80px 32px 48px;
            }
            .about-tag {
                font-size: 11px; font-weight: 600; color: #2563eb;
                letter-spacing: 1px; text-transform: uppercase; margin-bottom: 14px;
            }
            .about-h1 {
                font-size: 42px; font-weight: 600; color: #111;
                letter-spacing: -0.8px; line-height: 1.1; margin-bottom: 20px;
                max-width: 600px;
            }
            .about-grid {
                display: grid; grid-template-columns: 1fr 1fr; gap: 48px;
                padding-top: 40px; border-top: 1px solid #f3f4f6; margin-top: 40px;
            }
            .about-p { font-size: 15px; color: #6b7280; line-height: 1.75; margin: 0; }
            @media (max-width: 768px) {
                .about-grid { grid-template-columns: 1fr; }
                .about-h1 { font-size: 32px; }
            }
        `}</style>
        <div className="about-hero">
            <div className="about-tag">About RealTime Fintech Trading Engine</div>
            <h1 className="about-h1">Modern technology.<br/>Fast execution.<br/>Transparent pricing.</h1>
            <div className="about-grid">
                <p className="about-p">We built RealTime Fintech Trading Engine to give retail traders access to the same institutional-grade infrastructure that hedge funds use. Our matching engine processes thousands of orders per second with sub-millisecond latency and 99.9% uptime.</p>
                <p className="about-p">We believe trading should be simple, transparent, and affordable. No percentage commissions, no hidden charges, no gamification. Just clean tools that get out of your way and let you focus on what matters — your trades.</p>
            </div>
        </div>
        </>
    );
}

export default Hero;
