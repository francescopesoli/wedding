import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import DonationSection from "./DonationSection";

const events = [
    {
        date: '08/07/2020',
        title: 'Primo Incontro',
        description: 'Francesco e Beatrice si sono incontrati in una festa a sorpresa in un locale sul Lago, è stato inaspettato anche per loro... sorpresa!\n',
    },
    {
        date: '07/08/2020',
        title: 'Inizio come coppia impegnata',
        description: 'Su una panchina di villa Doria ad Albano ci siamo scelti e abbiamo deciso di percorrere insieme un cammino di scoperta nella sincerità, nel rispetto, nell\'impegno e nell\'amore reciproco\n',
    },
    {
        date: '17/03/2024',
        title: 'La Proposta',
        description: 'Francesco portò Beatrice in un luogo incantevole, sulla spiaggia del Lago di Albano, per scattare qualche foto. All\'improvviso si inginocchiò, la sorprese con un anello e le chiese di sposarlo...Beatrice disse di sì! Coronarono così un momento indimenticabile della loro storia.\n',
    },
    {
        date: '07/06/2025',
        title: 'Il Grande Giorno',
        description: 'Ci sposiamo!',
    },
    {
        date: '202..',
        title: 'La Nostra Casa',
        description: `Il nostro cammino insieme continua, due cuori e una... Se volete, potete contribuire a realizzare la nostra casa
`,
    },
];

export default function OurStory() {
    return (
        <Box component="section" id="storia" sx={{ py: 5 }} className="our-story">
            <Container>
                <Typography
                    variant="h2"
                    align="center"
                    gutterBottom
                    className="elven-script"
                >
                    La Nostra Storia
                </Typography>
                <div className="timeline">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            className="timeline-event"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Grid container spacing={2}>
                                <Grid
                                    item
                                    xs={12}
                                    md={4}
                                    sx={{ textAlign: { xs: 'left', md: 'right' } }}
                                >
                                    <Typography
                                        variant="h3"
                                        className="elven-script event-date"
                                    >
                                        {event.date}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <Typography
                                        variant="h4"
                                        className="elven-text event-title"
                                    >
                                        {event.title}
                                    </Typography>
                                    <Typography className="event-description">
                                        {event.description}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </motion.div>
                    ))}
                </div>
                <DonationSection />
            </Container>
        </Box>
    );
}