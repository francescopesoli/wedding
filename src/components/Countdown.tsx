import React, { useState, useEffect } from 'react';
import {Typography, Box, Grid, CircularProgress,useTheme, useMediaQuery} from '@mui/material';

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
    const [isLoading, setIsLoading] = useState(true);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const labels: { [key: string]: string } = {
        days: 'Giorni',
        hours: 'Ore',
        minutes: 'Minuti',
        seconds: 'Secondi',
    };

    useEffect(() => {
        const calculateTimeLeft = (): TimeLeft => {
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
        };

        setTimeLeft(calculateTimeLeft());
        setIsLoading(false);

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <CircularProgress size={isMobile ? 30 : 40} />
            </Box>
        );
    }

    if (Object.keys(timeLeft).length === 0) {
        return (
            <Typography variant="h5" sx={{ color: '#fff', mt: 4 }}>
                È il grande giorno!
            </Typography>
        );
    }

    return (
        <Box sx={{ mt: { xs: 1, sm: 2 } }}>
            <Grid container spacing={isMobile ? 1 : 2} justifyContent="center">
                {Object.entries(timeLeft).map(([interval, value]) => (
                    <Grid item key={interval}>
                        <Box
                            sx={{
                                backgroundColor: 'primary.main',
                                padding: isMobile ? '4px 8px' : '8px 16px',
                                borderRadius: 2,
                                display: 'flex',
                                flexDirection: isMobile ? 'row' : 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography
                                variant={isMobile ? "body1" : "h4"}
                                sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: isMobile ? '0.9rem' : { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                                    mr: isMobile ? 1 : 0,
                                }}
                            >
                                {value}
                            </Typography>
                            <Typography
                                variant="caption"
                                sx={{
                                    color: 'rgba(255,255,255,0.8)',
                                    textTransform: 'uppercase',
                                    fontSize: isMobile ? '0.6rem' : { xs: '0.6rem', sm: '0.8rem', md: '1rem' },
                                }}
                            >
                                {labels[interval]}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Countdown;