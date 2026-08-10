import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { constructMetadata } from "@/lib/metadata";
import { Providers } from "@/components/providers";
import { MainLayout } from "@/components/layout/main-layout";
import { OrganizationJsonLd, LocalBusinessJsonLd, WebSiteJsonLd, ServicesCatalogJsonLd, PersonJsonLd } from "@/components/seo/json-ld";
import { InstallPwaPrompt } from "@/components/ui/install-pwa-prompt";
import { WhatsAppFloatingChat } from "@/components/ui/whatsapp-floating-chat";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrganizationJsonLd />
        <PersonJsonLd />
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
        <ServicesCatalogJsonLd />
      </head>
      <body className={`${inter.variable} min-h-screen bg-background text-foreground font-sans antialiased`}>
        <Providers>
          <MainLayout>{children}</MainLayout>
          <InstallPwaPrompt />
          <WhatsAppFloatingChat />
        </Providers>
      </body>
    </html>
  );
}

