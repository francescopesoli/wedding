import React, { useState } from 'react';
import { Box, Button, Typography, Modal, TextField, IconButton, Snackbar } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function DonationSection() {
    const [open, setOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleCopy = (text: string, label: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setSnackbarMessage(`${label} copiato negli appunti`);
            setSnackbarOpen(true);
        });
    };

    const handleSnackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    return (
        <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography
                variant="h3"
                sx={{
                    fontFamily: '"Great Vibes", cursive',
                    color: 'primary.main',
                    mb: 2
                }}
            >
                Aiutaci a costruire il nostro nido d'amore
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleOpen}
                sx={{
                    fontFamily: '"Roboto", sans-serif',
                    fontSize: '1.1rem',
                    padding: '10px 20px',
                }}
            >
                Fai una donazione
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
                        Dettagli per la donazione
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <TextField
                            fullWidth
                            label="Intestatario"
                            value="Francesco e Beatrice"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <IconButton
                            onClick={() => handleCopy("Francesco e Beatrice", "Intestatario")}
                            sx={{ ml: 1 }}
                        >
                            <ContentCopyIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                            fullWidth
                            label="IBAN"
                            value="IT60X0542811101000000123456"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <IconButton
                            onClick={() => handleCopy("IT60X0542811101000000123456", "IBAN")}
                            sx={{ ml: 1 }}
                        >
                            <ContentCopyIcon />
                        </IconButton>
                    </Box>
                    <Typography sx={{ mt: 2 }}>
                        Grazie per il vostro supporto nel realizzare il nostro sogno!
                    </Typography>
                </Box>
            </Modal>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message={snackbarMessage}
            />
        </Box>
    );
}

