import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import dynamic from 'next/dynamic';
import { Roboto } from 'next/font/google';
import { Great_Vibes } from 'next/font/google';

// Font ottimizzati
const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' });

// Tema ottimizzato
const theme = createTheme({
    palette: {
        primary: { main: '#4a0e4e' },
        secondary: { main: '#e6e6fa' },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
        h1: { fontFamily: greatVibes.style.fontFamily },
        h2: { fontFamily: greatVibes.style.fontFamily },
    },
});

// Import dinamici dei componenti
const Navbar = dynamic(() => import('../components/Navbar'));
const HomePage = dynamic(() => import('../components/HomePage'));
const OurStory = dynamic(() => import('../components/OurStory'));
const Ceremony = dynamic(() => import('../components/Ceremony'));
const ContactUs = dynamic(() => import('../components/ContactUs'));
const Footer = dynamic(() => import('../components/Footer'));
const LoadingPage = dynamic(() => import('../components/LoadingPage'));

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Ridotto il timeout del loader
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Head>
                <title>Francesco & Beatrice - Matrimonio</title>
                <link rel="icon" href="/F&B.png" />
                <meta name="description" content="Sito web del matrimonio di Francesco e Beatrice" />
            </Head>

            {loading ? (
                <LoadingPage />
            ) : (
                <>
                    <Navbar />
                    <main>
                        <HomePage />
                        <OurStory />
                        <Ceremony />
                        <ContactUs />
                    </main>
                    <Footer />
                </>
            )}
        </ThemeProvider>
    );
}