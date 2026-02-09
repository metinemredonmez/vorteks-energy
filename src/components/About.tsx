'use client';
import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { IconBolt, IconTools, IconCertificate, IconUsers } from '@tabler/icons-react';
import { useLanguage } from '@/i18n/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: IconBolt, value: '500+', label: t.about?.stats?.projects },
    { icon: IconTools, value: '15+', label: t.about?.stats?.experience },
    { icon: IconCertificate, value: '100%', label: t.about?.stats?.satisfaction },
    { icon: IconUsers, value: '50+', label: t.about?.stats?.team },
  ];

  return (
    <Box id="about" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="overline"
              color="secondary"
              sx={{ letterSpacing: 2, fontWeight: 600 }}
            >
              {t.about?.subtitle}
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 3 }}>
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
                height: { xs: 300, md: 500 },
                borderRadius: 4,
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #0D47A1 0%, #1565C0 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconBolt size={200} color="rgba(255,255,255,0.2)" />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 4,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
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
  );
};

export default About;
