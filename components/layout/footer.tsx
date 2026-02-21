import Image from "next/image"
import { Instagram, MapPin } from "lucide-react"

const footerLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Menu", href: "https://nutribox.rmenu.com.br" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#2a4a35] bg-[#0f1d14] py-4 md:py-14 texture-dark">


      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="relative h-9 w-9 overflow-hidden rounded-full">
                <Image
                  src="/images/logo.webp"
                  alt="NutriBox Logo"
                  fill
                  className="object-cover"
                  sizes="36px"
                />
              </div>
              <span className="text-lg font-bold font-serif text-[#f5f2dc]">
                NutriBox
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#f5f2dc]/70">
              Comida de verdade, feita à mão e com todo amor para nutrir o
              seu dia a dia em Santa Rita, PB.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#f5f2dc]/50">
              Navegação
            </h4>
            <nav
              className="mt-4 flex flex-col gap-3"
              aria-label="Links do rodapé"
            >
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#f5f2dc]/60 transition-colors hover:text-[#f5f2dc]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Location & Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#f5f2dc]/50">
              Encontre-nos
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex items-start gap-2 text-sm text-[#f5f2dc]/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#f5f2dc]" />
                <span className="block leading-tight -mt-0.5">
                  Rua Bahia 56, Bairro Popular
                  <br />
                  Santa Rita, PB
                </span>
              </div>
              <a
                href="https://www.instagram.com/nutribox.refeicoesaudaveis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#f5f2dc]/60 transition-colors hover:text-[#f5f2dc]"
                aria-label="Instagram da NutriBox"
              >
                <Instagram className="h-4 w-4 text-[#f5f2dc]" />
                <span>@nutribox.refeicoesaudaveis</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-12 border-t border-[#2a4a35] pt-4 md:pt-8 text-center">
          <p className="text-xs text-[#f5f2dc]/50">
            NutriBox &mdash; Sabor de casa, vida leve.
          </p>
        </div>

      </div>

      {/* Decorative Seal Overlay */}
      <div
        className="absolute -bottom-20 -right-20 md:-bottom-10 md:-right-14 h-80 w-80 md:h-80 md:w-80 opacity-[0.3] pointer-events-none select-none rotate-[-15deg]"
      >
        <Image
          src="/images/illustrations/selo.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </footer>
  )
}
