import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/theme';
import { LanguageProvider } from '@/i18n/LanguageContext';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Vorteks Enerji - Gemi & Yat Onarim ve Bakim Hizmetleri',
  description: 'Vorteks Enerji, gemi ve yat onarim, bakim, yakit temini ve denizcilik hizmetlerinde uzman ekibiyle hizmetinizdedir.',
  keywords: 'gemi onarim, yat bakim, denizcilik, yakit temini, vorteks enerji',
};

// Sayfa yüklenmeden önce dil kontrolü için script
const langScript = `
  (function() {
    try {
      var lang = localStorage.getItem('language');
      if (lang) {
        document.documentElement.setAttribute('data-lang', lang);
      }
    } catch(e) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: langScript }} />
        <style dangerouslySetInnerHTML={{ __html: `
          .lang-loading { opacity: 0; }
          .lang-ready { opacity: 1; transition: opacity 0.1s; }
        `}} />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <LanguageProvider>
              {children}
            </LanguageProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
