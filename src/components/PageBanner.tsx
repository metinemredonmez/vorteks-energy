'use client';
import React from 'react';
import { Box, Container, Typography, Breadcrumbs, Link } from '@mui/material';
import { IconHome, IconChevronRight } from '@tabler/icons-react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => {
  return (
    <Box
      sx={{
        pt: 16,
        pb: 8,
        background: 'linear-gradient(135deg, #0D47A1 0%, #002171 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.5,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Breadcrumbs
          separator={<IconChevronRight size={16} color="rgba(255,255,255,0.6)" />}
          sx={{ mb: 2 }}
        >
          <Link
            href="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              '&:hover': { color: '#FF6F00' },
            }}
          >
            <IconHome size={18} />
          </Link>
          <Typography color="white">{title}</Typography>
        </Breadcrumbs>
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            fontWeight: 700,
            mb: 1,
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.8)',
              fontWeight: 400,
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default PageBanner;
