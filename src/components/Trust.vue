<script setup lang="ts">
import { onMounted } from 'vue'

import { useLanguage } from '../composables/useLanguage'
import { initTrustAnimations } from '../animations/trustAnimations'

const { t } = useLanguage()
onMounted(() => {
  initTrustAnimations()
})

</script>

<template>

    <section id="trust" class="section trust">

        <span class="trust-sparkle" aria-hidden="true"></span>

        <img
            src="/images/blue-cube.png"
            class="trust-cube"
            alt=""
            aria-hidden="true"
        />

        <div class="section-heading reveal">

            <span class="eyebrow">
            {{ t.trust.eyebrow }}
            </span>

            <h2>
            {{ t.trust.titleBefore }}
            <span>{{ t.trust.titleHighlight }}</span>
            </h2>

        </div>


        <div class="trust-panel reveal">

            <!-- INTERNATIONAL -->

            <div class="trust-feature">

            <div class="trust-icon">

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

            <div class="trust-feature-content">

                <span class="trust-label">
                01
                </span>

                <h3>
                {{ t.trust.international.title }}
                </h3>

                <p>
                {{ t.trust.international.description }}
                </p>

            </div>

            </div>


            <!-- 24/7 -->

            <div class="trust-feature">

            <div class="trust-icon">

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
                    d="M12 7V12L15.5 14"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />

                <path
                    d="M8 3.5L6.5 2"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                />

                <path
                    d="M16 3.5L17.5 2"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                />
                </svg>

            </div>

            <div class="trust-feature-content">

                <span class="trust-label">
                02
                </span>

                <h3>
                {{ t.trust.availability.title }}
                </h3>

                <p>
                {{ t.trust.availability.description }}
                </p>

            </div>

            </div>


            <!-- AFFORDABLE -->

            <div class="trust-feature">

            <div class="trust-icon">

                <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M12 3L14.1 8.3L20 8.8L15.5 12.6L16.9 18.3L12 15.2L7.1 18.3L8.5 12.6L4 8.8L9.9 8.3L12 3Z"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                </svg>

            </div>

            <div class="trust-feature-content">

                <span class="trust-label">
                03
                </span>

                <h3>
                {{ t.trust.affordable.title }}
                </h3>

                <p>
                {{ t.trust.affordable.description }}
                </p>

            </div>

            </div>


            <!-- SECURE -->

            <div class="trust-feature">

            <div class="trust-icon">

                <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M12 3L19 6V11.5C19 16.2 16.1 19.5 12 21C7.9 19.5 5 16.2 5 11.5V6L12 3Z"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linejoin="round"
                />

                <path
                    d="M8.8 12L11 14.2L15.5 9.7"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                </svg>

            </div>

            <div class="trust-feature-content">

                <span class="trust-label">
                04
                </span>

                <h3>
                {{ t.trust.secure.title }}
                </h3>

                <p>
                {{ t.trust.secure.description }}
                </p>

            </div>

            </div>

            <!-- ALWAYS IN STOCK -->

            <div class="trust-feature">

            <div class="trust-icon">

                <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M4 7.5L12 3L20 7.5V16.5L12 21L4 16.5V7.5Z"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linejoin="round"
                />

                <path
                    d="M4.5 7.5L12 12L19.5 7.5"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linejoin="round"
                />

                <path
                    d="M12 12V20.5"
                    stroke="currentColor"
                    stroke-width="1.8"
                />
                </svg>

            </div>

            <div class="trust-feature-content">

                <span class="trust-label">
                05
                </span>

                <h3>
                {{ t.trust.stock.title }}
                </h3>

                <p>
                {{ t.trust.stock.description }}
                </p>

            </div>

            </div>


            <!-- BULK BUYING -->

            <div class="trust-feature">

            <div class="trust-icon">

                <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M4 7H20"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                />

                <path
                    d="M6 7V19H18V7"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linejoin="round"
                />

                <path
                    d="M8 7L9.5 4H14.5L16 7"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />

                <path
                    d="M9 12H15"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                />

                <path
                    d="M12 9V15"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                />
                </svg>

            </div>

            <div class="trust-feature-content">

                <span class="trust-label">
                06
                </span>

                <h3>
                {{ t.trust.bulk.title }}
                </h3>

                <p>
                {{ t.trust.bulk.description }}
                </p>

            </div>

            </div>

        </div>

    </section>
    
</template>