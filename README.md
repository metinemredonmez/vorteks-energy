# Vorteks Enerji - Kurumsal Web Sitesi

![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react)
![MUI](https://img.shields.io/badge/MUI-7.0.1-007FFF?style=flat-square&logo=mui)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?style=flat-square&logo=typescript)

Vorteks Enerji firması için geliştirilen modern, responsive ve çok dilli kurumsal web sitesi.

## Proje Hakkında

Bu proje, enerji sektöründe faaliyet gösteren Vorteks Enerji firması için tasarlanmış profesyonel bir kurumsal web sitesidir. Modern web teknolojileri kullanılarak geliştirilmiştir.

### Özellikler

- **Modern Tasarım**: Material UI ile profesyonel ve tutarlı kullanıcı arayüzü
- **Responsive**: Tüm cihazlarda (mobil, tablet, masaüstü) uyumlu tasarım
- **Çok Dilli Destek**: Türkçe ve İngilizce dil seçeneği
- **Animasyonlar**: Framer Motion ile akıcı sayfa geçişleri ve animasyonlar
- **İletişim Formu**: EmailJS entegrasyonu ile çalışan iletişim formu
- **Galeri Sistemi**: Proje ve galeri görsellerinin sergilenmesi
- **SEO Dostu**: Next.js App Router ile optimum SEO performansı
- **Hızlı Yükleme**: Static export ile yüksek performans

## Teknolojiler

| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| Next.js | 15.1.6 | React framework |
| React | 19.0.0 | UI library |
| TypeScript | 5.6.2 | Tip güvenliği |
| Material UI | 7.0.1 | UI component library |
| Framer Motion | 10.16.4 | Animasyon library |
| next-intl | 4.7.0 | Çok dilli destek |
| EmailJS | 4.4.1 | E-posta servisi |
| React Slick | 0.29.0 | Carousel/Slider |

## Proje Yapısı

```
vorteks-enerji-website/
├── public/
│   ├── images/
│   │   ├── about/        # Hakkımızda görselleri
│   │   ├── gallery/      # Galeri görselleri
│   │   ├── hero/         # Ana sayfa görselleri
│   │   └── logo.png      # Logo dosyaları
│   └── favicon.png
├── src/
│   ├── app/
│   │   ├── page.tsx          # Ana sayfa
│   │   ├── layout.tsx        # Root layout
│   │   ├── hakkimizda/       # Hakkımızda sayfası
│   │   ├── hizmetler/        # Hizmetler sayfası
│   │   ├── galeri/           # Galeri sayfası
│   │   ├── projeler/         # Projeler sayfası
│   │   └── iletisim/         # İletişim sayfası
│   ├── components/
│   │   ├── Header.tsx        # Site başlığı ve navigasyon
│   │   ├── Hero.tsx          # Ana sayfa hero bölümü
│   │   ├── About.tsx         # Hakkımızda bölümü
│   │   ├── Services.tsx      # Hizmetler bölümü
│   │   ├── Gallery.tsx       # Galeri bölümü
│   │   ├── Contact.tsx       # İletişim bölümü
│   │   ├── Footer.tsx        # Site alt bilgisi
│   │   ├── PageBanner.tsx    # Sayfa başlık banner'ı
│   │   ├── LanguageSwitcher.tsx  # Dil değiştirici
│   │   └── ...Full.tsx       # Tam sayfa versiyonları
│   ├── i18n/
│   │   └── LanguageContext.tsx   # Dil yönetimi context
│   └── theme/
│       └── theme.ts          # MUI tema ayarları
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## Sayfalar

| Sayfa | URL | Açıklama |
|-------|-----|----------|
| Ana Sayfa | `/` | Hero, hizmetler, galeri özeti |
| Hakkımızda | `/hakkimizda` | Firma tanıtımı |
| Hizmetler | `/hizmetler` | Sunulan hizmetler |
| Galeri | `/galeri` | Proje görselleri |
| Projeler | `/projeler` | Tamamlanan projeler |
| İletişim | `/iletisim` | İletişim formu ve bilgileri |

## Kurulum

### Gereksinimler

- Node.js 18.x veya üzeri
- npm veya yarn

### Adımlar

1. **Repoyu klonlayın:**
```bash
git clone https://github.com/metinemredonmez/vorteks-energy.git
cd vorteks-energy
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
# veya
yarn install
```

3. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
# veya
yarn dev
```

4. **Tarayıcıda açın:**
```
http://localhost:3000
```

## Kullanılabilir Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusunu başlatır |
| `npm run build` | Production build oluşturur |
| `npm run start` | Production sunucusunu başlatır |
| `npm run lint` | ESLint ile kod kontrolü yapar |

## Build & Deploy

### Static Export

Proje static export olarak yapılandırılmıştır. Build sonrası `out/` klasöründe static dosyalar oluşur:

```bash
npm run build
```

Build çıktısı herhangi bir static hosting servisine (Netlify, Vercel, GitHub Pages vb.) deploy edilebilir.

### Vercel Deployment

```bash
vercel --prod
```

## Konfigürasyon

### EmailJS Ayarları

İletişim formu için `src/components/Contact.tsx` veya `ContactFull.tsx` dosyasında EmailJS credentials'larını güncelleyin:

```typescript
emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
);
```

### Tema Özelleştirme

`src/theme/theme.ts` dosyasından renk paleti ve tipografi ayarlarını değiştirebilirsiniz.

## Öne Çıkan Bileşenler

### Hero Section
- Tam ekran arka plan görseli
- Gradient overlay
- Animasyonlu metin ve butonlar
- Wave tasarım

### Header
- Sticky navigation
- Mobil hamburger menü
- Dil değiştirici
- Smooth scroll navigasyon

### İletişim Formu
- Form validasyonu
- EmailJS entegrasyonu
- Başarı/Hata mesajları
- Loading durumu

## Tarayıcı Desteği

- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)

## Lisans

Bu proje özel kullanım için geliştirilmiştir. Tüm hakları saklıdır.

## İletişim

Geliştirici: [Metin Emre Dönmez](https://github.com/metinemredonmez)

---

**Vorteks Enerji** - Enerji Çözümlerinde Güvenilir Partner
