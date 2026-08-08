<script setup lang="ts">
import {
  ShieldCheck,
  BadgeCheck,
  Globe2,
  MessageCircle,
  ArrowUpRight
} from 'lucide-vue-next'

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
           MAIN CONTENT
      ========================== -->

      <div class="about-content">

        <!-- =========================
             STORY
        ========================== -->

        <div class="about-description">

          <p class="about-lead">
            {{ t.about.description }}
          </p>

          <p>
            {{ t.about.commitment }}
          </p>

          <div class="about-badges">
            <div class="about-badge">
              <Globe2 :size="15" />
              <span>{{ t.about.badges.worldwide }}</span>
            </div>

            <div class="about-badge">
              <ShieldCheck :size="15" />
              <span>{{ t.about.badges.trusted }}</span>
            </div>

            <div class="about-badge">
              <MessageCircle :size="15" />
              <span>{{ t.about.badges.support }}</span>
            </div>
          </div>

        </div>



        <!-- =========================
             MANAGEMENT
        ========================== -->

        <div class="about-profiles">

          <span class="management-label">
            {{ t.about.founder }}
          </span>


          <!-- VILEN -->

          <article class="profile-card">

            <div class="profile-main">

              <div class="profile-avatar">
                <img
                  src="/images/vilen.png"
                  alt="Vilencia Kurniawan"
                  loading="lazy"
                />
              </div>

              <div class="profile-info">

                <h3>
                  Vilencia Kurniawan
                </h3>

                <span class="profile-store">
                  {{ t.about.profiles.vilencia.store }}
                </span>

                <small>
                  {{ t.about.profiles.vilencia.role }}
                </small>

              </div>

              <BadgeCheck
                class="profile-check"
                :size="20"
              />

            </div>

            <p class="profile-description">
              {{ t.about.profiles.vilencia.description }}
            </p>

          </article>


          <!-- CINDY -->

          <article class="profile-card">

            <div class="profile-main">

              <div class="profile-avatar">
                <img
                  src="/images/cindy.png"
                  alt="Cindy Clarita"
                  loading="lazy"
                />
              </div>

              <div class="profile-info">

                <h3>
                  Cindy Clarita
                </h3>
                
                <span class="profile-store">
                  {{ t.about.profiles.cindy.store }}
                </span>

                <small>
                  {{ t.about.profiles.cindy.role }}
                </small>

              </div>

              <BadgeCheck
                class="profile-check"
                :size="20"
              />

            </div>

            <p class="profile-description">
              {{ t.about.profiles.cindy.description }}
            </p>

          </article>

        </div>

      </div>

      <!-- =========================
           REPUTATION
      ========================== -->

      <div class="about-reputation">

        <div class="reputation-icon">
          <ShieldCheck :size="21" />
        </div>

        <div class="reputation-content">

          <h3>
            {{ t.about.reputation.title }}
          </h3>

          <p>
            {{ t.about.reputation.description }}
          </p>

        </div>

        <ArrowUpRight
          class="reputation-arrow"
          :size="18"
        />

      </div>

    </div>

  </section>
</template>