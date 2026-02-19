"use client"

import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const features = [
  {
    image: "/images/illustrations/qualidade-casa-panela.webp",
    title: "Qualidade de casa",
    description:
      "Ingredientes que você conhece e confia, preparados como a gente prepara para a nossa família.",
  },
  {
    image: "/images/illustrations/sem-perder-tempo-marmita.webp",
    title: "Sem perder tempo",
    description:
      "Comida de verdade na sua mesa sem você perder tempo. É só pedir e aproveitar o seu dia.",
  },
  {
    image: "/images/illustrations/opcoes-low-cal-balanca.webp",
    title: "Opções Low Cal",
    description:
      "Pratos leves e equilibrados para você manter a forma comendo o que gosta.",
  },
  {
    image: "/images/illustrations/zero-conservantes-folhas.webp",
    title: "Zero conservantes",
    description:
      "Zero conservantes, 100% sabor. Temperada com ingredientes naturais, fresca como comida de casa deve ser.",
  },
  {
    image: "/images/illustrations/sabor-abraca-colher.webp",
    title: "Sabor que abraça",
    description:
      "Esqueça a comida fit sem graça. Aqui, cada prato tem tempero de verdade e aquele gosto que conquista.",
  },
]

export function Differentials() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="diferenciais" className="relative bg-[#152518] py-24 md:py-32 texture-dark">

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
            Diferenciais
          </span>
          <h2
            className={`mt-5 text-balance font-serif text-3xl font-bold text-[#f5f2dc] transition-all duration-700 delay-100 md:text-4xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            O que faz a NutriBox diferente?
          </h2>
          <p
            className={`mt-4 text-pretty text-sm leading-relaxed text-[#f5f2dc]/70 transition-all duration-700 delay-200 md:text-base ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            Não é só comida. É cuidado com você, feito à mão, entregue na porta.
          </p>
        </div>

        {/* Top row: 3 cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.slice(0, 3).map((feature, i) => (
            <div
              key={feature.title}
              className={`group flex gap-5 rounded-2xl border border-[#2a4a35]/60 bg-[#1f3727] p-6 shadow-sm transition-all duration-700 hover:border-[#f5f2dc]/15 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5f2dc]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#152518] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: isVisible ? `${300 + i * 80}ms` : "0ms" }}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f5f2dc]/10 transition-all duration-300 group-hover:bg-[#f5f2dc]/15 group-hover:scale-110">
                <Image
                  src={feature.image}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain opacity-80 transition-opacity group-hover:opacity-100"
                />
              </div>
              <div>
                <h3 className="font-bold text-[#f5f2dc]">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#f5f2dc]/70">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: 2 cards centered */}
        <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          {features.slice(3).map((feature, i) => (
            <div
              key={feature.title}
              className={`group flex w-full gap-5 rounded-2xl border border-[#2a4a35]/60 bg-[#1f3727] p-6 shadow-sm transition-all duration-700 hover:border-[#f5f2dc]/15 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5f2dc]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#152518] sm:w-[calc(33.333%-0.5rem)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: isVisible ? `${540 + i * 80}ms` : "0ms" }}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f5f2dc]/10 transition-all duration-300 group-hover:bg-[#f5f2dc]/15 group-hover:scale-110">
                <Image
                  src={feature.image}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain opacity-80 transition-opacity group-hover:opacity-100"
                />
              </div>
              <div>
                <h3 className="font-bold text-[#f5f2dc]">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#f5f2dc]/70">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
