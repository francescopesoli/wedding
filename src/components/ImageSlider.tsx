import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';

const images = [
    '/assets/couple/couple1.jpeg',
    '/assets/couple/couple2.jpeg',
    '/assets/couple/couple3.jpeg',
];

export default function ImageSlider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            sx={{
                position: 'relative',
                width: { xs: '100%', sm: '80%' },
                height: { xs: '50vh', sm: '60vh' },
                margin: '0 auto',
                overflow: 'hidden',
            }}
        >
            {images.map((src, index) => (
                <Box
                    key={src}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: index === currentImageIndex ? 1 : 0,
                        transition: 'opacity 1s ease-in-out',
                    }}
                >
                    <Image
                        src={src}
                        alt={`Francesco e Beatrice ${index + 1}`}
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: 'cover',
                        }}
                        quality={100}
                        priority={index === 0}
                    />
                </Box>
            ))}
        </Box>
    );
}