"use client"

import { Star } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const testimonials = [
  {
    name: "Ana Paula",
    role: "Cliente frequente",
    text: "As marmitas da Nutribox salvam minha semana! Tudo fresco, saboroso e super prático. Recomendo demais.",
    rating: 5,
  },
  {
    name: "Carlos Eduardo",
    role: "Atleta amador",
    text: "Finalmente encontrei uma opção saudável que realmente tem sabor. O açaí fit é o melhor que já provei.",
    rating: 5,
  },
  {
    name: "Fernanda Lima",
    role: "Mãe e empresária",
    text: "Praticidade e qualidade. Peço para toda a família e todos adoram. Os sucos naturais são incríveis!",
    rating: 5,
  },
]

export function Testimonials() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="relative bg-background py-24 md:py-32 texture-paper">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span
            className={`inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            Depoimentos
          </span>
          <h2
            className={`mt-5 text-balance font-serif text-3xl font-bold text-foreground transition-all duration-700 delay-100 md:text-4xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.name}
              className={`group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-700 hover:border-primary/20 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {`"${t.text}"`}
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
