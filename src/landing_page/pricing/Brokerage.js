import React from 'react';

function Brokerage() {
    const notes = [
        'Call & Trade and RMS auto square-off: additional charges of ₹50 + GST per order.',
        'Digital contract notes will be sent via e-mail.',
        'Physical copies of contract notes, if required, shall be charged ₹20 per note. Courier charges apply.',
        'For NRI account (non-PIS): 0.5% or ₹100 per executed order for equity — whichever is lower.',
        'For NRI account (PIS): 0.5% or ₹200 per executed order for equity — whichever is lower.',
        'If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20.',
    ];

    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
            .brok-section {
                font-family: 'Inter', sans-serif;
                background: #fafafa; border-top: 1px solid #f3f4f6;
                padding: 64px 32px;
            }
            .brok-inner {
                max-width: 1200px; margin: 0 auto;
                display: grid; grid-template-columns: 2fr 1fr; gap: 64px; align-items: start;
            }
            .brok-title { font-size: 15px; font-weight: 600; color: #111; margin-bottom: 20px; }
            .brok-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
            .brok-list li {
                font-size: 13px; color: #6b7280; line-height: 1.65;
                padding-left: 16px; position: relative;
            }
            .brok-list li::before {
                content: '—'; position: absolute; left: 0; color: #d1d5db; font-size: 11px;
            }
            .brok-links { display: flex; flex-direction: column; gap: 12px; }
            .brok-link-card {
                background: #fff; border: 1px solid #e5e7eb; border-radius: 9px;
                padding: 18px 20px; text-decoration: none; display: block;
                transition: border-color 0.15s; cursor: pointer; font-family: 'Inter', sans-serif;
            }
            .brok-link-card:hover { border-color: #9ca3af; }
            .brok-link-name { font-size: 14px; font-weight: 600; color: #111; margin-bottom: 3px; }
            .brok-link-desc { font-size: 12px; color: #9ca3af; }
            @media (max-width: 768px) { .brok-inner { grid-template-columns: 1fr; } }
        `}</style>
        <section className="brok-section">
            <div className="brok-inner">
                <div>
                    <div className="brok-title">Additional notes</div>
                    <ul className="brok-list">
                        {notes.map((n, i) => <li key={i}>{n}</li>)}
                    </ul>
                </div>
                <div className="brok-links">
                    <button type="button" className="brok-link-card" onClick={() => {}}>
                        <div className="brok-link-name">Brokerage calculator</div>
                        <div className="brok-link-desc">Estimate your total trading costs</div>
                    </button>
                    <button type="button" className="brok-link-card" onClick={() => {}}>
                        <div className="brok-link-name">Full list of charges</div>
                        <div className="brok-link-desc">Every fee, explained transparently</div>
                    </button>
                </div>
            </div>
        </section>
        </>
    );
}

export default Brokerage;
