import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Typography, Snackbar, Alert } from '@mui/material';
import Box from '@mui/material/Box';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.send(
                'service_wam6x3e', // Sostituisci con il tuo Service ID di EmailJS
                'template_a5szx2h', // Sostituisci con il tuo Template ID di EmailJS
                {
                    from_name: name,
                    from_email: email,
                    message: message,
                    to_email: 'francesco.beatrice.matrimonio@gmail.com', // L'email degli sposi
                },
                'S5_Tby8S4pR9OEghN' // Sostituisci con il tuo User ID di EmailJS
            );

            setSnackbarMessage('Messaggio inviato con successo!');
            setSnackbarSeverity('success');
            setOpenSnackbar(true);
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Errore nell\'invio del messaggio:', error);
            setSnackbarMessage('Si è verificato un errore. Riprova più tardi.');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
        }

        setIsSubmitting(false);
    };

    const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <Box component="section" id="contattaci" sx={{ py: 5 }} className="contact-us">
            <Container>
                <Typography variant="h2" align="center" className="elven-script" gutterBottom>
                    Contattaci
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box component="form" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { mb: 2 } }}>
                            <TextField
                                id="name"
                                label="Nome"
                                variant="outlined"
                                fullWidth
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                InputLabelProps={{ className: 'elven-text' }}
                                inputProps={{ className: 'elven-text' }}
                                sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}
                            />
                            <TextField
                                id="email"
                                label="Email"
                                type="email"
                                variant="outlined"
                                fullWidth
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                InputLabelProps={{ className: 'elven-text' }}
                                inputProps={{ className: 'elven-text' }}
                                sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}
                            />
                            <TextField
                                id="message"
                                label="Inserisci qui eventuali intolleranze alimentari o altre richieste"
                                variant="outlined"
                                fullWidth
                                required
                                multiline
                                rows={3}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                InputLabelProps={{ className: 'elven-text' }}
                                inputProps={{ className: 'elven-text' }}
                                sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                className="elven-button"
                                disabled={isSubmitting}
                                sx={{ mt: 2, fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}
                            >
                                {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" className="elven-script" sx={{ fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' } }}>
                            Informazioni di Contatto
                        </Typography>
                        <Typography className="elven-text contact-info" sx={{ mt: 2, fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>
                            Email: francesco.beatrice.matrimonio@gmail.com
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
}

