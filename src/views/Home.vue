<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import DesktopNav from '../components/DesktopNav.vue'
import MobileNav from '../components/MobileNav.vue'
import BglVisual from '../components/BglVisual.vue'
import ServiceCard from '../components/ServiceCard.vue'
import HowItWorks from '../components/HowItWorks.vue'
import HeroStats from '../components/HeroStats.vue'
import About from '../components/About.vue'
import Trust from '../components/Trust.vue'
import PaymentMethods from '../components/PaymentMethod.vue'
import ContactSection from '../components/ContactSection.vue'
import WhatsAppChannel from '../components/WhatsappChannel.vue'
import FAQ from '../components/FAQ.vue'
import Footer from '../components/Footer.vue'

import { useLanguage } from '../composables/useLanguage'

import { initHomeAnimations } from '../animations/homeAnimations'
import { initAboutAnimations } from '../animations/aboutAnimations'
import { initTrustAnimations } from '../animations/trustAnimations'
import { initCtaAnimations } from '../animations/ctaAnimations'

gsap.registerPlugin(ScrollTrigger)

const { t } = useLanguage()

let ctx: gsap.Context | null = null


const handleContactClick = () => {
  const contactSection =
    document.querySelector<HTMLElement>('.contact-section')

  if (!contactSection) return

  contactSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })

  setTimeout(() => {
    gsap.fromTo(
      contactSection,
      {
        scale: 0.985,
        boxShadow:
          '0 0 0 rgba(23, 108, 255, 0)',
      },
      {
        scale: 1,
        boxShadow:
          '0 0 45px rgba(23, 108, 255, 0.20)',

        duration: 0.5,
        ease: 'power3.out',

        yoyo: true,
        repeat: 1,
      }
    )
  }, 500)
}


onMounted(() => {

  ctx = gsap.context(() => {

    initHomeAnimations()

    initAboutAnimations()

    initTrustAnimations()

    initCtaAnimations()

  })

})


onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <div class="site">

    <DesktopNav />
    <MobileNav />

    <!-- ONE MAIN VISUAL -->
    <BglVisual />

    <div class="site-background">
      <div class="bg-glow bg-glow-one"></div>
      <div class="bg-glow bg-glow-two"></div>
      <div class="bg-glow bg-glow-three"></div>
    </div>

    <main class="experience">

      <!-- ================= HERO ================= -->

      <section id="home" class="section hero">

        <div class="hero-content">

          <span class="eyebrow">
            {{ t.hero.eyebrow }}
          </span>

          <h1>
            {{ t.hero.titleBefore }}
            <span>{{ t.hero.titleHighlight }}</span>
            {{ t.hero.titleAfter }}
          </h1>

          <p>
            {{ t.hero.description }}
          </p>

          <div class="hero-actions">

            <a href="#contact" class="btn btn-primary btn-breathe">
              {{ t.hero.contact }}
            </a>

            <a href="#services" class="btn btn-secondary">
              {{ t.hero.explore }}
            </a>

          </div>

        </div>

      </section>

      <!-- ================= STATS ================= -->
      <HeroStats />

      <!-- ================= ABOUT ================= -->
      <About />

      <!-- ================= SERVICES ================= -->

      <section id="services" class="section services">

        <div class="section-heading-services reveal">

          <span class="eyebrow">
            {{ t.services.eyebrow }}
          </span>

          <h2>
            {{ t.services.titleBefore }}
            <span>{{ t.services.titleHighlight }}</span>
          </h2>

          <p>
            {{ t.services.description }}
          </p>

        </div>


        <div class="services-grid">

          <ServiceCard
            number="01"
            icon="buy"
            :title="t.services.buy.title"
            :description="t.services.buy.description"
            :action="t.services.buy.action"
          />

          <ServiceCard
            number="02"
            icon="sell"
            :title="t.services.sell.title"
            :description="t.services.sell.description"
            :action="t.services.sell.action"
          />

          <ServiceCard
            number="03"
            icon="global"
            :title="t.services.global.title"
            :description="t.services.global.description"
            :action="t.services.global.action"
          />

        </div>

      </section>

      <!-- ================= WHY CHOOSE PUCAA ================= -->
      <Trust />

      <!-- ================= HOW IT WORKS ================= -->

      <section id="how-it-works" class="section how-section">

        <div class="section-heading reveal">

          <span class="eyebrow">
            {{ t.howItWorks.eyebrow }}
          </span>

          <h2>
            {{ t.howItWorks.titleBefore }}
            <span>{{ t.howItWorks.titleHighlight }}</span>
          </h2>

        </div>

        <HowItWorks />

      </section>

      <!-- ================= PAYMENT METHODS ================= -->

      <PaymentMethods />

      <!-- ================= CONTACT ================= -->

      <ContactSection />

      <!-- ================= FAQ ================= -->

      <FAQ />

      <!-- ================= CHANNEL ================= -->

      <WhatsAppChannel />

      <!-- ================= CTA ================= -->

      <section id="contactunder" class="section cta">

        <div class="cta-content">

          <span class="eyebrow">
            {{ t.cta.eyebrow }}
          </span>

          <h2>
            {{ t.cta.titleBefore }}
            <span>{{ t.cta.titleHighlight }}</span>
          </h2>

          <p>
            {{ t.cta.description }}
          </p>

          <a
            href="#contact"
            class="btn btn-primary cta-contact-link btn-breathe"
            @click.prevent="handleContactClick"
          >
            {{ t.cta.button }}
          </a>

        </div>

      </section>

    </main>

    <Footer />

  </div>
</template>