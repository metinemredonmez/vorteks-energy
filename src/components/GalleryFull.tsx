'use client';
import React, { useState } from 'react';
import { Box, Container, Typography, Card, Tabs, Tab, Chip, Modal, IconButton, Grid } from '@mui/material';
import { IconX, IconZoomIn } from '@tabler/icons-react';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

const GalleryFull = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: t.gallery?.categories?.all },
    { id: 'repair', label: t.gallery?.categories?.repair },
    { id: 'yacht', label: t.gallery?.categories?.yacht },
    { id: 'engine', label: t.gallery?.categories?.engine },
    { id: 'paint', label: t.gallery?.categories?.paint },
  ];

  const galleryItems = [
    { id: 1, image: '/images/gallery/gallery-1.jpg', title: t.services?.repair?.title, category: 'repair', year: '2024' },
    { id: 2, image: '/images/gallery/gallery-2.jpg', title: t.services?.yacht?.title, category: 'yacht', year: '2024' },
    { id: 3, image: '/images/gallery/gallery-3.jpg', title: t.services?.engine?.title, category: 'engine', year: '2024' },
    { id: 4, image: '/images/gallery/gallery-4.jpg', title: t.services?.paint?.title, category: 'paint', year: '2024' },
    { id: 5, image: '/images/gallery/gallery-5.jpg', title: t.services?.yacht?.title, category: 'yacht', year: '2023' },
    { id: 6, image: '/images/gallery/gallery-6.jpg', title: t.services?.repair?.title, category: 'repair', year: '2023' },
  ];

  const filteredItems = activeTab === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <Box>
      <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              {t.gallery?.title1}
              <Box component="span" sx={{ color: 'primary.main' }}> {t.gallery?.title2}</Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
              {t.gallery?.description}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Tabs
              value={activeTab}
              onChange={(_, value) => setActiveTab(value)}
              variant="scrollable"
              scrollButtons="auto"
            >
              {categories.map((cat) => (
                <Tab key={cat.id} value={cat.id} label={cat.label} />
              ))}
            </Tabs>
          </Box>

          <Grid container spacing={3}>
            {filteredItems.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
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
                    '&:hover .zoom-icon': {
                      opacity: 1,
                    },
                    '&:hover img': {
                      transform: 'scale(1.1)',
                    },
                  }}
                  onClick={() => setSelectedImage(item.image)}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      '& img': { transition: 'transform 0.5s ease' },
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
                    className="zoom-icon"
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      borderRadius: '50%',
                      p: 2,
                    }}
                  >
                    <IconZoomIn size={32} color="white" />
                  </Box>
                  <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                    <Chip label={item.year} size="small" color="secondary" />
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 2,
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    }}
                  >
                    <Typography variant="subtitle1" color="white" fontWeight={600}>
                      {item.title}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats */}
      <Box sx={{ py: 10, backgroundColor: 'primary.main' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {[
              { value: '500+', label: t.about?.stats?.projects },
              { value: '150+', label: t.gallery?.stats?.customers || 'Happy Customers' },
              { value: '15+', label: t.about?.stats?.experience },
              { value: '50+', label: t.about?.stats?.team },
            ].map((stat, index) => (
              <Grid key={index} size={{ xs: 6, md: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h2" sx={{ color: '#FF6F00', fontWeight: 700 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'white' }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Modal */}
      <Modal open={!!selectedImage} onClose={() => setSelectedImage(null)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: 900,
            height: '80vh',
            bgcolor: 'background.paper',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <IconButton
            onClick={() => setSelectedImage(null)}
            sx={{ position: 'absolute', top: 8, right: 8, zIndex: 1, bgcolor: 'rgba(0,0,0,0.5)' }}
          >
            <IconX color="white" />
          </IconButton>
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Gallery"
              fill
              style={{ objectFit: 'contain' }}
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default GalleryFull;
