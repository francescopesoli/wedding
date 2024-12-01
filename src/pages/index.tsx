import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import OurStory from '../components/OurStory';
import Ceremony from '../components/Ceremony';
import ContactUs from '../components/ContactUs';
import LoadingPage from '../components/LoadingPage';
import Footer from "../components/Footer";

const theme = createTheme({
    palette: {
        primary: {
            main: '#4a0e4e',
        },
        secondary: {
            main: '#e6e6fa',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontFamily: '"Great Vibes", cursive',
        },
        h2: {
            fontFamily: '"Great Vibes", cursive',
        },
    },
});

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Head>
                <title>Francesco & Beatrice - Matrimonio</title>
                <meta name="description" content="Sito web del matrimonio di Francesco e Beatrice" />
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Roboto:wght@300;400;500;700&display=swap"
                    rel="stylesheet"
                />
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
