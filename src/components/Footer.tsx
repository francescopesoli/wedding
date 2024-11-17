// components/Footer.tsx
import { Container } from 'react-bootstrap';

export default function Footer() {
    return (
        <footer className="py-4 elven-footer">
            <Container>
                <p className="text-center mb-0 elven-text">
                    &copy; 2025 Francesco & Beatrice. Tutti i diritti riservati.
                </p>
            </Container>
        </footer>
    );
}
