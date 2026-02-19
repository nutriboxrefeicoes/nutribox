"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function CtaSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="relative overflow-hidden bg-[#f5f2dc] py-24 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-background-mobile.webp"
          alt=""
          fill
          className="object-cover block md:hidden scale-110"
          quality={90}
          sizes="100vw"
        />
        <Image
          src="/images/cta-background.webp"
          alt=""
          fill
          className="object-cover hidden md:block scale-110"
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,29,20,0.5)_0%,_#0f1d14_100%)]" />

      </div>

      <div ref={ref} className="relative mx-auto max-w-3xl px-6 text-center">
        <h2
          className={`text-balance font-serif text-3xl font-bold text-primary-foreground transition-all duration-700 md:text-4xl lg:text-5xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          O sabor de casa, na sua mesa
        </h2>
        <p
          className={`mx-auto mt-5 max-w-xl text-pretty text-sm leading-relaxed text-primary-foreground/85 transition-all duration-700 delay-100 md:text-base ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          Peça agora e descubra como uma comida saudável pode ter aquele
          sabor especial de casa. Entrega rápida em Santa Rita.
        </p>
        <div
          className={`mt-10 flex flex-col items-center justify-center gap-4 transition-all duration-700 delay-200 sm:flex-row ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <a
            href="#"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#1f3727]/90 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-[#f5f2dc] shadow-lg transition-all hover:shadow-xl hover:brightness-125 sm:w-auto"
          >
            Faça seu pedido
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contato"
            className="inline-flex w-full items-center justify-center rounded-lg bg-[#1f3727]/90 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-[#f5f2dc] transition-all hover:brightness-125 sm:w-auto"
          >
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  )
}
