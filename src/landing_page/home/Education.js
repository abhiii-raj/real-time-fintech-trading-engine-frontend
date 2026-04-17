import React from 'react';

function Education() {
    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
            .edu-section {
                font-family: 'Inter', sans-serif;
                padding: 88px 32px;
            }
            .edu-inner {
                max-width: 1200px; margin: 0 auto;
                display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
            }
            .edu-tag {
                font-size: 11px; font-weight: 600; color: #2563eb;
                letter-spacing: 1px; text-transform: uppercase; margin-bottom: 14px;
            }
            .edu-h2 {
                font-size: 32px; font-weight: 600; color: #0a0a0a;
                letter-spacing: -0.6px; line-height: 1.2; margin-bottom: 16px;
            }
            .edu-sub { font-size: 15px; color: #6b7280; line-height: 1.65; margin-bottom: 36px; }
            .edu-cards { display: flex; flex-direction: column; gap: 12px; }
            .edu-card {
                background: #f9fafb; border: 1px solid #f3f4f6;
                border-radius: 10px; padding: 20px 24px;
                display: flex; align-items: flex-start; gap: 16px;
                transition: transform 0.18s ease, box-shadow 0.18s ease;
            }
            .edu-card:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 22px rgba(15, 23, 42, 0.07);
            }
            .edu-icon {
                width: 36px; height: 36px; background: #eff6ff;
                border-radius: 8px; display: flex; align-items: center;
                justify-content: center; flex-shrink: 0; font-size: 16px; color: #2563eb;
            }
            .edu-card-title { font-size: 14px; font-weight: 600; color: #111; margin-bottom: 4px; }
            .edu-card-desc { font-size: 13px; color: #6b7280; line-height: 1.55; margin: 0; }
            .edu-visual {
                background: linear-gradient(165deg, #f9fafb, #eef2ff);
                border: 1px solid #f3f4f6;
                border-radius: 16px; padding: 48px;
                display: flex; flex-direction: column; align-items: center; justify-content: center;
                min-height: 320px; text-align: center;
            }
            .edu-visual-icon {
                width: 72px;
                height: 72px;
                border-radius: 16px;
                background: #fff;
                border: 1px solid #e5e7eb;
                color: #2563eb;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 32px;
                margin-bottom: 20px;
            }
            .edu-visual-text { font-size: 22px; font-weight: 600; color: #111; letter-spacing: -0.4px; }
            .edu-visual-sub { font-size: 14px; color: #9ca3af; margin-top: 8px; }
            @media (max-width: 768px) {
                .edu-inner { grid-template-columns: 1fr; gap: 48px; }
            }
        `}</style>
        <section className="edu-section">
            <div className="edu-inner">
                <div>
                    <div className="edu-tag">Learn & grow</div>
                    <h2 className="edu-h2">Free market education for every trader.</h2>
                    <p className="edu-sub">Whether you're placing your first trade or refining a complex strategy, our resources meet you where you are.</p>
                    <div className="edu-cards">
                        <div className="edu-card">
                            <div className="edu-icon"><i className="fa fa-book" aria-hidden="true"></i></div>
                            <div>
                                <div className="edu-card-title">RealTime Fintech Trading Engine Varsity</div>
                                <p className="edu-card-desc">The largest free stock market learning resource — from basics to advanced options theory.</p>
                            </div>
                        </div>
                        <div className="edu-card">
                            <div className="edu-icon"><i className="fa fa-comments" aria-hidden="true"></i></div>
                            <div>
                                <div className="edu-card-title">Trading Q&amp;A Community</div>
                                <p className="edu-card-desc">India's most active trading forum. Ask, answer, and learn alongside thousands of traders.</p>
                            </div>
                        </div>
                        <div className="edu-card">
                            <div className="edu-icon"><i className="fa fa-code" aria-hidden="true"></i></div>
                            <div>
                                <div className="edu-card-title">Developer API Docs</div>
                                <p className="edu-card-desc">Full REST and WebSocket API documentation with code samples in Python, JS and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="edu-visual">
                    <div className="edu-visual-icon"><i className="fa fa-line-chart" aria-hidden="true"></i></div>
                    <div className="edu-visual-text">Learn. Practice. Trade.</div>
                    <div className="edu-visual-sub">Paper trading available for all accounts</div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Education;
