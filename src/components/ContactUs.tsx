import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function ContactUs() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Implementa qui la logica per l'invio del form
        console.log('Form inviato');
    };

    return (
        <section id="contattaci" className="py-5 contact-us">
            <Container>
                <h2 className="text-center mb-4 elven-script">Contattaci</h2>
                <Row>
                    <Col md={6}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label className="elven-text">Nome</Form.Label>
                                <Form.Control type="text" placeholder="Inserisci il tuo nome" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label className="elven-text">Email</Form.Label>
                                <Form.Control type="email" placeholder="Inserisci la tua email" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="message">
                                <Form.Label className="elven-text">Messaggio</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Scrivi il tuo messaggio" required />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="elven-button">
                                Invia Messaggio
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <h3 className="elven-script">Informazioni di Contatto</h3>
                        <p className="elven-text contact-info">
                            Telefono: +39 123 456 7890<br />
                            Email: francesco.beatrice@example.com
                        </p>
                    </Col>
                </Row>
            </Container>
            <style jsx>{`
                .contact-us {
                    background-color: #f0fff0;
                }
                .contact-info {
                    color: #4a6741;
                }
                .elven-button {
                    background-color: #9370db;
                    border: none;
                    color: white;
                    padding: 10px 20px;
                    font-family: 'Tangerine', cursive;
                    font-size: 1.5rem;
                }
                .elven-button:hover {
                    background-color: #8a2be2;
                }
            `}</style>
        </section>
    );
}