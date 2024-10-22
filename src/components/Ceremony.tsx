import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('./LeafletMap'), { ssr: false });

export default function Ceremony() {
    const locations = [
        { name: "Chiesa Santa Maria della Stella", lat: 41.72355159187916, lng: 12.663535254549735 },
        { name: "Villa Grande", lat: 41.73602522710732, lng: 12.61593419212444 }
    ];

    return (
        <section id="cerimonia" className="py-5 elven-bg-light">
            <Container>
                <h2 className="text-center mb-4 elven-script">Cerimonia e Ricevimento</h2>
                <Row>
                    <Col md={6}>
                        <h3 className="elven-script">Cerimonia</h3>
                        <Image
                            src="/placeholder.svg"
                            alt="Chiesa Santa Maria della Stella"
                            width={400}
                            height={300}
                            layout="responsive"
                        />
                        <p className="elven-text mt-3">
                            Sabato, 7 Giugno 2025<br />
                            Ore 15:00<br />
                            Chiesa Santa Maria della Stella<br />
                            Albano Laziale
                        </p>
                    </Col>
                    <Col md={6}>
                        <h3 className="elven-script">Ricevimento</h3>
                        <Image
                            src="/placeholder.svg"
                            alt="Villa Grande"
                            width={400}
                            height={300}
                            layout="responsive"
                        />
                        <p className="elven-text mt-3">
                            Sabato, 7 Giugno 2025<br />
                            Dalle ore 17:00<br />
                            Villa Grande<br />
                            Albano Laziale
                        </p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <h3 className="elven-script text-center mb-3">Come Arrivare</h3>
                        <LeafletMap locations={locations} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}