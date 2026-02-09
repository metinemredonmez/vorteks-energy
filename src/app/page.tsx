'use client';
import { Box } from '@mui/material';
import { Header, Hero, About, Services, Gallery, Contact, Footer } from '@/components';

export default function Home() {
  return (
    <Box>
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </Box>
  );
}
