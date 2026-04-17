import React from 'react';

function Awards() {
    const assets = [
        { icon: 'fa fa-line-chart', label: 'Stocks & IPOs' },
        { icon: 'fa fa-area-chart', label: 'Futures & Options' },
        { icon: 'fa fa-cubes', label: 'Commodity derivatives' },
        { icon: 'fa fa-globe', label: 'Currency derivatives' },
        { icon: 'fa fa-pie-chart', label: 'Direct mutual funds' },
        { icon: 'fa fa-bank', label: 'Govt. securities & bonds' },
    ];

    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
            .awards-section {
                font-family: 'Inter', sans-serif;
                padding: 88px 32px;
            }
            .awards-inner {
                max-width: 1200px; margin: 0 auto;
                display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
            }
            .awards-left {}
            .awards-tag {
                font-size: 11px; font-weight: 600; color: #2563eb;
                letter-spacing: 1px; text-transform: uppercase; margin-bottom: 14px;
            }
            .awards-h2 {
                font-size: 32px; font-weight: 600; color: #0a0a0a;
                letter-spacing: -0.6px; line-height: 1.2; margin-bottom: 16px;
            }
            .awards-sub { font-size: 15px; color: #6b7280; line-height: 1.65; margin-bottom: 36px; }
            .awards-asset-list {
                display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
            }
            .awards-asset {
                display: flex; align-items: center; gap: 8px;
                font-size: 14px; color: #374151;
                background: #fff;
                border: 1px solid #f3f4f6;
                border-radius: 9px;
                padding: 10px 12px;
            }
            .awards-asset-dot {
                width: 24px; height: 24px; background: #eff6ff;
                border-radius: 7px; flex-shrink: 0;
                color: #2563eb; display: inline-flex; align-items: center; justify-content: center;
                font-size: 12px;
            }
            .awards-right {}
            .awards-metric-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
            .awards-metric {
                background: #f9fafb; border: 1px solid #f3f4f6;
                border-radius: 10px; padding: 24px 20px;
                transition: transform 0.18s ease, box-shadow 0.18s ease;
            }
            .awards-metric:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 24px rgba(15, 23, 42, 0.07);
            }
            .awards-metric-val {
                font-size: 26px; font-weight: 600; color: #111; letter-spacing: -0.5px;
            }
            .awards-metric-lbl { font-size: 13px; color: #9ca3af; margin-top: 4px; }
            @media (max-width: 768px) {
                .awards-inner { grid-template-columns: 1fr; gap: 48px; }
            }
        `}</style>
        <section className="awards-section">
            <div className="awards-inner">
                <div className="awards-left">
                    <div className="awards-tag">Multi-asset platform</div>
                    <h2 className="awards-h2">One account.<br/>Every market.</h2>
                    <p className="awards-sub">Trade and invest across every major asset class from a single unified account with one login.</p>
                    <div className="awards-asset-list">
                        {assets.map((a, i) => (
                            <div className="awards-asset" key={i}>
                                <span className="awards-asset-dot"><i className={a.icon} aria-hidden="true"></i></span>
                                {a.label}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="awards-right">
                    <div className="awards-metric-grid">
                        <div className="awards-metric">
                            <div className="awards-metric-val">2M+</div>
                            <div className="awards-metric-lbl">Active traders</div>
                        </div>
                        <div className="awards-metric">
                            <div className="awards-metric-val">15%</div>
                            <div className="awards-metric-lbl">Of daily retail volumes</div>
                        </div>
                        <div className="awards-metric">
                            <div className="awards-metric-val">₹6L Cr</div>
                            <div className="awards-metric-lbl">Assets under custody</div>
                        </div>
                        <div className="awards-metric">
                            <div className="awards-metric-val">30+</div>
                            <div className="awards-metric-lbl">Ecosystem partners</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Awards;
