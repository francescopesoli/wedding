import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
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
            name: 'Chiesa Santa Maria della Stella',
            lat: 41.72355159187916,
            lng: 12.663535254549735,
            tipo: 'Chiesa',
        },
        {
            name: 'Villa Grande',
            lat: 41.73602522710732,
            lng: 12.61593419212444,
            tipo: 'Villa',
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
                    Celebrazione e Ricevimento
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" className="elven-script">
                            Celebrazione
                        </Typography>
                        <Image
                            src="/assets/Chiesa-della-Stella.png"
                            alt="Chiesa Santa Maria della Stella"
                            width={400}
                            height={300}
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                        <Typography className="elven-text" sx={{ marginTop: 3 }}>
                            Sabato, 7 Giugno 2025
                            <br />
                            Ore 10:00
                            <br />
                            <strong>Chiesa Santa Maria della Stella </strong>
                            <br />
                            Albano Laziale
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" className="elven-script">
                            Ricevimento
                        </Typography>
                        <Image
                            src="/assets/villa_grande.jpg"
                            alt="Villa Grande"
                            width={400}
                            height={300}
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                        <Typography className="elven-text" sx={{ marginTop: 3 }}>
                            Sabato, 7 Giugno 2025
                            <br />
                            Ore 13:00
                            <br />
                            <strong>Villa Grande </strong>
                                <br />
                            Castel Gandolfo
                        </Typography>
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