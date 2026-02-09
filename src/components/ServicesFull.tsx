'use client';
import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button, Chip, Stack, Grid } from '@mui/material';
import {
  IconTools,
  IconEngine,
  IconDroplet,
  IconPaint,
  IconAnchor,
  IconBolt,
  IconArrowRight,
  IconCheck,
  IconPhone,
} from '@tabler/icons-react';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

const ServicesFull = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: IconTools,
      title: t.services?.repair?.title,
      description: t.services?.repair?.description,
      image: '/images/gallery/gallery-1.jpg',
    },
    {
      icon: IconEngine,
      title: t.services?.engine?.title,
      description: t.services?.engine?.description,
      image: '/images/gallery/gallery-2.jpg',
    },
    {
      icon: IconDroplet,
      title: t.services?.fuel?.title,
      description: t.services?.fuel?.description,
      image: '/images/gallery/gallery-3.jpg',
    },
    {
      icon: IconPaint,
      title: t.services?.paint?.title,
      description: t.services?.paint?.description,
      image: '/images/gallery/gallery-4.jpg',
    },
    {
      icon: IconAnchor,
      title: t.services?.yacht?.title,
      description: t.services?.yacht?.description,
      image: '/images/gallery/gallery-5.jpg',
    },
    {
      icon: IconBolt,
      title: t.services?.electrical?.title,
      description: t.services?.electrical?.description,
      image: '/images/gallery/gallery-6.jpg',
    },
  ];

  return (
    <Box>
      {/* Hizmet Giris */}
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                {t.services?.title1}
                <Box component="span" sx={{ color: 'primary.main' }}> {t.services?.title2}</Box>
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                {t.services?.description}
              </Typography>
              <Button
                variant="contained"
                size="large"
                startIcon={<IconPhone />}
                href="/iletisim"
              >
                {t.contact?.info?.phone}
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ position: 'relative', height: 400, borderRadius: 4, overflow: 'hidden' }}>
                <Image
                  src="/images/gallery/gallery-1.jpg"
                  alt="Services"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Hizmet Listesi */}
      <Box sx={{ py: 10, backgroundColor: '#F8FAFC' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ height: '100%' }}>
                  <Box sx={{ position: 'relative', height: 200 }}>
                    <Image
                      src={service.image}
                      alt={service.title || ''}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: 2,
                          backgroundColor: 'primary.light',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <service.icon size={28} color="#0D47A1" />
                      </Box>
                      <Typography variant="h5" fontWeight={600}>
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                      {service.description}
                    </Typography>
                    <Button
                      variant="outlined"
                      endIcon={<IconArrowRight />}
                      href="/iletisim"
                    >
                      {t.services?.getQuote}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container maxWidth="md">
          <Card sx={{ p: 6, textAlign: 'center', background: 'linear-gradient(135deg, #0D47A1 0%, #002171 100%)' }}>
            <Typography variant="h3" sx={{ color: 'white', mb: 2 }}>
              {t.contact?.title1} {t.contact?.title2}
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4 }}>
              {t.contact?.form?.subtitle}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                color="secondary"
                size="large"
                href="/iletisim"
              >
                {t.hero?.cta1}
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<IconPhone />}
                href="tel:+905423475207"
                sx={{ color: 'white', borderColor: 'white' }}
              >
                +90 542 347 52 07
              </Button>
            </Stack>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesFull;
