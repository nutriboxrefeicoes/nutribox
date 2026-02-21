import Image from "next/image"
import { ArrowDown, ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0f1d14] texture-dark">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bowl.webp"
          alt="Refeição saudável NutriBox"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-foreground/50 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-foreground/30" />

        {/* Texture Overlay */}

      </div>

      <div className="relative z-10 mx-auto flex h-full min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <span className="animate-fade-up inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur-sm md:px-5 md:py-2 md:text-sm">
          Santa Rita, PB &mdash; Bairro Popular
        </span>

        <h1 className="animate-fade-up animation-delay-100 mx-auto mt-8 max-w-4xl text-balance font-serif text-5xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl lg:leading-[1.1]">
          O sabor de casa, a leveza que você merece.
        </h1>

        <p className="animate-fade-up animation-delay-200 mx-auto mt-6 max-w-2xl text-center text-xl leading-relaxed text-primary-foreground/85 md:text-2xl">
          {"Comida de verdade para quem "}
          <br className="block sm:hidden" />
          {"cuida de si sem abrir mão "}
          <br className="block sm:hidden" />
          {"do sabor. Delivery rápido "}
          <br className="block sm:hidden" />
          {"em Santa Rita, João Pessoa e região."}
        </p>

        <div className="animate-fade-up animation-delay-300 mt-10 md:mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://nutribox.rmenu.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#1f3727] px-7 py-3.5 text-base font-semibold text-[#f5f2dc] shadow-lg transition-all hover:shadow-xl hover:brightness-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1d14] sm:w-auto md:px-9 md:py-4 md:text-lg"
          >
            Visite nosso cardápio
            <ArrowUpRight className="h-4.5 w-4.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:h-5 md:w-5" />
          </a>
          <a
            href="#sobre"
            className="inline-flex w-full items-center justify-center rounded-lg border border-primary-foreground/25 bg-primary-foreground/5 px-7 py-3.5 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:border-primary-foreground/40 hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1d14] sm:w-auto md:px-9 md:py-4 md:text-lg"
          >
            Conheça a NutriBox
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center">
        <a
          href="#sobre"
          className="animate-bounce rounded-full border border-primary-foreground/20 bg-primary-foreground/10 p-2.5 text-primary-foreground/70 backdrop-blur-sm transition-colors hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1d14]"
          aria-label="Rolar para baixo"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}
