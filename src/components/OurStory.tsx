import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import DonationSection from "./DonationSection";

const events = [
    {
        date: '2020',
        title: 'Primo Incontro',
        description: 'Ci siamo incontrati in una festa a sorpresa, è stato inaspettato anche per noi... sorpresa!\n',
    },
    {
        date: '2021',
        title: 'Inizio come coppia innamorata ',
        description: 'Su una panchina nella villa di Albano ci siamo scelti e abbiamo deciso di percorrere insieme un cammino di scoperta nella sincerità, nel rispetto, nell\'impegno e nell\'amore reciproco\n',
    },
    {
        date: '2024',
        title: 'La Proposta',
        description: 'Era una domenica del 13 Marzo, sulla spiaggia del Lago Albano. In quel luogo incantevole, Francesco si è inginocchiato e ha chiesto a Beatrice di sposarlo, coronando così un momento indimenticabile della loro storia.\n',
    },
    {
        date: '2025',
        title: 'Il Grande Giorno',
        description: 'Ci sposiamo!',
    },
    {
        date: '202..',
        title: 'La Nostra Casa',
        description: `Il nostro cammino insieme continua... Se volete, potete contribuire a realizzare la nostra casa`,
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