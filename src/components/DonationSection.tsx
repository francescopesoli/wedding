import React, {useState} from 'react';
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
        gap: 2,
    },
};

const DONATION_DETAILS = {
    accountHolders: ["Francesco Pesoli", "Beatrice Badei"],
    iban: "IT50E0301503200000004360778",
    causale: "Contributo per il sogno di Francesco e Beatrice",
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
        <Box sx={{mt: 6, textAlign: 'center'}}>
            <Typography variant="h3" sx={styles.title}>
                Per realizzare il nostro sogno
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => setOpen(true)}
                sx={styles.button}
            >
                Clicca qui
            </Button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles.modalBox}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{mb: 2}}>
                        Dettagli per il Bonifico
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                        {DONATION_DETAILS.accountHolders.map((holder, index) => (
                            <Box key={index} sx={{display: 'flex', alignItems: 'center'}}>
                                <TextField
                                    fullWidth
                                    label={`Intestatario ${index + 1}`}
                                    value={holder}
                                    InputProps={{readOnly: true}}
                                />
                                <IconButton
                                    aria-label={`Copia Intestatario ${index + 1}`}
                                    onClick={() => handleCopy(holder, `Intestatario ${index + 1}`)}
                                    sx={{ml: 1}}
                                >
                                    <ContentCopyIcon/>
                                </IconButton>
                            </Box>
                        ))}
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <TextField
                                fullWidth
                                label="IBAN"
                                value={DONATION_DETAILS.iban}
                                InputProps={{readOnly: true}}
                            />
                            <IconButton
                                aria-label={`Copia IBAN`}
                                onClick={() => handleCopy(DONATION_DETAILS.iban, "IBAN")}
                                sx={{ml: 1}}
                            >
                                <ContentCopyIcon/>
                            </IconButton>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', mt: 2}}>
                        <TextField
                            fullWidth
                            label="Causale"
                            value={DONATION_DETAILS.causale}
                            InputProps={{readOnly: true}}
                        />
                        <IconButton
                            aria-label={`Copia Causale`}
                            onClick={() => handleCopy(DONATION_DETAILS.causale, "Causale")}
                            sx={{ml: 1}}
                        >
                            <ContentCopyIcon/>
                        </IconButton>
                    </Box>
                    <Typography sx={{mt: 2}}>
                        Grazie per il vostro supporto nel realizzare il nostro sogno!
                    </Typography>
                </Box>
            </Modal>
            <Snackbar
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message={snackbarMessage}
            />
        </Box>
    );
}