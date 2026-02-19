"use client"

import { Clock, MapPin, Phone } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const details = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua Bahia 56, Bairro Popular",
    sub: "Santa Rita, PB",
  },
  {
    icon: Phone,
    label: "Contato",
    value: "Fale conosco pelo WhatsApp",
    sub: "ou nas redes sociais",
  },
]

export function Contact() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="contato" className="relative bg-background py-24 md:py-32 texture-paper">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span
            className={`inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            Contato
          </span>
          <h2
            className={`mt-5 text-balance font-serif text-3xl font-bold text-foreground transition-all duration-700 delay-100 md:text-4xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            Onde nos encontrar
          </h2>
          <p
            className={`mt-4 text-pretty text-sm leading-relaxed text-muted-foreground transition-all duration-700 delay-200 md:text-base ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            Estamos no coração do bairro Popular em Santa Rita. Venha nos
            visitar ou leve esse sabor para casa.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {details.map((detail, i) => (
            <div
              key={detail.label}
              className={`group flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-700 hover:border-primary/20 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: isVisible ? `${300 + i * 100}ms` : "0ms" }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                <detail.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {detail.label}
              </p>
              <p className="mt-2.5 text-lg font-bold text-foreground">
                {detail.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{detail.sub}</p>
            </div>
          ))}

          <div
            className={`overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-700 hover:border-primary/20 hover:shadow-md h-full ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
          >
            <iframe
              title="Localização da NutriBox - Rua Bahia 56, Santa Rita PB"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1176.9923795175177!2d-34.97831477613884!3d-7.135863543170146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acef13e353ebed%3A0x1f5fb7e0df3a32f0!2sR.%20Bahia%2C%2056%20-%20Popular%2C%20Santa%20Rita%20-%20PB%2C%2058301-365!5e0!3m2!1sen!2sbr!4v1770398679151!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
