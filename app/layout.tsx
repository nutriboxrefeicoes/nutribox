import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'

import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nutribox.rmenu.com.br'),
  title: 'NutriBox | Refeições Saudáveis: Santa Rita e João Pessoa',
  description:
    'NutriBox oferece marmitas fit, sucos e mais. Delivery de refeições caseiras e saudáveis em Santa Rita, João Pessoa e Bayeux. Peça já!',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NutriBox | Refeições Saudáveis: Santa Rita e João Pessoa',
    description: 'Delivery de refeições caseiras e saudáveis em Santa Rita, João Pessoa e Bayeux.',
    url: 'https://nutribox.rmenu.com.br',
    siteName: 'NutriBox',
    images: [
      {
        url: '/images/hero-bowl.webp',
        width: 1200,
        height: 630,
        alt: 'Refeição Saudável NutriBox',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NutriBox | Refeições Saudáveis: Santa Rita e João Pessoa',
    description: 'Delivery de refeições caseiras e saudáveis em Santa Rita, João Pessoa e Bayeux.',
    images: ['/images/hero-bowl.webp'],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'NutriBox',
  image: 'https://nutribox.rmenu.com.br/images/logo.webp', // Assuming absolute URL for schema
  url: 'https://nutribox.rmenu.com.br',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Bahia 56',
    addressLocality: 'Santa Rita',
    addressRegion: 'PB',
    addressCountry: 'BR',
  },
  areaServed: ['Santa Rita, PB', 'João Pessoa, PB', 'Bayeux, PB'],
}

export const viewport: Viewport = {
  themeColor: '#2d6a3f',
}

import { WhatsAppButton } from '@/components/whatsapp-button'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
