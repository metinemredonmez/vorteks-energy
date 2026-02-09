'use client';
import React from 'react';
import { Box, Container, Typography, Card, CardContent, Stack, Grid } from '@mui/material';
import { IconShip, IconTools, IconCertificate, IconUsers, IconTarget, IconEye, IconDiamond, IconHeartHandshake, IconCheck } from '@tabler/icons-react';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

const AboutFull = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: IconShip, value: '500+', label: t.about?.stats?.projects },
    { icon: IconTools, value: '15+', label: t.about?.stats?.experience },
    { icon: IconCertificate, value: '100%', label: t.about?.stats?.satisfaction },
    { icon: IconUsers, value: '50+', label: t.about?.stats?.team },
  ];

  const values = [
    { icon: IconTarget, title: t.about?.mission?.title, description: t.about?.mission?.description },
    { icon: IconEye, title: t.about?.vision?.title, description: t.about?.vision?.description },
    { icon: IconDiamond, title: t.about?.values?.title, description: t.about?.values?.description },
    { icon: IconHeartHandshake, title: t.about?.commitment?.title, description: t.about?.commitment?.description },
  ];

  return (
    <Box>
      {/* Ana Hakkimizda */}
      <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                {t.about?.title1}
                <Box component="span" sx={{ color: 'primary.main' }}> {t.about?.title2}</Box>
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                {t.about?.description1}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                {t.about?.description2}
              </Typography>

              <Grid container spacing={3}>
                {stats.map((stat, index) => (
                  <Grid key={index} size={{ xs: 6, sm: 3 }}>
                    <Box sx={{ textAlign: 'center' }}>
                      <stat.icon size={32} color="#0D47A1" />
                      <Typography variant="h4" color="primary" sx={{ fontWeight: 700, mt: 1 }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 350, md: 500 },
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/images/gallery/gallery-1.jpg"
                  alt="Vorteks Enerji"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 4,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  }}
                >
                  <Typography variant="h5" color="white" fontWeight={600}>
                    {t.common?.quality}
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.8)">
                    {t.common?.isoStandards}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Misyon, Vizyon, Degerler */}
      <Box sx={{ py: 10, backgroundColor: '#F8FAFC' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {values.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: '50%',
                      backgroundColor: 'primary.light',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <item.icon size={35} color="#0D47A1" />
                  </Box>
                  <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {item.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutFull;
