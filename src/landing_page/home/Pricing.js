import React from 'react';
import { useNavigate } from 'react-router-dom';

function Pricing() {
    const navigate = useNavigate();
    const plans = [
        {
            name: 'Equity Delivery',
            icon: 'fa fa-leaf',
            price: '₹0',
            period: 'per order',
            desc: 'Buy and hold stocks, ETFs and direct mutual funds with zero brokerage forever.',
            features: ['NSE & BSE listed stocks', 'Direct mutual funds', 'IPO applications', 'ETF investing'],
        },
        {
            name: 'Intraday & F&O',
            icon: 'fa fa-flash',
            price: '₹20',
            period: 'per executed order',
            desc: 'Flat fee, no percentage cuts. The same rate whether you trade 1 lot or 100.',
            features: ['Equity intraday', 'Futures & Options', 'Currency derivatives', 'Commodity derivatives'],
            highlight: true,
        },
    ];

    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
            .pricing-section {
                font-family: 'Inter', sans-serif;
                padding: 88px 32px; background: #fafafa;
                border-top: 1px solid #f3f4f6;
            }
            .pricing-inner { max-width: 1200px; margin: 0 auto; }
            .pricing-header { text-align: center; margin-bottom: 56px; }
            .pricing-tag {
                font-size: 11px; font-weight: 600; color: #2563eb;
                letter-spacing: 1px; text-transform: uppercase; margin-bottom: 14px;
            }
            .pricing-h2 {
                font-size: 32px; font-weight: 600; color: #0a0a0a;
                letter-spacing: -0.6px; margin-bottom: 10px;
            }
            .pricing-sub { font-size: 15px; color: #6b7280; }
            .pricing-grid {
                display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 16px; max-width: 720px; margin: 0 auto;
            }
            .pricing-card {
                background: #fff; border: 1px solid #e5e7eb;
                border-radius: 12px; padding: 36px 32px;
                transition: transform 0.18s ease, box-shadow 0.18s ease;
            }
            .pricing-card:hover {
                transform: translateY(-3px);
                box-shadow: 0 14px 28px rgba(15, 23, 42, 0.08);
            }
            .pricing-card.highlight { border-color: #2563eb; box-shadow: 0 0 0 1px #2563eb; }
            .pricing-card-badge {
                display: inline-block; font-size: 11px; font-weight: 600;
                color: #2563eb; background: #eff6ff; padding: 3px 10px;
                border-radius: 20px; margin-bottom: 16px; letter-spacing: 0.3px;
            }
            .pricing-name { font-size: 14px; font-weight: 500; color: #6b7280; margin-bottom: 8px; }
            .pricing-name-wrap { display: flex; align-items: center; gap: 9px; margin-bottom: 8px; }
            .pricing-name-icon {
                width: 28px; height: 28px; border-radius: 8px;
                display: inline-flex; align-items: center; justify-content: center;
                background: #eff6ff; color: #2563eb; font-size: 13px;
            }
            .pricing-price { font-size: 40px; font-weight: 600; color: #111; letter-spacing: -1px; }
            .pricing-period { font-size: 13px; color: #9ca3af; margin-bottom: 16px; }
            .pricing-desc { font-size: 14px; color: #6b7280; line-height: 1.6; margin-bottom: 24px; }
            .pricing-features { list-style: none; padding: 0; margin: 0 0 28px; }
            .pricing-features li {
                font-size: 14px; color: #374151; padding: 7px 0;
                border-bottom: 1px solid #f9fafb;
                display: flex; align-items: center; gap: 8px;
            }
            .pricing-features li:last-child { border-bottom: none; }
            .pricing-check { color: #2563eb; font-size: 12px; }
            .pricing-cta {
                display: block; text-align: center; font-size: 14px; font-weight: 500;
                color: #fff; background: #111; border: none; padding: 11px;
                border-radius: 8px; cursor: pointer; transition: background 0.15s;
                width: 100%; text-decoration: none;
            }
            .pricing-cta:hover { background: #333; color: #fff; }
            .pricing-link-row { text-align: center; margin-top: 32px; }
            .pricing-link {
                font-size: 14px; color: #2563eb; text-decoration: none;
                font-weight: 500;
            }
            .pricing-link:hover { text-decoration: underline; }
        `}</style>
        <section className="pricing-section">
            <div className="pricing-inner">
                <div className="pricing-header">
                    <div className="pricing-tag">Transparent pricing</div>
                    <h2 className="pricing-h2">Simple, honest fees.</h2>
                    <p className="pricing-sub">No percentage cuts. No surprise charges. Ever.</p>
                </div>
                <div className="pricing-grid">
                    {plans.map((plan, i) => (
                        <div className={`pricing-card${plan.highlight ? ' highlight' : ''}`} key={i}>
                            {plan.highlight && <div className="pricing-card-badge">Most popular</div>}
                            <div className="pricing-name-wrap">
                                <span className="pricing-name-icon"><i className={plan.icon} aria-hidden="true"></i></span>
                                <div className="pricing-name">{plan.name}</div>
                            </div>
                            <div className="pricing-price">{plan.price}</div>
                            <div className="pricing-period">{plan.period}</div>
                            <p className="pricing-desc">{plan.desc}</p>
                            <ul className="pricing-features">
                                {plan.features.map((f, j) => (
                                    <li key={j}><span className="pricing-check">✓</span>{f}</li>
                                ))}
                            </ul>
                            <button className="pricing-cta" onClick={() => navigate('/signup')}>Get started free</button>
                        </div>
                    ))}
                </div>
                <div className="pricing-link-row">
                    <a href="/pricing" className="pricing-link">View full pricing breakdown →</a>
                </div>
            </div>
        </section>
        </>
    );
}

export default Pricing;
