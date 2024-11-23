import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';

const images = [
    '/src/assets/couple/couple1.jpg',
    '/src/assets/couple/couple2.jpg',
    '/src/assets/couple/couple3.jpg',
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
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                '& > div': {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0,
                    transition: 'opacity 1s ease-in-out',
                    '&.active': {
                        opacity: 1,
                    },
                },
            }}
        >
            {images.map((src, index) => (
                <div key={src} className={index === currentImageIndex ? 'active' : ''}>
                    <Image
                        src={src}
                        alt={`Francesco e Beatrice ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        priority={index === 0}
                    />
                </div>
            ))}
        </Box>
    );
}
