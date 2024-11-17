import React from 'react';
import { Container, Grid, TextField, Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function ContactUs() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Implementa qui la logica per l'invio del form
        console.log('Form inviato');
    };

    return (
        <Box component="section" id="contattaci" sx={{ py: 5 }} className="contact-us">
            <Container>
                <Typography variant="h2" align="center" className="elven-script" gutterBottom>
                    Contattaci
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField
                                id="name"
                                label="Nome"
                                variant="outlined"
                                fullWidth
                                required
                                margin="normal"
                                placeholder="Inserisci il tuo nome"
                                InputLabelProps={{ className: 'elven-text' }}
                                inputProps={{ className: 'elven-text' }}
                            />
                            <TextField
                                id="email"
                                label="Email"
                                type="email"
                                variant="outlined"
                                fullWidth
                                required
                                margin="normal"
                                placeholder="Inserisci la tua email"
                                InputLabelProps={{ className: 'elven-text' }}
                                inputProps={{ className: 'elven-text' }}
                            />
                            <TextField
                                id="message"
                                label="Messaggio"
                                variant="outlined"
                                fullWidth
                                required
                                margin="normal"
                                multiline
                                rows={3}
                                placeholder="Scrivi il tuo messaggio"
                                InputLabelProps={{ className: 'elven-text' }}
                                inputProps={{ className: 'elven-text' }}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                className="elven-button"
                                sx={{ mt: 2 }}
                            >
                                Invia Messaggio
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" className="elven-script">
                            Informazioni di Contatto
                        </Typography>
                        <Typography className="elven-text contact-info" sx={{ mt: 2 }}>
                            Telefono: +39 123 456 7890
                            <br />
                            Email: francesco.beatrice@example.com
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}