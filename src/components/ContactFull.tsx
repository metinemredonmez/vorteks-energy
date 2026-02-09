'use client';
import React, { useState, useRef } from 'react';
import { Box, Container, Typography, Card, CardContent, TextField, Button, Stack, Chip, Grid, Alert, CircularProgress } from '@mui/material';
import emailjs from '@emailjs/browser';
import { IconMail, IconPhone, IconMapPin, IconBrandWhatsapp, IconSend, IconClock, IconCheck } from '@tabler/icons-react';

// EmailJS Config
const EMAILJS_SERVICE_ID = 'service_r1wdeho';
const EMAILJS_TEMPLATE_ID = 'template_36588xe';
const EMAILJS_PUBLIC_KEY = '_9MRbjmGmn6nvf2ta';
import { useLanguage } from '@/i18n/LanguageContext';

const ContactFull = () => {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      setSuccess(true);
      formRef.current?.reset();
    } catch (err) {
      setError('Mesaj gönderilemedi. Lütfen tekrar deneyin.');
      console.error('EmailJS Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: IconPhone,
      title: t.contact?.info?.phone,
      value: '+90 542 347 52 07',
      subValue: '+90 212 456 78 90',
      href: 'tel:+905423475207',
      color: '#0D47A1',
    },
    {
      icon: IconMail,
      title: t.contact?.info?.email,
      value: 'info@vorteksenerji.com',
      subValue: 'destek@vorteksenerji.com',
      href: 'mailto:info@vorteksenerji.com',
      color: '#1565C0',
    },
    {
      icon: IconMapPin,
      title: t.contact?.info?.address,
      value: 'Tuzla Tersaneler Bolgesi',
      subValue: 'Istanbul, Turkiye',
      href: 'https://maps.google.com',
      color: '#1976D2',
    },
    {
      icon: IconClock,
      title: t.contact?.info?.hours,
      value: t.contact?.info?.weekdays,
      subValue: '08:00 - 18:00',
      href: '#',
      color: '#1E88E5',
    },
  ];

  const offices = [
    {
      city: 'Istanbul',
      isHeadquarters: true,
      address: 'Tuzla Tersaneler Bolgesi, No: 42',
      phone: '+90 212 456 78 90',
      email: 'istanbul@vorteksenerji.com',
    },
    {
      city: 'Izmir',
      isHeadquarters: false,
      address: 'Alsancak Liman Bolgesi, No: 15',
      phone: '+90 232 345 67 89',
      email: 'izmir@vorteksenerji.com',
    },
    {
      city: 'Antalya',
      isHeadquarters: false,
      address: 'Kaleici Marina, No: 8',
      phone: '+90 242 234 56 78',
      email: 'antalya@vorteksenerji.com',
    },
  ];

  const whyChooseUs = [
    { title: t.contact?.why?.support?.title, desc: t.contact?.why?.support?.desc },
    { title: t.contact?.why?.fast?.title, desc: t.contact?.why?.fast?.desc },
    { title: t.contact?.why?.free?.title, desc: t.contact?.why?.free?.desc },
    { title: t.contact?.why?.warranty?.title, desc: t.contact?.why?.warranty?.desc },
    { title: t.contact?.why?.price?.title, desc: t.contact?.why?.price?.desc },
    { title: t.contact?.why?.team?.title, desc: t.contact?.why?.team?.desc },
  ];

  return (
    <Box>
      {/* Iletisim Bilgileri */}
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {contactInfo.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  component="a"
                  href={item.href}
                  sx={{
                    display: 'block',
                    p: 0,
                    height: '100%',
                    textDecoration: 'none',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 8,
                      background: `linear-gradient(90deg, ${item.color} 0%, ${item.color}99 100%)`,
                    }}
                  />
                  <Box sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 3,
                        background: `linear-gradient(135deg, ${item.color}15 0%, ${item.color}25 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      <item.icon size={28} color={item.color} />
                    </Box>
                    <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" fontWeight={600} sx={{ mt: 0.5, color: 'text.primary' }}>
                      {item.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.subValue}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Form ve Harita */}
      <Box sx={{ py: 10, backgroundColor: '#F8FAFC' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Card sx={{ borderRadius: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                  <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
                    {t.contact?.form?.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    {t.contact?.form?.subtitle}
                  </Typography>

                  {success && (
                    <Alert severity="success" sx={{ mb: 3 }}>
                      Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                    </Alert>
                  )}
                  {error && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                      {error}
                    </Alert>
                  )}

                  <form ref={formRef} onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          name="from_name"
                          label={t.contact?.form?.name}
                          variant="outlined"
                          required
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          name="company"
                          label={t.contact?.form?.company}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          name="phone"
                          label={t.contact?.form?.phone}
                          variant="outlined"
                          required
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          name="from_email"
                          label={t.contact?.form?.email}
                          type="email"
                          variant="outlined"
                          required
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          name="ship_info"
                          label={t.contact?.form?.shipInfo}
                          variant="outlined"
                          placeholder={t.contact?.form?.shipInfoPlaceholder}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          name="service_type"
                          label={t.contact?.form?.serviceType}
                          select
                          variant="outlined"
                          SelectProps={{ native: true }}
                        >
                          <option value="">{t.contact?.form?.serviceTypes?.select}</option>
                          <option value="repair">{t.contact?.form?.serviceTypes?.repair}</option>
                          <option value="maintenance">{t.contact?.form?.serviceTypes?.maintenance}</option>
                          <option value="painting">{t.contact?.form?.serviceTypes?.painting}</option>
                          <option value="engine">{t.contact?.form?.serviceTypes?.engine}</option>
                          <option value="fuel">{t.contact?.form?.serviceTypes?.fuel}</option>
                          <option value="other">{t.contact?.form?.serviceTypes?.other}</option>
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          name="message"
                          label={t.contact?.form?.message}
                          multiline
                          rows={4}
                          variant="outlined"
                          placeholder={t.contact?.form?.messagePlaceholder}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <Button
                          fullWidth
                          type="submit"
                          variant="contained"
                          size="large"
                          disabled={loading}
                          endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <IconSend size={20} />}
                          sx={{ py: 1.5, borderRadius: 2 }}
                        >
                          {loading ? 'Gönderiliyor...' : t.contact?.form?.submit}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={3} sx={{ height: '100%' }}>
                {/* WhatsApp */}
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                    color: 'white',
                    boxShadow: '0 8px 32px rgba(37, 211, 102, 0.3)',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: 3,
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconBrandWhatsapp size={32} />
                    </Box>
                    <Box>
                      <Typography variant="h5" fontWeight={700}>
                        {t.contact?.whatsapp?.title}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        {t.contact?.whatsapp?.subtitle}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    +90 542 347 52 07
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    href="https://wa.me/905423475207"
                    target="_blank"
                    sx={{
                      py: 1.5,
                      borderRadius: 2,
                      backgroundColor: 'white',
                      color: '#25D366',
                      fontWeight: 600,
                      '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' },
                    }}
                  >
                    {t.contact?.whatsapp?.button}
                  </Button>
                </Card>

                {/* Harita */}
                <Card sx={{ flex: 1, minHeight: 280, borderRadius: 4, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box sx={{ textAlign: 'center', p: 4 }}>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          backgroundColor: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2,
                          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        }}
                      >
                        <IconMapPin size={40} color="#0D47A1" />
                      </Box>
                      <Typography variant="h6" fontWeight={600} sx={{ mb: 0.5 }}>
                        Tuzla Tersaneler Bolgesi
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Istanbul, Turkiye
                      </Typography>
                      <Button
                        variant="contained"
                        href="https://maps.google.com"
                        target="_blank"
                        sx={{ borderRadius: 2 }}
                      >
                        {t.contact?.map?.show}
                      </Button>
                    </Box>
                  </Box>
                </Card>

                {/* Acil Destek */}
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, #FF6F00 0%, #E65100 100%)',
                    color: 'white',
                    boxShadow: '0 8px 32px rgba(255, 111, 0, 0.3)',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                      <Typography variant="subtitle2" sx={{ opacity: 0.9, mb: 0.5 }}>
                        {t.contact?.emergency?.title}
                      </Typography>
                      <Typography variant="h5" fontWeight={700}>
                        +90 555 999 00 00
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 2,
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconPhone size={28} />
                    </Box>
                  </Box>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Ofislerimiz */}
      <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" color="primary" sx={{ letterSpacing: 2, fontWeight: 600 }}>
              {t.contact?.offices?.description?.toUpperCase?.() || 'LOKASYONLARIMIZ'}
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
              {t.contact?.offices?.title1}
              <Box component="span" sx={{ color: 'primary.main' }}> {t.contact?.offices?.title2}</Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              {t.contact?.offices?.description}
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {offices.map((office, index) => (
              <Grid key={index} size={{ xs: 12, md: 4 }}>
                <Card
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 4,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    borderTop: office.isHeadquarters ? '4px solid #0D47A1' : '4px solid #E0E0E0',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  <Chip
                    label={office.isHeadquarters ? t.contact?.offices?.headquarters : t.contact?.offices?.branch}
                    color={office.isHeadquarters ? 'primary' : 'default'}
                    size="small"
                    sx={{ mb: 2 }}
                  />
                  <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
                    {office.city}
                  </Typography>
                  <Stack spacing={2.5}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box sx={{ mt: 0.5 }}>
                        <IconMapPin size={20} color="#0D47A1" />
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {office.address}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <IconPhone size={20} color="#0D47A1" />
                      <Typography variant="body2" color="text.secondary">
                        {office.phone}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <IconMail size={20} color="#0D47A1" />
                      <Typography variant="body2" color="text.secondary">
                        {office.email}
                      </Typography>
                    </Box>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Avantajlar */}
      <Box sx={{ py: 10, background: 'linear-gradient(135deg, #0D47A1 0%, #002171 100%)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ mb: 2, color: 'white' }}>
              {t.contact?.why?.title1}
              <Box component="span" sx={{ color: '#FF6F00' }}> {t.contact?.why?.title2}</Box>
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {whyChooseUs.map((item, index) => (
              <Grid key={index} size={{ xs: 6, md: 4 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    transition: 'all 0.3s',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      backgroundColor: 'rgba(255, 111, 0, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <IconCheck size={22} color="#FF6F00" />
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 600, mb: 0.5 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactFull;
