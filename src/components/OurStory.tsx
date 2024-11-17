import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const events = [
    {
        date: '2020',
        title: 'Primo Incontro',
        description: 'Ci siamo incontrati durante un evento di beneficenza a Roma.',
    },
    {
        date: '2021',
        title: 'Primo Appuntamento',
        description: 'La nostra prima cena romantica a Trastevere.',
    },
    {
        date: '2024',
        title: 'La Proposta',
        description: 'Francesco ha fatto la proposta durante un weekend a Venezia.',
    },
    {
        date: '2025',
        title: 'Il Grande Giorno',
        description: 'Ci sposiamo!',
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
            </Container>
        </Box>
    );
}