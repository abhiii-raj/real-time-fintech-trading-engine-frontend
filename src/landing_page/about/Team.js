import React from 'react';

const members = [
    {
        name: 'Abhi Raj',
        role: 'Founder & Full Stack Developer',
        badge: { label: 'Founder', icon: 'fa fa-star' },
        avatarIcon: 'fa fa-user-secret',
        color: '#dbeafe',
        textColor: '#1d4ed8',
        bio: 'Abhi founded RealTime Fintech Trading Engine and architected the entire platform end-to-end — from the low-latency order matching engine to the real-time React dashboard. He leads all engineering decisions and system design across backend, frontend, and database layers.',
        github: 'https://github.com/abhiii-raj',
    },
    {
        name: 'Vishal Kumar',
        role: 'Co-Founder & Backend Engineer',
        badge: { label: 'Co-Founder', icon: 'fa fa-bolt' },
        avatarIcon: 'fa fa-server',
        color: '#dcfce7',
        textColor: '#15803d',
        bio: 'Vishal owns the backend infrastructure — designing and maintaining the REST APIs, WebSocket connections, and Express server that power real-time trade execution. He ensures low-latency data flow between the matching engine, MongoDB, and connected clients.',
        github: null,
    },
    {
        name: 'Adarsh Raj',
        role: 'Database Engineer & Data Modelling',
        avatarIcon: 'fa fa-database',
        color: '#fef9c3',
        textColor: '#a16207',
        bio: 'Adarsh is responsible for the MongoDB schema design, data modelling, and query optimization across Holdings, Orders, Positions, and User collections. He ensures data integrity, indexing strategy, and scalability as trade volumes grow.',
        github: null,
    },
    {
        name: 'Harshvardhan',
        role: 'Frontend Developer & UI Engineer',
        avatarIcon: 'fa fa-code',
        color: '#fce7f3',
        textColor: '#be185d',
        bio: 'Harshvardhan builds the user-facing interfaces — crafting the trading dashboard, watchlist, order windows, and portfolio views in React. He focuses on performance, accessibility, and delivering a clean, distraction-free experience for traders.',
        github: null,
    },
    {
        name: 'Rahul Chandra',
        role: 'DevOps & Systems Reliability Engineer',
        avatarIcon: 'fa fa-cogs',
        color: '#ede9fe',
        textColor: '#6d28d9',
        bio: 'Rahul handles deployment pipelines, server configuration, and platform reliability. He manages environment setup, monitors uptime, and ensures the trading engine runs at 99.9% availability — including crash recovery, logging, and performance profiling.',
        github: null,
    },
];

function Team() {
    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
            .team-section {
                font-family: 'Inter', sans-serif;
                max-width: 1200px; margin: 0 auto; padding: 0 32px 88px;
            }
            .team-tag {
                font-size: 11px; font-weight: 600; color: #2563eb;
                letter-spacing: 1px; text-transform: uppercase; margin-bottom: 14px;
            }
            .team-h2 {
                font-size: 28px; font-weight: 600; color: #111;
                letter-spacing: -0.4px; margin-bottom: 40px;
            }
            .team-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
                gap: 16px;
            }
            .team-card {
                background: #f9fafb; border: 1px solid #f3f4f6;
                border-radius: 14px; padding: 28px;
                display: flex; flex-direction: column; gap: 0;
            }
            .team-card-top {
                display: flex; align-items: center; gap: 16px; margin-bottom: 16px;
            }
            .team-avatar {
                width: 52px; height: 52px; border-radius: 50%;
                display: flex; align-items: center; justify-content: center;
                font-size: 20px; font-weight: 700; flex-shrink: 0;
                letter-spacing: -0.3px;
            }
            .team-name  { font-size: 16px; font-weight: 600; color: #111; margin-bottom: 3px; }
            .team-role  { font-size: 12px; font-weight: 500; color: #2563eb; }
            .team-bio   { font-size: 13px; color: #6b7280; line-height: 1.7; margin: 0 0 14px; }
            .team-link  { font-size: 13px; color: #2563eb; text-decoration: none; font-weight: 500; }
            .team-link:hover { text-decoration: underline; }
            .team-badge {
                display: inline-flex;
                align-items: center;
                gap: 5px;
                font-size: 10px;
                font-weight: 700;
                color: #0f172a;
                background: linear-gradient(120deg, #fde68a, #fef3c7);
                border: 1px solid #f59e0b;
                padding: 2px 8px;
                border-radius: 999px;
                margin-left: 8px;
                letter-spacing: 0.35px;
                text-transform: uppercase;
                vertical-align: middle;
            }
            .team-badge-icon {
                width: 14px;
                height: 14px;
                border-radius: 50%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background: #111827;
                color: #fef3c7;
                font-size: 8px;
            }
            @media (max-width: 600px) {
                .team-grid { grid-template-columns: 1fr; }
            }
        `}</style>
        <div className="team-section">
            <div className="team-tag">The team</div>
            <h2 className="team-h2">Built by traders, for traders.</h2>
            <div className="team-grid">
                {members.map((m, i) => (
                    <div className="team-card" key={i}>
                        <div className="team-card-top">
                            <div
                                className="team-avatar"
                                style={{ background: m.color, color: m.textColor }}
                            >
                                <i className={m.avatarIcon} aria-hidden="true"></i>
                            </div>
                            <div>
                                <div className="team-name">
                                    {m.name}
                                    {m.badge && (
                                        <span className="team-badge">
                                            <span className="team-badge-icon"><i className={m.badge.icon} aria-hidden="true"></i></span>
                                            {m.badge.label}
                                        </span>
                                    )}
                                </div>
                                <div className="team-role">{m.role}</div>
                            </div>
                        </div>
                        <p className="team-bio">{m.bio}</p>
                        {m.github && (
                            <a href={m.github} target="_blank" rel="noopener noreferrer" className="team-link">
                                View on GitHub →
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default Team;