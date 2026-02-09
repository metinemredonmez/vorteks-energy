'use client';
import React from 'react';
import { Box, Container, Typography, Card, CardContent, Chip, Stack, Button, LinearProgress, Grid } from '@mui/material';

import { IconAnchor, IconCalendar, IconMapPin, IconRuler, IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

const ProjectsFull = () => {
  const { t } = useLanguage();

  const featuredProjects = [
    {
      id: 1,
      title: 'M/V Blue Ocean',
      subtitle: t.services?.repair?.title,
      description: t.projects?.project1?.description || 'Kargo gemisi icin kapsamli govde onarimi, motor revizyonu ve boya isleri. 3 aylik proje basariyla tamamlandi.',
      image: '/images/gallery/gallery-1.jpg',
      category: t.services?.repair?.title,
      year: '2024',
      location: 'Istanbul',
      length: '180m',
      duration: '90',
      services: [t.gallery?.categories?.repair, t.services?.engine?.title, t.services?.paint?.title, t.services?.electrical?.title],
      status: 'completed',
    },
    {
      id: 2,
      title: 'S/Y Marmara Dream',
      subtitle: t.services?.yacht?.title,
      description: t.projects?.project2?.description || 'Luks yelkenli yat icin komple restorasyon projesi. Ic mekan yenileme, teak deck ve motor revizyonu.',
      image: '/images/gallery/gallery-2.jpg',
      category: t.services?.yacht?.title,
      year: '2024',
      location: 'Bodrum',
      length: '32m',
      duration: '45',
      services: [t.services?.yacht?.title, t.services?.paint?.title, t.services?.engine?.title],
      status: 'completed',
    },
    {
      id: 3,
      title: 'M/T Energy Star',
      subtitle: t.services?.engine?.title,
      description: t.projects?.project3?.description || 'Tanker gemisi ana motorunun komple revizyonu ve yakit sistemi modernizasyonu.',
      image: '/images/gallery/gallery-3.jpg',
      category: t.services?.engine?.title,
      year: '2023',
      location: 'Izmir',
      length: '220m',
      duration: '30',
      services: [t.services?.engine?.title, t.services?.fuel?.title],
      status: 'completed',
    },
    {
      id: 4,
      title: 'Feribot Marmara',
      subtitle: t.projects?.sectors?.passenger?.title,
      description: t.projects?.project4?.description || 'Yolcu feribotu icin yillik kapsamli bakim ve guvenlik kontrolu.',
      image: '/images/gallery/gallery-4.jpg',
      category: t.projects?.sectors?.passenger?.title,
      year: '2023',
      location: 'Istanbul',
      length: '85m',
      duration: '21',
      services: [t.services?.repair?.title, t.services?.engine?.title, t.services?.paint?.title],
      status: 'completed',
    },
    {
      id: 5,
      title: 'M/V Karadeniz',
      subtitle: t.services?.repair?.title,
      description: t.projects?.project5?.description || 'Karadeniz bolgesinde kargo gemisi govde hasari onarimi ve anti-fouling boya uygulamasi.',
      image: '/images/gallery/gallery-5.jpg',
      category: t.services?.repair?.title,
      year: '2023',
      location: 'Samsun',
      length: '145m',
      duration: '25',
      services: [t.services?.repair?.title, t.services?.paint?.title],
      status: 'completed',
    },
    {
      id: 6,
      title: 'Mega Yat Azure',
      subtitle: t.services?.yacht?.title,
      description: t.projects?.project6?.description || 'VIP musteri icin mega yat premium bakim paketi. Tum sistemlerin kontrolu ve bakimi.',
      image: '/images/gallery/gallery-6.jpg',
      category: t.services?.yacht?.title,
      year: '2024',
      location: 'Antalya',
      length: '55m',
      duration: '60',
      services: [t.services?.yacht?.title, t.services?.electrical?.title, t.services?.paint?.title],
      status: 'completed',
    },
  ];

  const stats = [
    { label: t.projects?.stats?.total, value: 500 },
    { label: t.projects?.stats?.thisYear, value: 45 },
    { label: t.projects?.stats?.ongoing, value: 8 },
    { label: t.projects?.stats?.planned, value: 12 },
  ];

  const categories = [
    { name: t.services?.repair?.title, count: 180 },
    { name: t.services?.yacht?.title, count: 120 },
    { name: t.services?.engine?.title, count: 85 },
    { name: t.services?.paint?.title, count: 70 },
    { name: t.services?.electrical?.title, count: 45 },
  ];

  const sectors = [
    { title: t.projects?.sectors?.cargo?.title, desc: t.projects?.sectors?.cargo?.desc },
    { title: t.projects?.sectors?.tanker?.title, desc: t.projects?.sectors?.tanker?.desc },
    { title: t.projects?.sectors?.passenger?.title, desc: t.projects?.sectors?.passenger?.desc },
    { title: t.projects?.sectors?.fishing?.title, desc: t.projects?.sectors?.fishing?.desc },
    { title: t.projects?.sectors?.yacht?.title, desc: t.projects?.sectors?.yacht?.desc },
    { title: t.projects?.sectors?.offshore?.title, desc: t.projects?.sectors?.offshore?.desc },
  ];

  return (
    <Box>
      {/* Giris */}
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                {t.projects?.title1}
                <Box component="span" sx={{ color: 'primary.main' }}> {t.projects?.title2}</Box>
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                {t.projects?.description}
              </Typography>
              <Grid container spacing={2}>
                {stats.map((stat, index) => (
                  <Grid key={index} size={{ xs: 6, sm: 3 }}>
                    <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#F8FAFC', borderRadius: 2 }}>
                      <Typography variant="h3" color="primary" fontWeight={700}>
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
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 3 }}>
                  {t.projects?.distribution}
                </Typography>
                {categories.map((cat, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="body2">{cat.name}</Typography>
                      <Typography variant="body2" color="primary" fontWeight={600}>
                        {cat.count}
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={(cat.count / 200) * 100}
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>
                ))}
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Projeler */}
      <Box sx={{ py: 10, backgroundColor: '#F8FAFC' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              {t.projects?.featured?.title1}
              <Box component="span" sx={{ color: 'primary.main' }}> {t.projects?.featured?.title2}</Box>
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {featuredProjects.map((project) => (
              <Grid key={project.id} size={{ xs: 12, md: 6 }}>
                <Card sx={{ height: '100%', overflow: 'hidden' }}>
                  <Box sx={{ position: 'relative', height: 250 }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
                      <Chip label={project.category} color="primary" size="small" />
                    </Box>
                    <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                      <Chip
                        label={project.status === 'completed' ? t.common?.completed : t.common?.ongoing}
                        color={project.status === 'completed' ? 'success' : 'warning'}
                        size="small"
                      />
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" fontWeight={600} sx={{ mb: 0.5 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="subtitle2" color="primary" sx={{ mb: 2 }}>
                      {project.subtitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                      {project.description}
                    </Typography>

                    <Grid container spacing={2} sx={{ mb: 2 }}>
                      <Grid size={{ xs: 6 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <IconCalendar size={16} color="#666" />
                          <Typography variant="body2" color="text.secondary">
                            {project.year}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 6 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <IconMapPin size={16} color="#666" />
                          <Typography variant="body2" color="text.secondary">
                            {project.location}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 6 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <IconRuler size={16} color="#666" />
                          <Typography variant="body2" color="text.secondary">
                            {project.length}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 6 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <IconAnchor size={16} color="#666" />
                          <Typography variant="body2" color="text.secondary">
                            {project.duration} {t.common?.days || 'gun'}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>

                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {project.services.map((service, sIndex) => (
                        <Chip key={sIndex} label={service} size="small" variant="outlined" sx={{ mb: 1 }} />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Calistigimiz Sektorler */}
      <Box sx={{ py: 10, backgroundColor: 'primary.main' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 2, color: 'white' }}>
              {t.projects?.sectors?.title1}
              <Box component="span" sx={{ color: '#FF6F00' }}> {t.projects?.sectors?.title2}</Box>
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {sectors.map((sector, index) => (
              <Grid key={index} size={{ xs: 6, md: 4 }}>
                <Card sx={{ p: 3, textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.1)', border: 'none' }}>
                  <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                    {sector.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    {sector.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
        <Container maxWidth="md">
          <Card sx={{ p: 6, textAlign: 'center' }}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              {t.projects?.cta?.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              {t.projects?.cta?.description}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                endIcon={<IconArrowRight />}
                href="/iletisim"
              >
                {t.projects?.cta?.button1}
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="/galeri"
              >
                {t.projects?.cta?.button2}
              </Button>
            </Stack>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default ProjectsFull;
