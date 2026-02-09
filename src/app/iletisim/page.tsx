'use client';
import { Box } from '@mui/material';
import { Header, Footer, PageBanner, ContactFull } from '@/components';

export default function IletisimPage() {
  return (
    <Box>
      <Header />
      <PageBanner title="Iletisim" subtitle="Bizimle iletisime gecin" />
      <ContactFull />
      <Footer />
    </Box>
  );
}
