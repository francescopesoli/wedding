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
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    function calculateTimeLeft(): TimeLeft {
        const difference = +targetDate - +new Date();
        let timeLeft: TimeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = Object.keys(timeLeft).map((interval) => {
        if (!timeLeft[interval as keyof TimeLeft]) {
            return null;
        }

        return (
            <span className="countdown-item" key={interval}>
                <span className="countdown-value">{timeLeft[interval as keyof TimeLeft]}</span>
                <span className="countdown-interval">{interval}</span>
            </span>
        );
    });

    return (
        <div className="countdown">
            {timerComponents.length ? timerComponents : <span>È il grande giorno!</span>}
            <style jsx>{`
                .countdown {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;
                    font-family: 'Cormorant Garamond', serif;
                    margin-top: 2rem;
                }
                .countdown-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background-color: rgba(255, 255, 255, 0.8);
                    padding: 0.5rem 1rem;
                    border-radius: 8px;
                }
                .countdown-value {
                    font-size: 2rem;
                    font-weight: bold;
                    color: #4a6741;
                }
                .countdown-interval {
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    color: #9370db;
                }
            `}</style>
        </div>
    );
};

export default Countdown;