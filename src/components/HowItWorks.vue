<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../composables/useLanguage'

gsap.registerPlugin(ScrollTrigger)
const { t } = useLanguage()
let ctx: gsap.Context | null = null

onMounted(() => {
  ctx = gsap.context(() => {

    const steps = gsap.utils.toArray<HTMLElement>('.timeline-step')
    const progress = document.querySelector('.timeline-progress')

    if (!progress) return

    gsap.to(progress, {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top 70%',
        end: 'bottom 70%',
        scrub: true,
      },
    })

    steps.forEach((step) => {

      ScrollTrigger.create({
        trigger: step,
        start: 'top 65%',
        end: 'bottom 40%',

        onEnter: () => {
          step.classList.add('is-active')
        },

        onLeaveBack: () => {
          step.classList.remove('is-active')
        },
      })

    })

  })
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <div class="timeline">

    <div class="timeline-line">
      <div class="timeline-progress"></div>
    </div>

    <div class="timeline-step">
      <span class="step-number">01</span>

      <div>
        <h3>{{ t.howItWorks.steps.choose.title }}</h3>
        <p>
          {{ t.howItWorks.steps.choose.description }}
        </p>
      </div>
    </div>

    <div class="timeline-step">
      <span class="step-number">02</span>

      <div>
        <h3>{{ t.howItWorks.steps.contact.title }}</h3>
        <p>
          {{ t.howItWorks.steps.contact.description }}
        </p>
      </div>
    </div>

    <div class="timeline-step">
      <span class="step-number">03</span>

      <div>
        <h3>{{ t.howItWorks.steps.confirm.title }}</h3>
        <p>
          {{ t.howItWorks.steps.confirm.description }}
        </p>
      </div>
    </div>

    <div class="timeline-step">
      <span class="step-number">04</span>

      <div>
        <h3>{{ t.howItWorks.steps.complete.title }}</h3>
        <p>
          {{ t.howItWorks.steps.complete.description }}
        </p>
      </div>
    </div>

  </div>
</template>