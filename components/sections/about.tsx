"use client"

import Image from "next/image"
import { Heart, Sprout, Truck } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const pillars = [
  {
    icon: Sprout,
    title: "Ingredientes de verdade",
    description:
      "Selecionamos cada ingrediente à mão, garantindo que tudo esteja fresco e cheio de vida.",
    image: "/images/cards-sobre/ingredientes.webp",
  },
  {
    icon: Heart,
    title: "Feito com amor",
    description:
      "Receitas caseiras, temperadas com carinho e preparadas para nutrir você de verdade.",
    image: "/images/cards-sobre/feito-com-amor.webp",
  },
  {
    icon: Truck,
    title: "Praticidade na mesa",
    description:
      "Do nosso fogão para a sua casa. Delivery rápido ou retirada para facilitar seu dia.",
    image: "/images/cards-sobre/praticidade.webp",
  },
]

export function About() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="sobre" className="relative bg-[#152518] py-24 md:py-32 texture-dark">

      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div
            className={`mx-auto mb-4 transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
          >
            <Image
              src="/images/monogram-light.svg"
              alt=""
              width={62}
              height={62}
              className="mx-auto opacity-100"
            />
          </div>
          <span
            className={`inline-block rounded-full bg-[rgba(245,242,220,0.15)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#f5f2dc] transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            Sobre nós
          </span>
          <h2
            className={`mt-5 text-balance font-serif text-3xl font-bold text-[#f5f2dc] transition-all duration-700 delay-100 md:text-4xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            Da nossa cozinha para a sua vida
          </h2>
          <p
            className={`mt-4 text-pretty text-sm leading-relaxed text-[#f5f2dc]/70 transition-all duration-700 delay-200 md:text-base ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            Comer bem é cuidar de quem você ama — e isso começa por você. Na NutriBox, cada refeição é preparada à mão, com ingredientes frescos e selecionados e aquele
            tempero que só a comida de casa tem.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`group relative overflow-hidden rounded-2xl border border-[#2a4a35] bg-[#1f3727] p-8 text-center shadow-sm transition-all duration-700 hover:border-[#f5f2dc]/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5f2dc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#152518] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: isVisible ? `${300 + i * 100}ms` : "0ms" }}
            >
              <Image
                src={pillar.image}
                alt=""
                fill
                className="object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="relative z-10">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(245,242,220,0.15)] text-[#f5f2dc] transition-all duration-300 group-hover:bg-[#f5f2dc] group-hover:text-[#0f1d14] group-hover:scale-110">
                  <pillar.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-[#f5f2dc]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#f5f2dc]/70">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
