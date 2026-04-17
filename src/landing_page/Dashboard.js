import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://real-time-fintech-trading-engine-backend-5ao3.onrender.com';

function Dashboard() {
    const navigate = useNavigate();
    const [data, setData] = useState({ holdings: [], positions: [], orders: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            navigate('/signup');
            return;
        }

        const fetchData = async () => {
            try {
                const resp = await fetch(`${API_BASE_URL}/dashboardData`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                if (!resp.ok) {
                    if (resp.status === 401) {
                        // unauthorized, redirect to login
                        localStorage.removeItem('authToken');
                        navigate('/signup');
                        return;
                    }
                    throw new Error('Failed to fetch');
                }
                const result = await resp.json();
                setData(result);
            } catch (err) {
                console.error(err);
                setError('Unable to load dashboard data');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [navigate]);

    if (loading) return <div className="p-5 text-center">Loading dashboard...</div>;
    if (error) return <div className="p-5 text-center text-danger">{error}</div>;

    return (
        <div className="container p-5">
            <h2 className="mb-4">Your Dashboard</h2>
            <section className="mb-5">
                <h4>Holdings</h4>
                {data.holdings.length === 0 ? (
                    <p>No holdings available.</p>
                ) : (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Qty</th>
                                <th>Avg Price</th>
                                <th>Current Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.holdings.map(h => (
                                <tr key={h._id}>
                                    <td>{h.name}</td>
                                    <td>{h.qty}</td>
                                    <td>{h.avg}</td>
                                    <td>{h.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
            <section className="mb-5">
                <h4>Positions</h4>
                {data.positions.length === 0 ? (
                    <p>No positions available.</p>
                ) : (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Product</th>
                                <th>Qty</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.positions.map(p => (
                                <tr key={p._id}>
                                    <td>{p.name}</td>
                                    <td>{p.product}</td>
                                    <td>{p.qty}</td>
                                    <td>{p.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
            <section>
                <h4>Orders</h4>
                {data.orders.length === 0 ? (
                    <p>No orders placed.</p>
                ) : (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Mode</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.orders.map(o => (
                                <tr key={o._id}>
                                    <td>{o.name}</td>
                                    <td>{o.qty}</td>
                                    <td>{o.price}</td>
                                    <td>{o.mode}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
        </div>
    );
}

export default Dashboard;