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
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-foreground/30" />

        {/* Texture Overlay */}

      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 text-center md:py-40">
        <span className="animate-fade-up inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur-sm">
          Santa Rita, PB &mdash; Bairro Popular
        </span>

        <h1 className="animate-fade-up animation-delay-100 mx-auto mt-8 max-w-3xl text-balance font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
          O sabor de casa, a leveza que você merece
        </h1>

        <p className="animate-fade-up animation-delay-200 mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/85 md:text-lg">
          Comida de verdade para quem cuida de si sem abrir mão do sabor.
          Delivery rápido em Santa Rita e região.
        </p>

        <div className="animate-fade-up animation-delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#menu"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#1f3727] px-7 py-3.5 text-base font-semibold text-[#f5f2dc] shadow-lg transition-all hover:shadow-xl hover:brightness-125 sm:w-auto"
          >
            Ver cardápio
            <ArrowUpRight className="h-4.5 w-4.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#sobre"
            className="inline-flex w-full items-center justify-center rounded-lg border border-primary-foreground/25 bg-primary-foreground/5 px-7 py-3.5 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:border-primary-foreground/40 hover:bg-primary-foreground/10 sm:w-auto"
          >
            Conheça a NutriBox
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center">
        <a
          href="#sobre"
          className="animate-bounce rounded-full border border-primary-foreground/20 bg-primary-foreground/10 p-2.5 text-primary-foreground/70 backdrop-blur-sm transition-colors hover:text-primary-foreground"
          aria-label="Rolar para baixo"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}
