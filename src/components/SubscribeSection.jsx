import React, { useState } from 'react';
import axios from 'axios';
import './SubscribeSection.css';

const SubscribeSection = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/subscribe', { email });
            setMessage(response.data.message);
            setEmail('');
        } catch (error) {
            setMessage('Subscription failed. Please try again.');
        }
    };

    return (
        <div className="subscribe-section">
            <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
            <form onSubmit={handleSubscribe}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default SubscribeSection;
