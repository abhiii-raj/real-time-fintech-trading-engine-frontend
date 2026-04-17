import React from 'react';

function Stats() {
    const items = [
        { icon: 'fa fa-bolt', title: 'Built for speed', desc: 'Sub-millisecond order routing powered by our low-latency matching engine. Your orders reach the exchange before the market blinks.' },
        { icon: 'fa fa-sliders', title: 'No hidden charges', desc: 'Flat ₹20 per executed F&O order. Zero commission on equity delivery and direct mutual funds. What you see is what you pay.' },
        { icon: 'fa fa-shield', title: 'Risk controls built-in', desc: 'Automated kill-switch, position limits, and real-time margin monitoring keep your capital safe without slowing you down.' },
        { icon: 'fa fa-plug', title: 'Open ecosystem', desc: 'Powerful REST and WebSocket APIs let you build custom strategies, automate workflows, or integrate with third-party analytics.' },
    ];

    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
            .stats-section {
                font-family: 'Inter', sans-serif;
                background: linear-gradient(180deg, #fafcff 0%, #fafafa 100%);
                border-top: 1px solid #f3f4f6;
                border-bottom: 1px solid #f3f4f6;
                padding: 88px 32px;
            }
            .stats-inner { max-width: 1200px; margin: 0 auto; }
            .stats-header {
                max-width: 480px; margin-bottom: 60px;
            }
            .stats-tag {
                font-size: 11px; font-weight: 600; color: #2563eb;
                letter-spacing: 1px; text-transform: uppercase; margin-bottom: 14px;
            }
            .stats-h2 {
                font-size: 32px; font-weight: 600; color: #0a0a0a;
                letter-spacing: -0.6px; line-height: 1.2; margin: 0;
            }
            .stats-grid {
                display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                gap: 2px; background: #e5e7eb;
                border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;
            }
            .stats-card {
                background: #fff; padding: 36px 32px;
                transition: transform 0.18s ease, box-shadow 0.18s ease;
            }
            .stats-card:hover {
                transform: translateY(-2px);
                box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
            }
            .stats-card-num {
                font-size: 13px; font-weight: 600; color: #2563eb;
                margin-bottom: 12px; letter-spacing: 0.3px;
            }
            .stats-card-icon {
                width: 34px;
                height: 34px;
                border-radius: 9px;
                background: #eff6ff;
                color: #2563eb;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 12px;
                font-size: 14px;
            }
            .stats-card-title {
                font-size: 16px; font-weight: 600; color: #111;
                margin-bottom: 10px; letter-spacing: -0.2px;
            }
            .stats-card-desc { font-size: 14px; color: #6b7280; line-height: 1.6; margin: 0; }
        `}</style>
        <section className="stats-section">
            <div className="stats-inner">
                <div className="stats-header">
                    <div className="stats-tag">Why RealTime Fintech Trading Engine</div>
                    <h2 className="stats-h2">Everything a serious trader needs. Nothing they don't.</h2>
                </div>
                <div className="stats-grid">
                    {items.map((item, i) => (
                        <div className="stats-card" key={i}>
                            <div className="stats-card-num">0{i + 1}</div>
                            <div className="stats-card-icon"><i className={item.icon} aria-hidden="true"></i></div>
                            <div className="stats-card-title">{item.title}</div>
                            <p className="stats-card-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}

export default Stats;
