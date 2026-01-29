import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Products from '@/components/Products'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import FadeInSection from '@/components/FadeInSection'
import PageLoader from '@/components/PageLoader'

export default function Home() {
  return (
    <>
      <PageLoader />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <FadeInSection>
          <Features />
        </FadeInSection>
        <FadeInSection>
          <Products />
        </FadeInSection>
        <FadeInSection>
          <About />
        </FadeInSection>
        <FadeInSection>
          <Testimonials />
        </FadeInSection>
        <Footer />
      </main>
    </>
  )
}
