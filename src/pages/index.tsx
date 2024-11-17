import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import {
    AppBar,
    Toolbar,
    Container,
    Typography,
    IconButton,
    Button,
    Menu,
    MenuItem,
    Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomePage from '../components/HomePage';
import OurStory from '../components/OurStory';
import Ceremony from '../components/Ceremony';
import ContactUs from '../components/ContactUs';
import AOS from 'aos';
import 'leaflet/dist/leaflet.css';
import '../styles/global.css';

export default function Home() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (
        <div className="wedding-page">
            <Head>
                <title>Francesco & Beatrice - Matrimonio</title>
                <meta
                    name="description"
                    content="Sito web del matrimonio di Francesco e Beatrice"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AppBar position="fixed" color="transparent" elevation={0}>
                <Container>
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            component="a"
                            href="#home"
                            className="elven-script"
                            sx={{
                                flexGrow: 1,
                                textDecoration: 'none',
                                color: 'inherit',
                            }}
                        >
                            Francesco & Beatrice
                        </Typography>
                        {/* Menu Mobile */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenuOpen}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={handleMenuClose}>
                                    <Button href="#home" className="elven-text">
                                        Home
                                    </Button>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <Button href="#storia" className="elven-text">
                                        La Nostra Storia
                                    </Button>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <Button href="#cerimonia" className="elven-text">
                                        Cerimonia
                                    </Button>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <Button href="#contattaci" className="elven-text">
                                        Contattaci
                                    </Button>
                                </MenuItem>
                            </Menu>
                        </Box>
                        {/* Menu Desktop */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button href="#home" className="elven-text" sx={{ color: 'black' }}>
                                Home
                            </Button>
                            <Button href="#storia" className="elven-text" sx={{ color: 'black' }}>
                                La Nostra Storia
                            </Button>
                            <Button href="#cerimonia" className="elven-text" sx={{ color: 'black' }}>
                                Cerimonia
                            </Button>
                            <Button href="#contattaci" className="elven-text" sx={{ color: 'black' }}>
                                Contattaci
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <main>
                <HomePage />
                <OurStory />
                <Ceremony />
                <ContactUs />
            </main>

            <Box component="footer" sx={{ py: 4 }} className="elven-footer">
                <Container>
                    <Typography align="center" className="elven-text" sx={{ mb: 0 }}>
                        &copy; 2025 Francesco & Beatrice. Tutti i diritti riservati.
                    </Typography>
                </Container>
            </Box>
        </div>
    );
}