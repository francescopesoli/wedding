import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
    useTheme,
    useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'La Nostra Storia', href: '/#storia' },
    { name: 'Cerimonia', href: '/#cerimonia' },
    { name: 'Contattaci', href: '/#contattaci' }
];

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
                boxShadow: isScrolled ? 1 : 'none',
                transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: '"Great Vibes", cursive',
                            fontSize: '2rem',
                            color: isScrolled ? 'primary.main' : 'white',
                            textDecoration: 'none',
                            textShadow: isScrolled ? 'none' : '2px 2px 4px rgba(0,0,0,0.5)',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            src={isScrolled ? "/F_B_scrollable-removebg.png" : "/F_B_white-removebg.png"}
                            width={50}
                            height={50}
                            alt="logo"
                        />
                        Francesco & Beatrice
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenuOpen}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {navItems.map((item) => (
                                <MenuItem key={item.name} onClick={handleMenuClose} component={Link} href={item.href}>
                                    <Typography textAlign="center">{item.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {isMobile && (
                        <Image
                            src={isScrolled ? "/F_B_scrollable-removebg.png" : "/F_B_white-removebg.png"}
                            width={50}
                            height={50}
                            alt="logo"
                        />
                    )}
                    <Typography
                        variant="h5"
                        noWrap
                        component={Link}
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: '"Great Vibes", cursive',
                            fontSize: '1.5rem',
                            color: isScrolled ? 'primary.main' : 'white',
                            textDecoration: 'none',
                            textShadow: isScrolled ? 'none' : '2px 2px 4px rgba(0,0,0,0.5)',
                        }}
                    >
                        Francesco & Beatrice
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}, justifyContent: 'flex-end'}}>
                        {navItems.map((item) => (
                            <Button
                                key={item.name}
                                component={Link}
                                href={item.href}
                                sx={{
                                    my: 2,
                                    color: isScrolled ? 'primary.main' : 'white',
                                    display: 'block',
                                    textShadow: isScrolled ? 'none' : '1px 1px 2px rgba(0,0,0,0.5)',
                                }}
                            >
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

