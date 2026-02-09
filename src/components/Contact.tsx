'use client';
import React from 'react';
import { Box, Container, Typography, Card, CardContent, TextField, Button, Stack, Grid } from '@mui/material';
import { IconMail, IconPhone, IconMapPin, IconBrandWhatsapp, IconSend } from '@tabler/icons-react';
import { useLanguage } from '@/i18n/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: IconPhone,
      title: t.contact?.info?.phone,
      value: '+90 542 347 52 07',
      href: 'tel:+905423475207',
    },
    {
      icon: IconMail,
      title: t.contact?.info?.email,
      value: 'info@vorteksenerji.com',
      href: 'mailto:info@vorteksenerji.com',
    },
    {
      icon: IconMapPin,
      title: t.contact?.info?.address,
      value: 'Istanbul, Turkiye',
      href: '#',
    },
    {
      icon: IconBrandWhatsapp,
      title: t.contact?.whatsapp?.title,
      value: '+90 542 347 52 07',
      href: 'https://wa.me/905423475207',
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #0D47A1 0%, #002171 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="overline"
              sx={{ letterSpacing: 2, color: 'rgba(255,255,255,0.7)' }}
            >
              {t.nav?.contact?.toUpperCase()}
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 3, color: 'white' }}>
              {t.contact?.title1}
              <Box component="span" sx={{ color: '#FF6F00' }}> {t.contact?.title2}</Box>
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
              {t.contact?.description}
            </Typography>

            <Stack spacing={3}>
              {contactInfo.map((item, index) => (
                <Box
                  key={index}
                  component="a"
                  href={item.href}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#FF6F00',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2,
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <item.icon size={24} />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Card sx={{ borderRadius: 4 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  {t.contact?.form?.title}
                </Typography>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label={t.contact?.form?.name}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label={t.contact?.form?.phone}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label={t.contact?.form?.email}
                      type="email"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label={t.contact?.form?.shipInfo}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label={t.contact?.form?.message}
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      size="large"
                      endIcon={<IconSend size={20} />}
                      sx={{ py: 1.5 }}
                    >
                      {t.contact?.form?.submit}
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
