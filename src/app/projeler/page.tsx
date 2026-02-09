'use client';
import { Box } from '@mui/material';
import { Header, Footer, PageBanner, ProjectsFull } from '@/components';

export default function ProjelerPage() {
  return (
    <Box>
      <Header />
      <PageBanner title="Projelerimiz" subtitle="Basariyla tamamladigimiz projeler" />
      <ProjectsFull />
      <Footer />
    </Box>
  );
}
