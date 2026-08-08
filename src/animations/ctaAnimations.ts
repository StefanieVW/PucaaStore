import gsap from 'gsap'

export function initCtaAnimations() {

  gsap.fromTo(
    '.cta-content',
    {
      opacity: 0,
      y: 40,
      scale: 0.96,
      filter: 'blur(10px)',
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',

      duration: 0.9,
      ease: 'power3.out',

      scrollTrigger: {
        trigger: '.cta',
        start: 'top 80%',
        once: true,
      },
    }
  )


  gsap.fromTo(
    '.cta-content > *',
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,

      duration: 0.65,
      stagger: 0.1,
      ease: 'power3.out',

      scrollTrigger: {
        trigger: '.cta',
        start: 'top 78%',
        once: true,
      },
    }
  )
}