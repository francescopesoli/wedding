import React, { useState } from 'react';
import {
    Box,
    Button,
    Typography,
    Modal,
    TextField,
    IconButton,
    Snackbar,
} from '@mui/material';
import dynamic from 'next/dynamic';

const ContentCopyIcon = dynamic(() => import('@mui/icons-material/ContentCopy'));

const styles = {
    title: {
        fontFamily: '"Great Vibes", cursive',
        color: 'primary.main',
        mb: 2,
    },
    button: {
        fontFamily: '"Roboto", sans-serif',
        fontSize: '1.1rem',
        padding: '10px 20px',
    },
    modalBox: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
    },
};

const DONATION_DETAILS = {
    accountHolder: "Francesco e Beatrice",
    iban: "IT60X0542811101000000123456",
};

export default function DonationSection() {
    const [open, setOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleCopy = (text: string, label: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setSnackbarMessage(`${label} copiato negli appunti`);
            setSnackbarOpen(true);
        });
    };

    const handleSnackbarClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason !== 'clickaway') setSnackbarOpen(false);
    };

    return (
        <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography variant="h3" sx={styles.title}>
                Aiutaci a costruire il nostro nido d'amore
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => setOpen(true)}
                sx={styles.button}
            >
                Clicca qui per aiutarci
            </Button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles.modalBox}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
                        Dettagli per il Bonifico
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <TextField
                            fullWidth
                            label="Intestatario"
                            value={DONATION_DETAILS.accountHolder}
                            InputProps={{ readOnly: true }}
                        />
                        <IconButton
                            onClick={() => handleCopy(DONATION_DETAILS.accountHolder, "Intestatario")}
                            sx={{ ml: 1 }}
                        >
                            <ContentCopyIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                            fullWidth
                            label="IBAN"
                            value={DONATION_DETAILS.iban}
                            InputProps={{ readOnly: true }}
                        />
                        <IconButton
                            onClick={() => handleCopy(DONATION_DETAILS.iban, "IBAN")}
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
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message={snackbarMessage}
            />
        </Box>
    );
}