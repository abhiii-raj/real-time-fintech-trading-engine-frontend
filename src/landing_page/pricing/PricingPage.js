import React from 'react';
import Brokerage from './Brokerage';
import OpenAccount from '../OpenAccount';

function PricingPage() {
    const rows = [
        { segment: 'Equity delivery',   brokerage: '₹0',            stt: '0.1% on sell',           exchange: '0.00345%', gst: '18% on brokerage', sebi: '₹10/crore', stamp: '0.015%' },
        { segment: 'Equity intraday',   brokerage: '₹20 or 0.03%', stt: '0.025% on sell',          exchange: '0.00345%', gst: '18% on brokerage', sebi: '₹10/crore', stamp: '0.003%' },
        { segment: 'Futures',           brokerage: '₹20 or 0.03%', stt: '0.02% on sell',           exchange: '0.002%',   gst: '18% on brokerage', sebi: '₹10/crore', stamp: '0.002%' },
        { segment: 'Options',           brokerage: '₹20 per order', stt: '0.1% on sell (premium)', exchange: '0.053%',   gst: '18% on brokerage', sebi: '₹10/crore', stamp: '0.003%' },
        { segment: 'Currency futures',  brokerage: '₹20 or 0.03%', stt: 'No STT',                  exchange: '0.00035%', gst: '18% on brokerage', sebi: '₹10/crore', stamp: '0.001%' },
        { segment: 'Direct MF',         brokerage: '₹0',            stt: 'Nil',                     exchange: '—',        gst: 'Nil',              sebi: '₹10/crore', stamp: '0.005%' },
    ];

    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
            .price-page { font-family: 'Inter', sans-serif; }
            .price-hero { max-width: 1200px; margin: 0 auto; padding: 80px 32px 56px; }
            .price-tag  { font-size: 11px; font-weight: 600; color: #2563eb; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 14px; }
            .price-h1   { font-size: 42px; font-weight: 600; color: #111; letter-spacing: -0.8px; margin-bottom: 12px; }
            .price-sub  { font-size: 16px; color: #6b7280; max-width: 480px; line-height: 1.65; }
            .price-cards { max-width: 1200px; margin: 0 auto; padding: 0 32px 56px; display: flex; gap: 16px; flex-wrap: wrap; }
            .price-card  { flex: 1; min-width: 200px; background: #f9fafb; border: 1px solid #f3f4f6; border-radius: 10px; padding: 24px; }
            .price-card-val  { font-size: 32px; font-weight: 600; color: #111; letter-spacing: -0.6px; }
            .price-card-lbl  { font-size: 13px; color: #9ca3af; margin-top: 4px; }
            .price-card-desc { font-size: 13px; color: #374151; margin-top: 10px; line-height: 1.55; }
            .price-zero { color: #16a34a; }
            .price-table-section { background: #fafafa; border-top: 1px solid #f3f4f6; padding: 56px 32px; }
            .price-table-inner   { max-width: 1200px; margin: 0 auto; }
            .price-table-title   { font-size: 18px; font-weight: 600; color: #111; margin-bottom: 20px; }
            .price-table-wrap    { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; overflow-x: auto; }
            .price-table         { width: 100%; border-collapse: collapse; min-width: 700px; }
            .price-table th      { text-align: left; font-size: 11px; font-weight: 600; color: #9ca3af; letter-spacing: 0.5px; text-transform: uppercase; padding: 14px 20px; border-bottom: 1px solid #f3f4f6; white-space: nowrap; }
            .price-table td      { padding: 13px 20px; font-size: 13px; color: #374151; border-bottom: 1px solid #f9fafb; }
            .price-table tbody tr:last-child td { border-bottom: none; }
            .price-table tbody tr:hover td { background: #fafafa; }
            .price-seg  { font-weight: 500; color: #111; }
        `}</style>
        <div className="price-page">
            <div className="price-hero">
                <div className="price-tag">Pricing</div>
                <h1 className="price-h1">Simple, honest fees.</h1>
                <p className="price-sub">We pioneered flat-fee broking in India. No percentages, no surprises — ever.</p>
            </div>
            <div className="price-cards">
                {[
                    { val: '₹0',  lbl: 'Equity delivery',     desc: 'Absolutely free. Buy and hold stocks with zero brokerage.' },
                    { val: '₹0',  lbl: 'Direct mutual funds',  desc: 'Zero commission on all direct mutual fund investments.' },
                    { val: '₹20', lbl: 'Intraday & F&O',       desc: 'Flat ₹20 per executed order — or 0.03%, whichever is lower.' },
                    { val: '₹20', lbl: 'Currency & Commodity',  desc: 'Same flat fee across all derivative segments.' },
                ].map((c, i) => (
                    <div className="price-card" key={i}>
                        <div className={`price-card-val${c.val === '₹0' ? ' price-zero' : ''}`}>{c.val}</div>
                        <div className="price-card-lbl">{c.lbl}</div>
                        <div className="price-card-desc">{c.desc}</div>
                    </div>
                ))}
            </div>
            <div className="price-table-section">
                <div className="price-table-inner">
                    <div className="price-table-title">Full breakdown by segment</div>
                    <div className="price-table-wrap">
                        <table className="price-table">
                            <thead>
                                <tr>
                                    <th>Segment</th><th>Brokerage</th><th>STT</th>
                                    <th>Exchange fee</th><th>GST</th><th>SEBI</th><th>Stamp duty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((r, i) => (
                                    <tr key={i}>
                                        <td className="price-seg">{r.segment}</td>
                                        <td className={r.brokerage === '₹0' ? 'price-zero' : ''}>{r.brokerage}</td>
                                        <td>{r.stt}</td><td>{r.exchange}</td>
                                        <td>{r.gst}</td><td>{r.sebi}</td><td>{r.stamp}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Brokerage />
            <OpenAccount />
        </div>
        </>
    );
}

export default PricingPage;
