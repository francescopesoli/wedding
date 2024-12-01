import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Countdown from './Countdown';
import ImageSlider from './ImageSlider';

export default function HomePage() {
    const weddingDate = new Date('2025-06-07T10:30:00');

    return (
        <Box
            component="section"
            id="home"
            sx={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: 'linear-gradient(-45deg, #ffffff, #4a6741, #9370db, #b0e0e6)',
                backgroundSize: '400% 400%',
                animation: 'gradient 15s ease infinite',
                '@keyframes gradient': {
                    '0%': {
                        backgroundPosition: '0% 50%',
                    },
                    '50%': {
                        backgroundPosition: '100% 50%',
                    },
                    '100%': {
                        backgroundPosition: '0% 50%',
                    },
                },
                px: { xs: 2, sm: 4 }, // Padding laterale per schermi piccoli
            }}
        >
            <ImageSlider />
            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                <Box textAlign="center">
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            fontFamily: '"Great Vibes", cursive',
                            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' },
                            color: 'white',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                            mb: 2,
                        }}
                    >
                        Francesco & Beatrice
                    </Typography>
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontFamily: '"Roboto", sans-serif',
                            fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
                            color: 'white',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                            mb: 4,
                        }}
                    >
                        7 Giugno 2025
                    </Typography>
                    <Box
                        sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            borderRadius: '8px',
                            padding: { xs: '10px', sm: '20px' },
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="h3"
                            gutterBottom
                            sx={{
                                fontFamily: '"Great Vibes", cursive',
                                color: 'primary.main',
                                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                            }}
                        >
                            Ci sposiamo tra
                        </Typography>
                        <Countdown targetDate={weddingDate} />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}