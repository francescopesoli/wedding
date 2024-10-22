import React from 'react';
import Head from 'next/head';
import { Navbar, Nav, Container } from 'react-bootstrap';
import HomePage from '../components/HomePage';
import OurStory from '../components/OurStory';
import Ceremony from '../components/Ceremony';
import ContactUs from '../components/ContactUs';

export default function Home() {
    return (
        <div className="wedding-page">
            <Head>
                <title>Francesco & Beatrice - Matrimonio</title>
                <meta name="description" content="Sito web del matrimonio di Francesco e Beatrice"/>
                <link rel="icon" href="/favicon.ico"/>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                    integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
                    crossOrigin="anonymous"
                />
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
                    crossOrigin=""
                />
            </Head>

            <Navbar bg="transparent" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home" className="elven-script">Francesco & Beatrice</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className="elven-text">Home</Nav.Link>
                            <Nav.Link href="#storia" className="elven-text">La Nostra Storia</Nav.Link>
                            <Nav.Link href="#cerimonia" className="elven-text">Cerimonia</Nav.Link>
                            <Nav.Link href="#contattaci" className="elven-text">Contattaci</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <main>
                <HomePage/>
                <OurStory/>
                <Ceremony/>
                <ContactUs/>
            </main>

            <footer className="py-4 elven-footer">
                <Container>
                    <p className="text-center mb-0 elven-text">
                        &copy; 2025 Francesco & Beatrice. Tutti i diritti riservati.
                    </p>
                </Container>
            </footer>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap');

                body {
                    font-family: 'Cormorant Garamond', serif;
                    background-color: #f8f7f2;
                    color: #3a3a3a;
                }

                .elven-script {
                    font-family: 'Tangerine', cursive;
                    font-size: 2.5em;
                    color: #4a6741;
                }

                .elven-text {
                    font-family: 'Cormorant Garamond', serif;
                    font-style: italic;
                    font-size: 1.2em;
                    color: #3a3a3a;
                }

                .elven-bg-light {
                    background-color: #e6e6fa;
                }

                .elven-button {
                    background-color: #9370db;
                    border: none;
                    font-family: 'Tangerine', cursive;
                    font-size: 1.5em;
                    padding: 10px 30px;
                    color: white;
                }

                .elven-button:hover {
                    background-color: #8a2be2;
                }

                .elven-footer {
                    background-color: #4a6741;
                    color: #f8f7f2;
                }
            `}</style>
        </div>
    );
}