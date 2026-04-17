import React, { useState } from 'react';

const categories = [
    { icon: 'fa fa-id-card-o', title: 'Account Opening', links: ['Opening an account', 'Account verification', 'Account types', 'Documents required', 'Getting started'] },
    { icon: 'fa fa-line-chart', title: 'Trading Support', links: ['How to place orders', 'Order types explained', 'Trading hours', 'Portfolio management', 'Risk management'] },
    { icon: 'fa fa-desktop', title: 'Technical Issues', links: ['Platform access', 'Performance issues', 'Mobile app help', 'Browser compatibility', 'Data sync'] },
    { icon: 'fa fa-credit-card', title: 'Fund Transfer', links: ['Deposit methods', 'Withdrawal process', 'Transfer status', 'Fee information', 'Payment issues'] },
    { icon: 'fa fa-code', title: 'API Support', links: ['API documentation', 'Authentication', 'Integration help', 'Rate limits', 'Code examples'] },
    { icon: 'fa fa-comments-o', title: 'General Inquiry', links: ['Pricing information', 'About us', 'Contact options', 'Careers', 'Partnerships'] },
];

const supportCategories = ['Account Opening', 'Trading Support', 'Technical Issues', 'Fund Transfer', 'General Inquiry', 'Bug Report', 'Feature Request', 'API Support'];

function SupportPage() {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ userName: '', email: '', phone: '', category: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [search, setSearch] = useState('');

    const handleChange = e => { setFormData(p => ({ ...p, [e.target.name]: e.target.value })); setError(''); };

    const handleSubmit = async e => {
        e.preventDefault(); setLoading(true); setError('');
        try {
            const res = await fetch('http://localhost:3002/submitSupportQuery', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (res.ok) {
                setSubmitted(true);
                setFormData({ userName: '', email: '', phone: '', category: '', subject: '', message: '' });
                setTimeout(() => { setSubmitted(false); setShowForm(false); }, 3000);
            } else setError(data.message || 'Failed to submit');
        } catch { setError('Error submitting. Please try again.'); }
        finally { setLoading(false); }
    };

    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
            .sup-page { font-family: 'Inter', sans-serif; }
            .sup-hero {
                background: linear-gradient(180deg, #eef4ff 0%, #f8fafc 60%, #ffffff 100%);
                border-bottom: 1px solid #f3f4f6;
                padding: 72px 32px 56px;
                text-align: center;
            }
            .sup-tag { font-size: 11px; font-weight: 600; color: #2563eb; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 14px; }
            .sup-h1 { font-size: 36px; font-weight: 600; color: #111; letter-spacing: -0.6px; margin-bottom: 14px; }
            .sup-sub { font-size: 15px; color: #9ca3af; margin-bottom: 28px; }
            .sup-search-wrap { max-width: 520px; margin: 0 auto; position: relative; }
            .sup-search {
                width: 100%; padding: 12px 20px 12px 42px; font-size: 15px; font-family: 'Inter', sans-serif;
                border: 1px solid #e5e7eb; border-radius: 10px; outline: none;
                box-shadow: 0 1px 3px rgba(0,0,0,0.04); box-sizing: border-box;
                transition: border-color 0.15s;
            }
            .sup-search:focus { border-color: #2563eb; }
            .sup-search-icon {
                position: absolute;
                left: 16px;
                top: 50%;
                transform: translateY(-50%);
                color: #9ca3af;
                font-size: 14px;
            }

            .sup-body { max-width: 1200px; margin: 0 auto; padding: 64px 32px; }
            .sup-section-title { font-size: 14px; font-weight: 600; color: #111; margin-bottom: 24px; letter-spacing: -0.1px; }
            .sup-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 56px; }
            .sup-card {
                background: #ffffff;
                border: 1px solid #f3f4f6;
                border-radius: 12px;
                padding: 24px;
                box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
                transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
            }
            .sup-card:hover {
                transform: translateY(-3px);
                border-color: #dbeafe;
                box-shadow: 0 14px 28px rgba(15, 23, 42, 0.08);
            }
            .sup-card-header { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
            .sup-card-icon {
                width: 30px;
                height: 30px;
                border-radius: 8px;
                background: #eff6ff;
                color: #2563eb;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
            }
            .sup-card-title { font-size: 14px; font-weight: 600; color: #111; }
            .sup-card-links { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 7px; }
            .sup-card-link-btn {
                font-size: 13px;
                color: #6b7280;
                text-decoration: none;
                transition: color 0.15s;
                background: none;
                border: none;
                text-align: left;
                padding: 0;
                cursor: pointer;
                font-family: 'Inter', sans-serif;
            }
            .sup-card-link-btn:hover { color: #2563eb; }

            .sup-ticket-section { border-top: 1px solid #f3f4f6; padding-top: 40px; }
            .sup-ticket-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 28px; flex-wrap: wrap; gap: 12px; }
            .sup-ticket-title { font-size: 18px; font-weight: 600; color: #111; }
            .sup-ticket-sub { font-size: 14px; color: #9ca3af; margin-top: 3px; }
            .sup-open-btn {
                font-size: 14px; font-weight: 500; color: #fff; background: #111;
                border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer;
                transition: background 0.15s; font-family: 'Inter', sans-serif;
                display: inline-flex; align-items: center; gap: 8px;
            }
            .sup-open-btn:hover { background: #333; }

            .sup-form-wrap { max-width: 560px; }
            .sup-form-label { font-size: 13px; font-weight: 500; color: #374151; margin-bottom: 6px; display: block; }
            .sup-form-input, .sup-form-select, .sup-form-textarea {
                width: 100%; padding: 10px 14px; font-size: 14px; font-family: 'Inter', sans-serif;
                border: 1px solid #e5e7eb; border-radius: 8px; outline: none;
                transition: border-color 0.15s; box-sizing: border-box; color: #111; background: #fff;
            }
            .sup-form-input:focus, .sup-form-select:focus, .sup-form-textarea:focus { border-color: #2563eb; }
            .sup-form-textarea { resize: vertical; min-height: 120px; }
            .sup-form-field { margin-bottom: 16px; }
            .sup-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
            .sup-form-actions { display: flex; gap: 10px; margin-top: 4px; }
            .sup-submit-btn {
                font-size: 14px; font-weight: 500; color: #fff; background: #111;
                border: none; padding: 10px 24px; border-radius: 8px; cursor: pointer;
                transition: background 0.15s; font-family: 'Inter', sans-serif;
                display: inline-flex; align-items: center; gap: 8px;
            }
            .sup-submit-btn:hover { background: #333; }
            .sup-submit-btn:disabled { background: #9ca3af; cursor: not-allowed; }
            .sup-cancel-btn {
                font-size: 14px; font-weight: 400; color: #6b7280; background: none;
                border: 1px solid #e5e7eb; padding: 10px 20px; border-radius: 8px;
                cursor: pointer; transition: border-color 0.15s; font-family: 'Inter', sans-serif;
            }
            .sup-cancel-btn:hover { border-color: #9ca3af; color: #111; }
            .sup-alert { font-size: 13px; padding: 10px 14px; border-radius: 7px; margin-bottom: 16px; }
            .sup-alert.error { background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; }
            .sup-alert.success { background: #f0fdf4; color: #16a34a; border: 1px solid #bbf7d0; }
            @media (max-width: 600px) { .sup-form-row { grid-template-columns: 1fr; } }
        `}</style>
        <div className="sup-page">
            <div className="sup-hero">
                <div className="sup-tag">Support</div>
                <h1 className="sup-h1">How can we help?</h1>
                <p className="sup-sub">Search our help centre or browse by topic below.</p>
                <div className="sup-search-wrap">
                    <span className="sup-search-icon"><i className="fa fa-search" aria-hidden="true"></i></span>
                    <input className="sup-search" placeholder="Search for answers…" value={search} onChange={e => setSearch(e.target.value)} />
                </div>
            </div>

            <div className="sup-body">
                <div className="sup-section-title">Browse by topic</div>
                <div className="sup-grid">
                    {categories.map((cat, i) => (
                        <div className="sup-card" key={i}>
                            <div className="sup-card-header">
                                <span className="sup-card-icon"><i className={cat.icon} aria-hidden="true"></i></span>
                                <span className="sup-card-title">{cat.title}</span>
                            </div>
                            <ul className="sup-card-links">
                                {cat.links.map((l, j) => <li key={j}><button type="button" className="sup-card-link-btn">{l}</button></li>)}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="sup-ticket-section">
                    <div className="sup-ticket-header">
                        <div>
                            <div className="sup-ticket-title">Can't find what you need?</div>
                            <div className="sup-ticket-sub">Create a support ticket and we'll get back to you.</div>
                        </div>
                        {!showForm && <button className="sup-open-btn" onClick={() => setShowForm(true)}><i className="fa fa-life-ring" aria-hidden="true"></i>Create ticket</button>}
                    </div>

                    {showForm && (
                        <div className="sup-form-wrap">
                            {submitted && <div className="sup-alert success">Ticket submitted! We'll get back to you shortly.</div>}
                            {error && <div className="sup-alert error">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="sup-form-row">
                                    <div className="sup-form-field">
                                        <label className="sup-form-label">Full name *</label>
                                        <input className="sup-form-input" name="userName" value={formData.userName} onChange={handleChange} placeholder="Your name" required />
                                    </div>
                                    <div className="sup-form-field">
                                        <label className="sup-form-label">Email *</label>
                                        <input className="sup-form-input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
                                    </div>
                                </div>
                                <div className="sup-form-row">
                                    <div className="sup-form-field">
                                        <label className="sup-form-label">Phone</label>
                                        <input className="sup-form-input" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 00000 00000" />
                                    </div>
                                    <div className="sup-form-field">
                                        <label className="sup-form-label">Category *</label>
                                        <select className="sup-form-select" name="category" value={formData.category} onChange={handleChange} required>
                                            <option value="">Select…</option>
                                            {supportCategories.map((c, i) => <option key={i} value={c}>{c}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="sup-form-field">
                                    <label className="sup-form-label">Subject *</label>
                                    <input className="sup-form-input" name="subject" value={formData.subject} onChange={handleChange} placeholder="Brief summary of your issue" required />
                                </div>
                                <div className="sup-form-field">
                                    <label className="sup-form-label">Message *</label>
                                    <textarea className="sup-form-textarea" name="message" value={formData.message} onChange={handleChange} placeholder="Describe your issue in detail…" required />
                                </div>
                                <div className="sup-form-actions">
                                    <button type="submit" className="sup-submit-btn" disabled={loading}><i className="fa fa-paper-plane" aria-hidden="true"></i>{loading ? 'Submitting…' : 'Submit ticket'}</button>
                                    <button type="button" className="sup-cancel-btn" onClick={() => setShowForm(false)} disabled={loading}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    );
}

export default SupportPage;