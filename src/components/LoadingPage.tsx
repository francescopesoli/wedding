import React from 'react';
import { Box, Typography, CircularProgress, useTheme, useMediaQuery } from '@mui/material';

const LoadingPage: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                width: '100%',
                padding: isMobile ? '50px' : '40px',
                background: 'linear-gradient(to right, #e6e6fa, #f0f8ff)',
                textAlign: 'center',
            }}
        >
            <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                    fontFamily: '"Great Vibes", cursive',
                    color: '#4a0e4e',
                    fontSize: isMobile ? '3rem' : '3rem',
                    marginBottom: isMobile ? '1rem' : '1.5rem',
                    marginLeft: isMobile ? '1.5rem' : '0',
                }}
            >
                Benvenuti al matrimonio di
            </Typography>
            <Typography
                variant="h2"
                component="h2"
                gutterBottom
                sx={{
                    fontFamily: '"Great Vibes", cursive',
                    color: '#4a0e4e',
                    fontSize: isMobile ? '2rem' : '3.5rem',
                    marginBottom: isMobile ? '2rem' : '2.5rem',
                    marginLeft: isMobile ? '1.5rem' : '0',
                }}
            >
                Beatrice e Francesco
            </Typography>
            <CircularProgress
                size={isMobile ? 50 : 60}
                thickness={4}
                sx={{
                    color: '#4a0e4e',
                    marginTop: isMobile ? '2rem' : '2.5rem'
                }}
            />
        </Box>
    );
};

export default LoadingPage;

