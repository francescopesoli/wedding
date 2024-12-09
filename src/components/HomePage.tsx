import React from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import Countdown from './Countdown';
import ImageSlider from './ImageSlider';

export default function HomePage() {
    const weddingDate = new Date('2025-06-07T10:30:00');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            component="section"
            id="home"
            sx={{
                minHeight: '100vh',
                display: 'flow !important',
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
            }}
        >
            <Container
                maxWidth="md"
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 4,
                }}
            >
                <Box
                    sx={{
                        width: '115%',
                        height: isMobile ? '40vh' : '60vh',
                        overflow: 'hidden',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        marginBottom: '3rem',
                        marginTop: '3rem',
                    }}
                >
                    <ImageSlider />
                </Box>
                <Box
                    textAlign="center"
                    sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        borderRadius: '8px',
                        padding: { xs: '20px', sm: '30px', md: '40px' },
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        width: '100%',
                        maxWidth: { xs: '90%', sm: '80%', md: '90%' },
                        mb: 4, // Add margin bottom to create space between the text box and the image slider
                    }}
                >
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            fontFamily: '"Great Vibes", cursive',
                            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                            color: 'primary.main',
                            mb: { xs: 1, sm: 2 },
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
                            color: 'text.primary',
                            mb: { xs: 2, sm: 3 },
                        }}
                    >
                        7 Giugno 2025
                    </Typography>
                    <Typography
                        variant="h3"
                        component="h3"
                        gutterBottom
                        sx={{
                            fontFamily: '"Great Vibes", cursive',
                            color: 'primary.main',
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                            mb: { xs: 1, sm: 2 },
                        }}
                    >
                        Ci sposiamo tra
                    </Typography>
                    <Countdown targetDate={weddingDate} />
                </Box>


            </Container>
        </Box>
    );
}

