import gsap from 'gsap'

export function initAboutAnimations() {

  /* HEADER */

  gsap.fromTo(
    '.about-heading',
    {
      opacity: 0,
      y: 35,
      filter: 'blur(8px)',
    },
    {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',

      duration: 0.9,
      ease: 'power3.out',

      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 82%',
        once: true,
      },
    }
  )


  /* STORY */

  gsap.fromTo(
    '.about-description',
    {
      opacity: 0,
      x: -45,
      filter: 'blur(8px)',
    },
    {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',

      duration: 0.9,
      delay: 0.15,
      ease: 'power3.out',

      scrollTrigger: {
        trigger: '.about-content',
        start: 'top 78%',
        once: true,
      },
    }
  )


  /* MANAGEMENT */

  gsap.fromTo(
    '.profile-card',
    {
      opacity: 0,
      x: 45,
      scale: 0.96,
      filter: 'blur(6px)',
    },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',

      duration: 0.75,
      stagger: 0.15,
      delay: 0.2,
      ease: 'power3.out',

      scrollTrigger: {
        trigger: '.about-profiles',
        start: 'top 78%',
        once: true,
      },
    }
  )


  /* BADGES */

  gsap.fromTo(
    '.about-badge',
    {
      opacity: 0,
      y: 12,
      scale: 0.94,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,

      duration: 0.5,
      stagger: 0.1,
      delay: 0.35,
      ease: 'power3.out',

      scrollTrigger: {
        trigger: '.about-badges',
        start: 'top 84%',
        once: true,
      },
    }
  )


  /* REPUTATION */

  gsap.fromTo(
    '.about-reputation',
    {
      opacity: 0,
      y: 25,
      scale: 0.98,
      filter: 'blur(6px)',
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',

      duration: 0.8,
      delay: 0.15,
      ease: 'power3.out',

      scrollTrigger: {
        trigger: '.about-reputation',
        start: 'top 88%',
        once: true,
      },
    }
  )
}