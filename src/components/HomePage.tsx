import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Countdown from './Countdown';
import homepage from '../assets/homepage.jpeg';

export default function HomePage() {
    const weddingDate = new Date('2025-06-07T10:30:00');

    return (
        <section id="home" className="hero">
            <div className="background-image">
                <Image
                    src={homepage}
                    alt="Francesco e Beatrice background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                />
            </div>
            <Container>
                <Grid container alignItems="center" style={{ minHeight: '100vh' }}>
                    <Grid item xs={12}>
                        <Typography variant="h1" align="center" className="elven-script">
                            Francesco & Beatrice
                        </Typography>
                        <Typography variant="h2" align="center" className="elven-text">
                            7 Giugno 2025
                        </Typography>
                        <Countdown targetDate={weddingDate} />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}