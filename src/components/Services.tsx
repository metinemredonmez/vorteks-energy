'use client';
import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button, Grid } from '@mui/material';
import {
  IconEngine,
  IconDroplet,
  IconBolt,
  IconArrowRight,
  IconBuildingFactory,
  IconPackage,
  IconPlug,
} from '@tabler/icons-react';
import { useLanguage } from '@/i18n/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: IconBolt,
      title: t.services?.repair?.title,
      description: t.services?.repair?.description,
    },
    {
      icon: IconEngine,
      title: t.services?.engine?.title,
      description: t.services?.engine?.description,
    },
    {
      icon: IconDroplet,
      title: t.services?.fuel?.title,
      description: t.services?.fuel?.description,
    },
    {
      icon: IconBuildingFactory,
      title: t.services?.paint?.title,
      description: t.services?.paint?.description,
    },
    {
      icon: IconPackage,
      title: t.services?.yacht?.title,
      description: t.services?.yacht?.description,
    },
    {
      icon: IconPlug,
      title: t.services?.electrical?.title,
      description: t.services?.electrical?.description,
    },
  ];

  return (
    <Box
      id="services"
      sx={{
        py: 10,
        backgroundColor: '#F8FAFC',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="overline"
            color="secondary"
            sx={{ letterSpacing: 2, fontWeight: 600 }}
          >
            {t.services?.subtitle}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            {t.services?.title1}
            <Box component="span" sx={{ color: 'primary.main' }}> {t.services?.title2}</Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            {t.services?.description}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'all 0.3s ease',
                  border: '1px solid transparent',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    borderColor: 'primary.light',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 2,
                      backgroundColor: 'primary.light',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    <service.icon size={30} color="#0D47A1" />
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="contained"
            size="large"
            endIcon={<IconArrowRight />}
            href="#contact"
            sx={{ py: 1.5, px: 4 }}
          >
            {t.services?.getQuote}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
