import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
            <Container className="content-container">
                <Row className="align-items-center" style={{ minHeight: '100vh' }}>
                    <Col md={12}>
                        <h1 className="text-center elven-script">Francesco & Beatrice</h1>
                        <h2 className="text-center elven-text">7 Giugno 2025</h2>
                        <Countdown targetDate={weddingDate} />
                    </Col>
                </Row>
            </Container>
            <style jsx>{`
                .hero {
                    position: relative;
                    color: #f8f7f2;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
                    overflow: hidden;
                }
                .background-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                }
                .content-container {
                    position: relative;
                    z-index: 1;
                    background-color: rgba(0, 0, 0, 0.3);
                    padding: 2rem;
                    border-radius: 10px;
                }
                .image-container {
                    width: 100%;
                    max-width: 600px;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
                }
                .elven-script {
                    font-size: 4rem;
                    color: #ffffff;
                    text-shadow: 0 0 10px rgba(255,255,255,0.5);
                }
                .elven-text {
                    font-size: 2rem;
                    color: #e6e6fa;
                    text-shadow: 0 0 5px rgba(230,230,250,0.5);
                }
            `}</style>
        </section>
    );
}