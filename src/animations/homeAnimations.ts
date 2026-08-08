import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initHomeAnimations() {

  /* ==================================================
     GENERAL REVEAL
  ================================================== */

  gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 35,
        filter: 'blur(8px)',
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.85,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: element,
          start: 'top 82%',
          once: true,
        },
      }
    )
  })


  /* ==================================================
     HERO STATS
  ================================================== */

  gsap.fromTo(
    '.hero-stat-card',
    {
      opacity: 0,
      y: 35,
      scale: 0.94,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,

      duration: 0.75,
      stagger: 0.12,
      ease: 'power3.out',

      scrollTrigger: {
        trigger: '.hero-stats-grid',
        start: 'top 85%',
        once: true,
      },
    }
  )


  /* ==================================================
     SERVICES
  ================================================== */

  gsap.fromTo(
    '.service-card',
    {
      opacity: 0,
      y: 50,
      scale: 0.96,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,

      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',

      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 78%',
        once: true,
      },
    }
  )


  /* ==================================================
     PAYMENT
  ================================================== */

  gsap.fromTo(
    '.payment-section',
    {
      opacity: 0,
      y: 35,
      scale: 0.98,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,

      duration: 0.9,
      ease: 'power3.out',

      scrollTrigger: {
        trigger: '.payment-section',
        start: 'top 82%',
        once: true,
      },
    }
  )


  /* ==================================================
     CONTACT
  ================================================== */

  gsap.fromTo(
    '.contact-card',
    {
      opacity: 0,
      y: 40,
      scale: 0.96,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,

      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',

      scrollTrigger: {
        trigger: '.contact-grid',
        start: 'top 80%',
        once: true,
      },
    }
  )


  /* ==================================================
     WHATSAPP CHANNEL
  ================================================== */

  gsap.fromTo(
    '.channel-section',
    {
      opacity: 0,
      y: 40,
      scale: 0.97,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,

      duration: 0.85,
      ease: 'power3.out',

      scrollTrigger: {
        trigger: '.channel-section',
        start: 'top 82%',
        once: true,
      },
    }
  )


  /* ==================================================
     FAQ
  ================================================== */

  gsap.fromTo(
    '.faq-item',
    {
      opacity: 0,
      y: 25,
    },
    {
      opacity: 1,
      y: 0,

      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',

      scrollTrigger: {
        trigger: '.faq-list',
        start: 'top 80%',
        once: true,
      },
    }
  )
}