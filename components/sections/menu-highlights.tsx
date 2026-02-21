"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const items = [
  {
    title: "Marmitas Low Carb",
    description:
      "Monte a sua do seu jeito: escolha a proteína, o carboidrato e a salada. Comida de verdade, feita na hora, e você come tranquilo sem pesar na consciência.",
    image: "/images/marmita.webp",
    illustration: "/images/illustrations/menu/marmita-lowcarb.svg",
    sliderImages: [
      "/images/marmitas/0.webp",
      "/images/marmitas/1.webp",
      "/images/marmitas/2.webp",
      "/images/marmitas/3.webp",
      "/images/marmitas/4.webp",
      "/images/marmitas/5.webp",
      "/images/marmitas/6.webp",
      "/images/marmitas/7.webp",
    ],
    badge: "Mais pedido",
  },
  {
    title: "Sucos Naturais",
    description:
      "Combinações especiais da NutriBox. Cada garrafa é uma receita nossa, sem açúcar, sem industrialização. Só frutas frescas e aquele sabor que você lembra.",
    image: "/images/juices.webp",
    illustration: "/images/illustrations/menu/suco-natural.svg",
    sliderImages: [
      "/images/sucos/verde1.webp",
      "/images/sucos/verde2.webp",
      "/images/sucos/vermelho1.webp",
      "/images/sucos/vermelho2.webp",
      "/images/sucos/amarelo1.webp",
      "/images/sucos/amarelo2.webp",
    ],
    badge: "Natural",
  },
  {
    title: "NutriBox Açaí",
    description:
      "Bebida de açaí natural, pronta para beber. Batido com morango e banana frescos. Natural, cremoso e sem adição de açúcares.",
    image: "/images/acai.webp",
    illustration: "/images/illustrations/menu/acai-garrafa.svg",
    sliderImages: [
      "/images/acai/1.webp",
      "/images/acai/2.webp",
      "/images/acai/3.webp",
      "/images/acai/4.webp",
      "/images/acai/5.webp",
    ],
    badge: "Engarrafado",
  },
  {
    title: "Salada de Frutas",
    description:
      "Frutas frescas cortadas na hora, saborosas por natureza. A sobremesa que você pode comer sem culpa. Uma combinação leve, refrescante e saudável.",
    image: "/images/fruit-salad.webp",
    illustration: "/images/illustrations/menu/salada-frutas.svg",
    sliderImages: [
      "/images/salada-de-frutas/5.webp",
      "/images/salada-de-frutas/1.webp",
      "/images/salada-de-frutas/2.webp",
      "/images/salada-de-frutas/3.webp",
      "/images/salada-de-frutas/4.webp",
    ],
    badge: "Frescor",
  },
]

export function MenuHighlights() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="menu" className="relative bg-background py-24 md:py-32 texture-paper">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span
            className={`inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            Nosso Menu
          </span>
          <h2
            className={`mt-5 text-balance font-serif text-3xl font-bold text-foreground transition-all duration-700 delay-100 md:text-4xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            Sabor de casa, leveza na medida certa
          </h2>
          <p
            className={`mt-5 text-pretty text-base leading-relaxed text-muted-foreground transition-all duration-700 delay-200 md:text-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            Escolha o que combina com o seu momento. Tudo feito à mão, do zero,
            com aquele cuidado que só a comida de verdade tem.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: isVisible ? `${300 + i * 100}ms` : "0ms" }}
            >
              <div className="relative aspect-square w-full overflow-hidden">
                {item.sliderImages && item.sliderImages.length > 0 ? (
                  <Carousel
                    opts={{
                      loop: true,
                    }}
                    plugins={[
                      Autoplay({
                        delay: 3000,
                      }),
                    ]}
                    className="h-full w-full"
                  >
                    <CarouselContent className="-ml-0 h-full">
                      {item.sliderImages.map((imgSrc, index) => (
                        <CarouselItem key={index} className="h-full pl-0">
                          <div className="relative h-full w-full">
                            <Image
                              src={imgSrc}
                              alt={`${item.title} - ${index + 1}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                              quality={90}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={90}
                  />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 z-10 rounded-full bg-[#1f3727]/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#f5f2dc] backdrop-blur-sm">
                  {item.badge}
                </span>
              </div>
              <div className="relative p-5">
                <h3 className="text-lg font-bold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                {/* Proprietary Illustration Overlay */}
                {item.illustration && (
                  <div
                    className={`absolute opacity-[0.15] pointer-events-none select-none
                    ${item.title === "Marmitas Low Carb"
                        ? "-bottom-[6.5rem] -right-[4.39rem] h-[18.4rem] w-[18.4rem] rotate-[0deg] sm:-bottom-[5.86rem] sm:-right-[4.48rem] sm:h-[17.28rem] sm:w-[17.28rem]"
                        : item.title === "Sucos Naturais"
                          ? "-bottom-[3.0rem] -right-16 h-52 w-52 rotate-[0deg] sm:-right-15 sm:h-[14.4rem] sm:w-[14.4rem]"
                          : item.title === "Salada de Frutas"
                            ? "-bottom-[1.7rem] -right-14 h-48 w-48 rotate-[-15deg] sm:-right-18 sm:h-[12.96rem] sm:w-[12.96rem]"
                            : item.title === "NutriBox Açaí"
                              ? "-bottom-[3.2rem] -right-11 h-48 w-48 rotate-[0deg] sm:-right-[3.47rem] sm:h-[14.4rem] sm:w-[14.4rem]"
                              : "-bottom-10 -right-11 h-48 w-48 rotate-[0deg] sm:h-[14.4rem] sm:w-[14.4rem]"
                      }`}
                  >
                    <div
                      className="h-full w-full bg-[#1f3727]"
                      style={{
                        maskImage: `url('${item.illustration}')`,
                        WebkitMaskImage: `url('${item.illustration}')`,
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-14 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0 delay-700" : "opacity-0 translate-y-6"
            }`}
        >
          <a
            href="https://nutribox.rmenu.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-lg bg-[#1f3727] px-8 py-4 text-base font-semibold text-[#f5f2dc] shadow-md transition-all hover:shadow-lg hover:brightness-125"
          >
            Faça seu pedido
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
