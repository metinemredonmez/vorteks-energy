'use client';
import { Box } from '@mui/material';
import { Header, Footer, PageBanner, ServicesFull } from '@/components';

export default function HizmetlerPage() {
  return (
    <Box>
      <Header />
      <PageBanner title="Hizmetlerimiz" subtitle="Profesyonel denizcilik hizmetleri" />
      <ServicesFull />
      <Footer />
    </Box>
  );
}
