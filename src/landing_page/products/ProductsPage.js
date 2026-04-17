import React from 'react';
import { ProductsHero, ProductRow, Universe } from './ProductComponents';
import OpenAccount from '../OpenAccount';

function ProductsPage() {
    return (
        <>
            <ProductsHero />
            <ProductRow
                icon="fa fa-mobile"
                name="RealTime Fintech Trading Engine Terminal"
                description="Our flagship trading platform with ultra-fast streaming market data, advanced charting with 100+ indicators, and a clean interface that doesn't get in the way. Available on web, Android, and iOS."
                tags={['Web', 'Android', 'iOS', 'Real-time data', 'Advanced charts']}
            />
            <ProductRow
                icon="fa fa-desktop"
                name="Portfolio Console"
                description="The central hub for your RealTime Fintech Trading Engine account. Deep-dive into your P&L, trade history, tax reports, and holdings analytics — all visualised in clean, readable charts."
                tags={['P&L reports', 'Tax statements', 'Holdings analytics', 'Trade history']}
                reverse
            />
            <ProductRow
                icon="fa fa-inr"
                name="DirectFunds"
                description="Buy direct mutual funds online, commission-free, with direct delivery to your demat account. Smart filters help you find the right fund for your goals in seconds."
                tags={['Zero commission', 'Direct plans', 'SIP automation', 'Goal tracking']}
            />
            <ProductRow
                icon="fa fa-code-fork"
                name="RealTime Fintech Trading Engine API"
                description="Build powerful trading platforms with our simple HTTP/JSON and WebSocket APIs. Full documentation, SDKs in Python and JavaScript, and a sandbox environment for testing."
                tags={['REST API', 'WebSocket', 'Python SDK', 'JavaScript SDK', 'Sandbox']}
                reverse
            />
            <Universe />
            <OpenAccount />
        </>
    );
}

export default ProductsPage;
