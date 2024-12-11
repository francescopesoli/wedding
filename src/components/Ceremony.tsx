import React from 'react';
import {Box, Container, Grid, Typography} from '@mui/material';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('./LeafletMap'), { ssr: false });

interface Location {
    name: string;
    lat: number;
    lng: number;
    tipo: 'Chiesa' | 'Villa';
}

export default function Ceremony() {
    const locations: Location[] = [
        {
            name: 'Chiesa Parrocchiale di Santa Maria della Stella',
            lat: 41.72355159187916,
            lng: 12.663535254549735,
            tipo: 'Chiesa',
        },
    ];

    return (
        <section id="cerimonia" className="elven-bg-light" style={{ padding: '40px 0' }}>
            <Container>
                <Typography
                    variant="h2"
                    align="center"
                    className="elven-script"
                    sx={{ marginBottom: 4 }}
                >
                    Celebrazione
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Image
                            src="/assets/Chiesa-della-Stella.png"
                            alt="Chiesa Santa Maria della Stella"
                            width={500}
                            height={300}
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                        <Box display="flex" justifyContent="center" sx={{ marginTop: 3 }}>
                            <Typography className="elven-text" sx={{ textAlign: 'left' }}>
                                <strong>Sabato, 7 Giugno 2025</strong>
                                <br />
                                Ore 10:00
                                <br />
                                <strong>Parrocchia Santa Maria della Stella</strong>
                                <br />
                                Albano Laziale
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={4} sx={{ marginTop: 4 }}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h3"
                            align="center"
                            className="elven-script"
                            sx={{ marginBottom: 3 }}
                        >
                            Come Arrivare
                        </Typography>
                        <LeafletMap locations={locations} />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}