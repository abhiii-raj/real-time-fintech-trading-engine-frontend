import React from 'react';

// Hero
export function ProductsHero() {
    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
            .prod-hero { font-family: 'Inter', sans-serif; max-width: 1200px; margin: 0 auto; padding: 80px 32px 48px; }
            .prod-tag { font-size: 11px; font-weight: 600; color: #2563eb; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 14px; }
            .prod-h1 { font-size: 42px; font-weight: 600; color: #111; letter-spacing: -0.8px; line-height: 1.1; margin-bottom: 14px; }
            .prod-sub { font-size: 16px; color: #6b7280; max-width: 480px; line-height: 1.65; }
        `}</style>
        <div className="prod-hero">
            <div className="prod-tag">Our platform</div>
            <h1 className="prod-h1">Tools built for<br/>serious trading.</h1>
            <p className="prod-sub">Every product in our suite is designed for speed, clarity, and control — so you can focus on the trade, not the interface.</p>
        </div>
        </>
    );
}

// Product row (alternating layout)
export function ProductRow({ name, description, tags = [], reverse = false, icon = 'fa fa-bolt' }) {
    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
            .prod-row {
                font-family: 'Inter', sans-serif;
                border-top: 1px solid #f3f4f6; padding: 72px 32px;
            }
            .prod-row-inner {
                max-width: 1200px; margin: 0 auto;
                display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
            }
            .prod-row-inner.reverse { direction: rtl; }
            .prod-row-inner.reverse > * { direction: ltr; }
            .prod-row-name { font-size: 22px; font-weight: 600; color: #111; letter-spacing: -0.3px; margin-bottom: 12px; }
            .prod-row-desc { font-size: 15px; color: #6b7280; line-height: 1.7; margin-bottom: 20px; }
            .prod-row-tags { display: flex; flex-wrap: wrap; gap: 8px; }
            .prod-row-tag {
                font-size: 12px; font-weight: 500; color: #374151;
                background: #f3f4f6; padding: 4px 12px; border-radius: 20px;
            }
            .prod-row-visual {
                background: linear-gradient(165deg, #f9fafb, #eef2ff);
                border: 1px solid #f3f4f6; border-radius: 16px;
                min-height: 240px; display: flex; align-items: center; justify-content: center;
                color: #2563eb;
            }
            .prod-row-visual-icon {
                width: 92px;
                height: 92px;
                border-radius: 22px;
                border: 1px solid #dbeafe;
                background: #fff;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 38px;
            }
            @media (max-width: 768px) {
                .prod-row-inner { grid-template-columns: 1fr; gap: 32px; }
                .prod-row-inner.reverse { direction: ltr; }
            }
        `}</style>
        <div className="prod-row">
            <div className={`prod-row-inner${reverse ? ' reverse' : ''}`}>
                <div>
                    <div className="prod-row-name">{name}</div>
                    <p className="prod-row-desc">{description}</p>
                    <div className="prod-row-tags">{tags.map((t,i) => <span key={i} className="prod-row-tag">{t}</span>)}</div>
                </div>
                <div className="prod-row-visual"><span className="prod-row-visual-icon"><i className={icon} aria-hidden="true"></i></span></div>
            </div>
        </div>
        </>
    );
}

// Universe / ecosystem section
export function Universe() {
    const partners = [
        { icon: 'fa fa-cogs', name: 'StrategyLab', desc: 'Build and backtest algorithmic strategies without writing a single line of code.' },
        { icon: 'fa fa-newspaper-o', name: 'MarketPulse', desc: 'Real-time news and sentiment analysis aggregated from 200+ financial sources.' },
        { icon: 'fa fa-plug', name: 'NexAPI', desc: 'REST and WebSocket APIs for building custom trading bots and integrations.' },
        { icon: 'fa fa-area-chart', name: 'OptionFlow', desc: 'Advanced options analytics — Greeks, OI chains, and strategy builders.' },
        { icon: 'fa fa-bank', name: 'DirectFunds', desc: 'Commission-free direct mutual fund investments delivered to your demat.' },
        { icon: 'fa fa-shield', name: 'VaultInsure', desc: 'Personalized life and health insurance advice with zero spam.' },
    ];
    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
            .universe-section { font-family: 'Inter', sans-serif; padding: 88px 32px; background: #fafafa; border-top: 1px solid #f3f4f6; }
            .universe-inner { max-width: 1200px; margin: 0 auto; }
            .universe-header { margin-bottom: 48px; }
            .universe-tag { font-size: 11px; font-weight: 600; color: #2563eb; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 14px; }
            .universe-h2 { font-size: 28px; font-weight: 600; color: #111; letter-spacing: -0.4px; }
            .universe-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
            .universe-card {
                background: #fff;
                border: 1px solid #e5e7eb;
                border-radius: 10px;
                padding: 24px;
                transition: transform 0.18s ease, box-shadow 0.18s ease;
            }
            .universe-card:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 22px rgba(15, 23, 42, 0.07);
            }
            .universe-icon {
                width: 38px;
                height: 38px;
                border-radius: 10px;
                background: #eff6ff;
                color: #2563eb;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                margin-bottom: 12px;
            }
            .universe-name { font-size: 15px; font-weight: 600; color: #111; margin-bottom: 6px; }
            .universe-desc { font-size: 13px; color: #6b7280; line-height: 1.6; margin: 0; }
        `}</style>
        <section className="universe-section">
            <div className="universe-inner">
                <div className="universe-header">
                    <div className="universe-tag">Ecosystem</div>
                    <h2 className="universe-h2">Extend your trading with our partner tools.</h2>
                </div>
                <div className="universe-grid">
                    {partners.map((p, i) => (
                        <div className="universe-card" key={i}>
                            <div className="universe-icon"><i className={p.icon} aria-hidden="true"></i></div>
                            <div className="universe-name">{p.name}</div>
                            <p className="universe-desc">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}
