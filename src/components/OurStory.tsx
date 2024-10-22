import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const events = [
    { date: '2020', title: 'Primo Incontro', description: 'Ci siamo incontrati durante un evento di beneficenza a Roma.' },
    { date: '2021', title: 'Primo Appuntamento', description: 'La nostra prima cena romantica a Trastevere.' },
    { date: '2024', title: 'La Proposta', description: 'Francesco ha fatto la proposta durante un weekend a Venezia.' },
    { date: '2025', title: 'Il Grande Giorno', description: 'Ci sposiamo!' },
];

export default function OurStory() {
    return (
        <section id="storia" className="py-5 our-story">
            <Container>
                <h2 className="text-center mb-4 elven-script">La Nostra Storia</h2>
                <div className="timeline">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            className="timeline-event"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Row>
                                <Col md={4} className="text-md-end">
                                    <h3 className="elven-script event-date">{event.date}</h3>
                                </Col>
                                <Col md={8}>
                                    <h4 className="elven-text event-title">{event.title}</h4>
                                    <p className="event-description">{event.description}</p>
                                </Col>
                            </Row>
                        </motion.div>
                    ))}
                </div>
            </Container>
            <style jsx>{`
                .our-story {
                    background-color: #f0f8ff;
                }
                .timeline::before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    width: 2px;
                    height: 100%;
                    background: #b0e0e6;
                }
                .timeline-event {
                    margin-bottom: 50px;
                }
                .event-date {
                    color: #4a6741;
                    font-size: 2rem;
                }
                .event-title {
                    color: #9370db;
                    font-size: 1.5rem;
                }
                .event-description {
                    color: #708090;
                }
            `}</style>
        </section>
    );
}