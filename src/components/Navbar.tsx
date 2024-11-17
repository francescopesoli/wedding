import { Navbar, Nav, Container } from 'react-bootstrap';

export default function WeddingNavbar() {
    return (
        <Navbar bg="transparent" expand="lg" fixed="top" className="fade-in">
            <Container>
                <Navbar.Brand href="#home" className="elven-script">Francesco & Beatrice</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className="elven-text">Home</Nav.Link>
                        <Nav.Link href="#storia" className="elven-text">La Nostra Storia</Nav.Link>
                        <Nav.Link href="#cerimonia" className="elven-text">Cerimonia</Nav.Link>
                        <Nav.Link href="#contattaci" className="elven-text">Contattaci</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <style jsx>{`
        .fade-in { animation: fadeIn 1s ease-in forwards; }
        .elven-text { transition: color 0.3s; }
        .elven-text:hover { color: #e6e6fa; }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
        </Navbar>
    );
}
