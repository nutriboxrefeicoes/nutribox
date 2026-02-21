"use client"

import { useEffect, useState } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Nosso Menu", href: "https://nutribox.rmenu.com.br" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollOpacity, setScrollOpacity] = useState(0)
  const [blurAmount, setBlurAmount] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 40)

      // Calculate opacity: 0-40px = 0%, 40-1800px = gradual 0-100%, 1800px+ = 100%
      if (scrollY <= 40) {
        setScrollOpacity(0)
      } else if (scrollY > 40 && scrollY < 1800) {
        const progress = (scrollY - 40) / 1760 // 1760px range (40-1800)
        setScrollOpacity(progress)
      } else {
        setScrollOpacity(1)
      }

      // Calculate blur: 0-260px = 0px, 260-1800px = gradual 0-16px, 1800px+ = 16px
      if (scrollY <= 260) {
        setBlurAmount(0)
      } else if (scrollY > 260 && scrollY < 1800) {
        const blurProgress = (scrollY - 260) / 1540 // 1540px range (260-1800)
        setBlurAmount(blurProgress * 16) // Max 16px blur
      } else {
        setBlurAmount(16)
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: `rgba(15, 29, 20, ${0.95 * scrollOpacity})`,
        backdropFilter: blurAmount > 0 ? `blur(${blurAmount}px)` : 'none',
        boxShadow: scrollOpacity >= 1 ? '0 1px 2px 0 rgb(0 0 0 / 0.05)' : 'none'
      }}
    >
      {scrollOpacity >= 1 && (
        <div
          className="absolute inset-0 pointer-events-none select-none z-[1] opacity-[0.2] bg-[url('/images/illustrations/dark-background2.webp')] bg-cover bg-center will-change-opacity"
        />
      )}
      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div
            className="relative h-10 w-10 transition-transform group-hover:scale-105"
            style={{
              maskImage: 'url(/images/icon.svg)',
              WebkitMaskImage: 'url(/images/icon.svg)',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
              backgroundColor: '#f5f2dc'
            }}
          />
          <span
            className={`text-xl font-bold tracking-tight font-serif transition-colors duration-300 ${scrolled ? "text-[#f5f2dc]" : "text-primary-foreground"
              }`}
          >
            NutriBox
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Menu principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#f5f2dc] after:transition-all hover:after:w-full ${scrolled
                ? "text-[#f5f2dc]/80 hover:text-[#f5f2dc]"
                : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://nutribox.rmenu.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-lg bg-[#f5f2dc] text-[#0f1d14] px-5 py-2.5 text-sm font-semibold shadow-sm transition-all duration-200 hover:bg-[#e6e2c8] hover:brightness-95 active:scale-[0.97] lg:inline-flex"
        >
          Faça seu pedido
          <ArrowUpRight className="h-4 w-4" />
        </a>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`transition-colors lg:hidden ${scrolled ? "text-[#f5f2dc]" : "text-primary-foreground"
            }`}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      <div
        className={`relative overflow-hidden border-t transition-all duration-300 lg:hidden ${mobileMenuOpen
          ? "max-h-80 border-[#2a4a35] bg-[#0f1d14]/95 backdrop-blur-lg"
          : "max-h-0 border-transparent"
          }`}
      >
        {mobileMenuOpen && (
          <div className="absolute inset-0 pointer-events-none select-none opacity-[0.04] bg-[url('/images/illustrations/dark-background2.webp')] bg-repeat bg-[length:256px_256px]" />
        )}
        <nav className="relative z-10 flex flex-col gap-1 px-6 py-4" aria-label="Menu principal mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-[#f5f2dc]/60 transition-colors hover:bg-[#f5f2dc]/5 hover:text-[#f5f2dc]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://nutribox.rmenu.com.br"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#f5f2dc] text-[#0f1d14] px-5 py-3 text-sm font-semibold shadow-sm transition-all duration-200 hover:bg-[#e6e2c8] hover:brightness-95 active:scale-[0.97]"
          >
            Faça seu pedido
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  )
}
