'use client';
import { Box } from '@mui/material';
import { Header, Footer, PageBanner, GalleryFull } from '@/components';

export default function GaleriPage() {
  return (
    <Box>
      <Header />
      <PageBanner title="Galeri" subtitle="Tamamladigimiz projelerden ornekler" />
      <GalleryFull />
      <Footer />
    </Box>
  );
}
