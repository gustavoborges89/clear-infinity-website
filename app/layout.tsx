
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clearinfinityservice.com"),

  title: {
    default: "Carpet Cleaning Orlando, FL | Clear Infinity",
    template: "%s | Clear Infinity",
  },

  description:
    "Professional carpet cleaning, upholstery cleaning, mattress cleaning and commercial cleaning in Orlando, FL. Contact Clear Infinity today for a free quote!",

  applicationName: "Clear Infinity",

  keywords: [
    "Carpet Cleaning Orlando",
    "Upholstery Cleaning Orlando",
    "Mattress Cleaning Orlando",
    "Commercial Carpet Cleaning Orlando",
    "Professional Carpet Cleaning",
    "Clear Infinity",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clearinfinityservice.com",
    siteName: "Clear Infinity",
    title: "Carpet Cleaning Orlando, FL | Clear Infinity",
    description:
      "Professional carpet, upholstery, mattress and commercial cleaning services in Orlando, Florida.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Carpet Cleaning Orlando, FL | Clear Infinity",
    description:
      "Professional carpet and upholstery cleaning in Orlando, FL. Request your free quote!",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};



const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Clear Infinity",
  url: "https://clearinfinityservice.com",
  telephone: "+17747771123",
  image: "https://clearinfinityservice.com/clear-infinity-logo.webp",
  description:
    "Professional carpet cleaning, upholstery cleaning, mattress cleaning and commercial cleaning services in Orlando and Winter Garden, Florida.",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 28.5383,
      longitude: -81.3792,
    },
    geoRadius: {
      "@type": "Distance",
      name: "Approximately 35 miles",
    },
  },
  knowsAbout: [
    "Carpet Cleaning",
    "Upholstery Cleaning",
    "Mattress Cleaning",
    "Commercial Carpet Cleaning",
    "Stain Removal",
    "Pet Odor Removal",
  ],
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {children}
      </body>

    </html>
  );
}
