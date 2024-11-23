import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

const LoadingPage: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                background: 'linear-gradient(to right, #e6e6fa, #f0f8ff)',
            }}
        >
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontFamily: '"Great Vibes", cursive', color: '#4a0e4e' }}>
                Benvenuti al matrimonio di
            </Typography>
            <Typography variant="h2" component="h2" gutterBottom sx={{ fontFamily: '"Great Vibes", cursive', color: '#4a0e4e' }}>
                Beatrice e Francesco
            </Typography>
            <CircularProgress size={60} thickness={4} sx={{ color: '#4a0e4e', mt: 4 }} />
        </Box>
    );
};

export default LoadingPage;

