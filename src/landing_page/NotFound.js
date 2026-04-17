import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();
    return (
        <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
            .nf-page {
                font-family: 'Inter', sans-serif;
                min-height: 60vh; display: flex; align-items: center; justify-content: center;
                padding: 80px 32px; text-align: center;
            }
            .nf-code { font-size: 13px; font-weight: 600; color: #2563eb; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 16px; }
            .nf-h1   { font-size: 36px; font-weight: 600; color: #111; letter-spacing: -0.6px; margin-bottom: 10px; }
            .nf-sub  { font-size: 15px; color: #9ca3af; margin-bottom: 32px; }
            .nf-btn  {
                font-size: 14px; font-weight: 500; color: #fff; background: #111;
                border: none; padding: 11px 24px; border-radius: 8px; cursor: pointer;
                transition: background 0.15s; font-family: 'Inter', sans-serif;
            }
            .nf-btn:hover { background: #333; }
        `}</style>
        <div className="nf-page">
            <div>
                <div className="nf-code">404</div>
                <h1 className="nf-h1">Page not found</h1>
                <p className="nf-sub">Sorry, the page you're looking for doesn't exist.</p>
                <button className="nf-btn" onClick={() => navigate('/')}>Back to home</button>
            </div>
        </div>
        </>
    );
}

export default NotFound;
