'use client';
import React from 'react';
import { Box, Container, Typography, Card, Grid } from '@mui/material';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();

  const galleryImages = [
    { title: t.gallery?.categories?.repair, image: '/images/gallery/gallery-1.jpg' },
    { title: t.gallery?.categories?.yacht, image: '/images/gallery/gallery-2.jpg' },
    { title: t.gallery?.categories?.engine, image: '/images/gallery/gallery-3.jpg' },
    { title: t.gallery?.categories?.paint, image: '/images/gallery/gallery-4.jpg' },
    { title: t.services?.electrical?.title, image: '/images/gallery/gallery-5.jpg' },
    { title: t.services?.fuel?.title, image: '/images/gallery/gallery-6.jpg' },
  ];

  return (
    <Box id="gallery" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="overline"
            color="secondary"
            sx={{ letterSpacing: 2, fontWeight: 600 }}
          >
            {t.nav?.gallery?.toUpperCase()}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            {t.gallery?.title1}
            <Box component="span" sx={{ color: 'primary.main' }}> {t.gallery?.title2}</Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            {t.gallery?.description}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {galleryImages.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: 280,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  },
                  '&:hover .overlay': {
                    opacity: 1,
                  },
                  '&:hover img': {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    '& img': {
                      transition: 'transform 0.5s ease',
                    },
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title || ''}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    opacity: 0.8,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <Typography variant="h6" color="white" fontWeight={600}>
                    {item.title}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Gallery;
