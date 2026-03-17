import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Hans Bustos — Guía Oficial · Ilha Grande, Brasil",
  description: "Tours privados de lancha, snorkel y trekking en Ilha Grande con Hans Bustos, guía certificado con +15 años de experiencia. Reservá por WhatsApp.",
  keywords: "ilha grande, tours, guia, snorkel, trekking, brasil, hans bustos, viaje",
  openGraph: {
    title: "Hans Bustos — Guía Oficial · Ilha Grande",
    description: "Tours privados de lancha y trekking en el último paraíso sin autos de Brasil.",
    locale: "es_AR",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#141210",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${outfit.variable} font-sans`}>
      <head>
        <link rel="preconnect" href="https://flagcdn.com" />
        <link rel="dns-prefetch" href="https://flagcdn.com" />
      </head>
      <body className="antialiased font-sans">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
