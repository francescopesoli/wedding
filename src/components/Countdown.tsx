import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid } from '@mui/material';

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

    if (!isClient) {
        return null;
    }

    if (Object.keys(timeLeft).length === 0) {
        return (
            <Typography variant="h5" sx={{ color: '#fff' }}>
                È il grande giorno!
            </Typography>
        );
    }

    return (
        <Box sx={{ mt: 4 }}>
            <Grid container spacing={2} justifyContent="center">
                {Object.entries(timeLeft).map(([interval, value]) => (
                    <Grid item key={interval}>
                        <Box
                            sx={{
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                padding: 2,
                                borderRadius: 2,
                                minWidth: 60,
                                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                            }}
                        >
                            <Typography
                                variant="h4"
                                className="elven-script"
                                sx={{
                                    color: '#2c2a2a',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    fontSize: '2rem',
                                }}
                            >
                                {value}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                className="elven-text"
                                sx={{
                                    color: '#9370db',
                                    textAlign: 'center',
                                    textTransform: 'uppercase',
                                    fontSize: '1rem',
                                }}
                            >
                                {interval}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Countdown;
