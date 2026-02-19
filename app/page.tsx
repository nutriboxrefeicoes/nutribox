import { Header } from "@/components/layout/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { MenuHighlights } from "@/components/sections/menu-highlights"
import { Differentials } from "@/components/sections/differentials"
import { Testimonials } from "@/components/sections/testimonials"
import { CtaSection } from "@/components/sections/cta"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/layout/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <MenuHighlights />
        <Differentials />
        <Testimonials />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
