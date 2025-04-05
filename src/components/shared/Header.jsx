import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../../sass/top-nav.scss';

const Header = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [copied, setCopied] = useState(false);
    const email = 'tolanidaniel@gmail.com'; // Replace with your actual email

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy email:', err);
        }
    };

    const formatTime = (date) => {
        const timeString = date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'Africa/Lagos' // WAT timezone
        });
        return timeString.replace(':', '<span class="blink">:</span>');
    };

    return (
        <nav className="top-nav-section">
            <div className="nav-list">
                <NavLink to="/" className="logo">
                    DNX<span className="copyright">©</span>
                </NavLink>
                <div className="time">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="none">
                        <path fill="var(--svg-fill, #44FF86)" d="M7.259 15.306h-2.35v-2.35h2.35v2.35Zm0-2.35v-2.349h2.349v2.35h-2.35Zm-2.35 0H2.56v-2.349h2.35v2.35Zm4.699-2.349V5.91h2.349v4.698h-2.35Zm-7.048 0H.211V5.91h2.35v4.698Z"/>
                        <path fill="var(--svg-fill, #44FF86)" d="M7.259.353h-2.35v2.35h2.35V.352Zm0 2.35v2.349h2.349v-2.35h-2.35Zm-2.35 0H2.56v2.349h2.35v-2.35Zm4.699 2.349V9.75h2.349V5.052h-2.35Zm-7.048 0H.211V9.75h2.35V5.052Z"/>
                        <path fill="var(--svg-fill, #44FF86)" d="M4.91 12.957h2.349v-2.35h2.349V5.052h-2.35v-2.35H4.91v2.35H2.56V10.607h2.35v2.35Z"/>
                        <path fill="var(--svg-stroke, #000)" d="M6.953 12.33H5.54v-1.415h1.414v1.415Zm0-1.415V9.502h1.414v1.415H6.953Zm-1.414 0H4.125V9.502H5.54v1.415Zm2.828-1.414V6.674h1.414V9.5H8.367Zm-4.242 0H2.711V6.674h1.414V9.5Z"/>
                        <path fill="var(--svg-stroke, #000)" d="M6.953 3.33H5.54v1.413h1.414V3.33Zm0 1.413v1.414h1.414V4.743H6.953Zm-1.414 0H4.125v1.414H5.54V4.743Zm2.828 1.414v2.828h1.414V6.157H8.367Zm-4.242 0H2.711v2.828h1.414V6.157Z"/>
                        <path fill="var(--svg-stroke, #000)" d="M5.54 10.915h1.413V9.502h1.414V6.157H6.953V4.743H5.54v1.414H4.125v3.344H5.54v1.415Z"/>
                    </svg> <span dangerouslySetInnerHTML={{ __html: formatTime(currentTime) }}></span> WAT
                </div>
                <div className="contact" onClick={handleCopyEmail}>
                    {copied ? 'copied!' : 'contact'}
                </div>
            </div>

        </nav>
    );
};

export default Header;