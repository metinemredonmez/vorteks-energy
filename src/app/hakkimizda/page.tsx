'use client';
import { Box } from '@mui/material';
import { Header, Footer, PageBanner, AboutFull } from '@/components';

export default function HakkimizdaPage() {
  return (
    <Box>
      <Header />
      <PageBanner title="Hakkimizda" subtitle="Vorteks Enerji hakkinda detayli bilgi" />
      <AboutFull />
      <Footer />
    </Box>
  );
}
