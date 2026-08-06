<script setup lang="ts">

defineProps<{
  number: string
  icon: 'buy' | 'sell' | 'global'
  title: string
  description: string
  action: string
}>()

</script>

<template>

  <article class="service-card">

    <div class="service-card-top">

      <span class="service-number">
        {{ number }}
      </span>

      <!-- BUY ICON -->
      <div
        v-if="icon === 'buy'"
        class="service-icon"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 4H5L7.4 15.2C7.6 16.1 8.4 16.7 9.3 16.7H17.4C18.2 16.7 18.9 16.2 19.2 15.5L21 9H6"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <circle
            cx="9.5"
            cy="20"
            r="1.2"
            fill="currentColor"
          />

          <circle
            cx="17"
            cy="20"
            r="1.2"
            fill="currentColor"
          />

          <path
            d="M12 6V11"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
          />

          <path
            d="M9.5 8.5L12 6L14.5 8.5"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>


      <!-- SELL ICON -->
      <div
        v-else-if="icon === 'sell'"
        class="service-icon"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2.5"
            stroke="currentColor"
            stroke-width="1.8"
          />

          <path
            d="M3 10H21"
            stroke="currentColor"
            stroke-width="1.8"
          />

          <path
            d="M12 14V7"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
          />

          <path
            d="M9.5 11.5L12 14L14.5 11.5"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>


      <!-- GLOBAL ICON -->
      <div
        v-else
        class="service-icon"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            stroke-width="1.8"
          />

          <path
            d="M3 12H21"
            stroke="currentColor"
            stroke-width="1.8"
          />

          <path
            d="M12 3C14.2 5.4 15.3 8.4 15.3 12C15.3 15.6 14.2 18.6 12 21"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
          />

          <path
            d="M12 3C9.8 5.4 8.7 8.4 8.7 12C8.7 15.6 9.8 18.6 12 21"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
          />
        </svg>
      </div>

    </div>


    <div class="service-card-content">

      <h3>
        {{ title }}
      </h3>

      <p>
        {{ description }}
      </p>

      <a
        href="#contact"
        class="service-link"
      >
        {{ action }}
        <span>→</span>
      </a>

    </div>

  </article>

</template>