'use client';
import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { IconPhone, IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Energy Solutions"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(13, 71, 161, 0.9) 0%, rgba(0, 33, 113, 0.85) 100%)',
          }}
        />
      </Box>

      {/* Pattern Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.5,
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ maxWidth: 800 }}>
          <Typography
            variant="overline"
            sx={{
              color: 'rgba(255,255,255,0.8)',
              letterSpacing: 3,
              mb: 2,
              display: 'block',
            }}
          >
            {t.services?.subtitle || 'PROFESSIONAL MARITIME SERVICES'}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '4rem' },
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            {t.hero?.title1}
            <Box component="span" sx={{ color: '#FF6F00', display: 'block' }}>
              {t.hero?.title2}
            </Box>
            {t.hero?.title3}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              fontWeight: 400,
              mb: 4,
              maxWidth: 600,
            }}
          >
            {t.hero?.subtitle}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              endIcon={<IconArrowRight />}
              href="#services"
              sx={{ py: 1.5, px: 4 }}
            >
              {t.hero?.cta2}
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<IconPhone />}
              href="tel:+905551234567"
              sx={{
                py: 1.5,
                px: 4,
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              {t.hero?.cta1}
            </Button>
          </Stack>
        </Box>
      </Container>

      {/* Decorative Wave */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 100,
          background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 100\'%3E%3Cpath fill=\'%23ffffff\' d=\'M0,50 C360,100 720,0 1080,50 C1260,75 1380,75 1440,50 L1440,100 L0,100 Z\'/%3E%3C/svg%3E")',
          backgroundSize: 'cover',
          zIndex: 2,
        }}
      />
    </Box>
  );
};

export default Hero;
