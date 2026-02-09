'use client';
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Divider,
} from '@mui/material';
import { IconMenu2, IconX } from '@tabler/icons-react';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/i18n/LanguageContext';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const navItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/hakkimizda' },
    { label: t.nav.services, href: '/hizmetler' },
    { label: t.nav.projects, href: '/projeler' },
    { label: t.nav.gallery, href: '/galeri' },
    { label: t.nav.contact, href: '/iletisim' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: trigger ? 'rgba(255,255,255,0.95)' : 'transparent',
          backdropFilter: trigger ? 'blur(10px)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <Box
              component="a"
              href="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              <Image
                src={trigger ? '/images/logo.png' : '/images/logo-white.png'}
                alt="Vorteks Enerji Logo"
                width={220}
                height={55}
                style={{ objectFit: 'contain' }}
                priority
              />
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  href={item.href}
                  sx={{
                    color: trigger ? 'text.primary' : 'white',
                    '&:hover': {
                      backgroundColor: trigger ? 'rgba(13, 71, 161, 0.1)' : 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                color="secondary"
                href="/iletisim"
                sx={{ ml: 1 }}
              >
                {t.nav.getQuote}
              </Button>
              <Box sx={{ ml: 1, color: trigger ? 'text.primary' : 'white' }}>
                <LanguageSwitcher />
              </Box>
            </Box>

            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' }, color: trigger ? 'primary.main' : 'white' }}
              onClick={handleDrawerToggle}
            >
              <IconMenu2 />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ '& .MuiDrawer-paper': { width: 280 } }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleDrawerToggle}>
            <IconX />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.href} component="a" href={item.href} onClick={handleDrawerToggle}>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
          <Divider sx={{ my: 2 }} />
          <ListItem>
            <LanguageSwitcher />
          </ListItem>
          <ListItem>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              href="/iletisim"
              onClick={handleDrawerToggle}
            >
              {t.nav.getQuote}
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
