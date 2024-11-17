import React, { useState, useEffect } from 'react';

interface CountdownProps {
    targetDate: Date;
}

interface TimeLeft {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({});
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    }, [timeLeft]);

    function calculateTimeLeft(): TimeLeft {
        const difference = +targetDate - +new Date();
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return {};
    }

    const timerComponents = Object.keys(timeLeft).map((interval) => (
        <span key={interval} className="countdown-item">
            <span className="countdown-value bounce">{timeLeft[interval as keyof TimeLeft]}</span>
            <span className="countdown-interval">{interval}</span>
        </span>
    ));

    return (
        <div className="countdown">
            {isClient && (timerComponents.length ? timerComponents : <span>È il grande giorno!</span>)}
            <style jsx>{`
                .countdown-item {
                    margin: 0 5px;
                }
                .countdown-value {
                    font-size: 2rem;
                    font-weight: bold;
                    animation: bounce 1s ease infinite;
                }
                .countdown-interval {
                    font-size: 1rem;
                    text-transform: uppercase;
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>
        </div>
    );
};

export default Countdown;
