'use client';
import React from 'react';
import { Box, Container, Typography, Link, Stack, IconButton, Grid } from '@mui/material';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav?.home, href: '/' },
    { label: t.nav?.about, href: '/hakkimizda' },
    { label: t.nav?.services, href: '/hizmetler' },
    { label: t.nav?.gallery, href: '/galeri' },
    { label: t.nav?.contact, href: '/iletisim' },
  ];

  const serviceLinks = [
    { label: t.services?.repair?.title, href: '/hizmetler' },
    { label: t.services?.yacht?.title, href: '/hizmetler' },
    { label: t.services?.engine?.title, href: '/hizmetler' },
    { label: t.services?.fuel?.title, href: '/hizmetler' },
    { label: t.services?.electrical?.title, href: '/hizmetler' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor: '#0a1929',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ mb: 2 }}>
              <Image
                src="/images/logo-white.png"
                alt="Vorteks Enerji Logo"
                width={220}
                height={55}
                style={{ objectFit: 'contain' }}
              />
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2, lineHeight: 1.8 }}>
              {t.footer?.description}
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#FF6F00' } }}>
                <IconBrandFacebook size={20} />
              </IconButton>
              <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#FF6F00' } }}>
                <IconBrandInstagram size={20} />
              </IconButton>
              <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#FF6F00' } }}>
                <IconBrandLinkedin size={20} />
              </IconButton>
              <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#FF6F00' } }}>
                <IconBrandTwitter size={20} />
              </IconButton>
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
              {t.footer?.quickLinks}
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  underline="none"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.875rem',
                    '&:hover': { color: '#FF6F00' },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
              {t.footer?.services}
            </Typography>
            <Stack spacing={1}>
              {serviceLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  underline="none"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.875rem',
                    '&:hover': { color: '#FF6F00' },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
              {t.footer?.contact}
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                Istanbul, Turkiye
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                +90 542 347 52 07
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                info@vorteksenerji.com
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
            &copy; 2024 Vorteks Enerji. {t.footer?.copyright}
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', '&:hover': { color: '#FF6F00' } }}>
              {t.footer?.privacy}
            </Link>
            <Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', '&:hover': { color: '#FF6F00' } }}>
              {t.footer?.terms}
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
