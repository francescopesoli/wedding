import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import villaGrande from '../assets/villa_grande.jpg';
import chiesaStella from '../assets/Chiesa-della-Stella.png';

const LeafletMap = dynamic(() => import('./LeafletMap'), { ssr: false });

export default function Ceremony() {
    const locations = [
        {
            name: 'Chiesa Santa Maria della Stella',
            lat: 41.72355159187916,
            lng: 12.663535254549735,
        },
        {
            name: 'Villa Grande',
            lat: 41.73602522710732,
            lng: 12.61593419212444,
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
                    Cerimonia e Ricevimento
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" className="elven-script">
                            Cerimonia
                        </Typography>
                        <Image
                            src={chiesaStella}
                            alt="Chiesa Santa Maria della Stella"
                            width={400}
                            height={300}
                            layout="responsive"
                        />
                        <Typography className="elven-text" sx={{ marginTop: 3 }}>
                            Sabato, 7 Giugno 2025
                            <br />
                            Ore 10:00
                            <br />
                            Chiesa Santa Maria della Stella
                            <br />
                            Albano Laziale
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" className="elven-script">
                            Ricevimento
                        </Typography>
                        <Image
                            src={villaGrande}
                            alt="Villa Grande"
                            width={400}
                            height={300}
                            layout="responsive"
                        />
                        <Typography className="elven-text" sx={{ marginTop: 3 }}>
                            Sabato, 7 Giugno 2025
                            <br />
                            Dalle ore 13:00
                            <br />
                            Villa Grande
                            <br />
                            Albano Laziale
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