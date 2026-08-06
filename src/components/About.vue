<script setup lang="ts">
import { ShieldCheck, Zap, BadgeCheck, MessageCircle } from 'lucide-vue-next'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <section
    id="about"
    class="about-section"
  >

    <div class="about-container">

      <!-- =========================
           HEADER
      ========================== -->

      <div class="about-heading">

        <span class="about-eyebrow">
          {{ t.about.eyebrow }}
        </span>

        <h2>
          {{ t.about.title }}
        </h2>

        <p class="about-subtitle">
          {{ t.about.subtitle }}
        </p>

      </div>


      <!-- =========================
           CONTENT
      ========================== -->

      <div class="about-content">

        <!-- LEFT -->

        <div class="about-description">

          <p>
            {{ t.about.description }}
          </p>

          <p>
            {{ t.about.commitment }}
          </p>


          <!-- SMALL TRUST MARKERS -->

          <div class="about-badges">

            <div class="about-badge">
              <ShieldCheck :size="16" />
              <span>{{ t.about.badges.secure }}</span>
            </div>

            <div class="about-badge">
              <Zap :size="16" />
              <span>{{ t.about.badges.fast }}</span>
            </div>

            <div class="about-badge">
              <MessageCircle :size="16" />
              <span>{{ t.about.badges.response }}</span>
            </div>

          </div>

        </div>


        <!-- RIGHT -->

        <div class="about-profiles">

          <!-- PROFILE 1 -->

          <article class="profile-card">

            <div class="profile-main">

              <div class="profile-avatar">
                VK
              </div>

              <div class="profile-info">
                <h3>
                  Vilencia Kurniawan
                </h3>

                <span>
                  {{ t.about.founder }}
                </span>
              </div>

              <BadgeCheck
                class="profile-check"
                :size="20"
              />

            </div>

            <div class="profile-badges">

              <span>
                ✓ {{ t.about.trustedSince }}
              </span>

              <span>
                ✓ {{ t.about.secureMarketplace }}
              </span>

            </div>

          </article>


          <!-- PROFILE 2 -->

          <article class="profile-card">

            <div class="profile-main">

              <div class="profile-avatar">
                CC
              </div>

              <div class="profile-info">

                <h3>
                  Cindy Clarita
                </h3>

                <small>
                  (Cindy Phan)
                </small>

                <span>
                  {{ t.about.founder }}
                </span>

              </div>

              <BadgeCheck
                class="profile-check"
                :size="20"
              />

            </div>

            <div class="profile-badges">

              <span>
                ✓ {{ t.about.transactions }}
              </span>

              <span>
                ✓ {{ t.about.fastResponse }}
              </span>

            </div>

          </article>

        </div>

      </div>

    </div>

  </section>
</template>