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
  title: 'NutriBox | Refeições Saudáveis em Santa Rita, PB',
  description:
    'NutriBox oferece marmitas fit, sucos naturais, açaí e saladas de frutas com ingredientes selecionados. Delivery e retirada em Santa Rita, PB.',
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
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
