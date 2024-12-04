import React from 'react';
import { Container, Typography, Box, useTheme, useMediaQuery } from '@mui/material';

export default function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <footer className="elven-footer">
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        py: 4,
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                    }}
                >
                    <Typography
                        variant="body2"
                        className="elven-text"
                        sx={{
                            mb: isMobile ? 2 : 0,
                            textAlign: isMobile ? 'center' : 'left',
                            fontSize: { xs: '0.8rem', sm: '0.9rem' },
                        }}
                    >
                        &copy; 2025 Francesco & Beatrice. Tutti i diritti riservati.
                    </Typography>
                </Box>
                <Typography
                    variant="body2"
                    align="center"
                    sx={{
                        mt: 2,
                        fontStyle: 'italic',
                        fontSize: { xs: '0.7rem', sm: '0.8rem' },
                        color: 'rgba(255,255,255,0.7)',
                    }}
                >
                    "L'amore è paziente, l'amore è gentile. [...] L'amore non verrà mai meno." - 1 Corinzi 13:4,8
                </Typography>
            </Container>
        </footer>
    );
}

