<script setup lang="ts">
import {
  ShieldCheck,
  BadgeCheck,
  MessageCircle,
  Zap,
} from 'lucide-vue-next'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <section class="hero-stats-section">

    <div class="hero-stats-grid">

      <!-- CARD 01 -->
      <article class="hero-stat-card">

        <div class="hero-stat-icon">
          <ShieldCheck :size="23" :stroke-width="2" />
        </div>

        <div class="hero-stat-content">
          <strong>15K+</strong>

          <span class="hero-stat-title">
            {{ t.stats.transactions }}
          </span>
        </div>

      </article>


      <!-- CARD 02 -->
      <article class="hero-stat-card">

        <div class="hero-stat-icon">
          <BadgeCheck :size="23" :stroke-width="2" />
        </div>

        <div class="hero-stat-content">
          <strong>100%</strong>

          <span class="hero-stat-title">
            {{ t.stats.trusted }}
          </span>
        </div>

      </article>


      <!-- CARD 03 -->
      <article class="hero-stat-card">

        <div class="hero-stat-icon">
          <MessageCircle :size="23" :stroke-width="2" />
        </div>

        <div class="hero-stat-content">
          <strong>24/7</strong>

          <span class="hero-stat-title">
            {{ t.stats.support }}
          </span>
        </div>

      </article>


      <!-- CARD 04 -->
      <article class="hero-stat-card">

        <div class="hero-stat-icon">
          <Zap :size="23" :stroke-width="2" />
        </div>

        <div class="hero-stat-content">
          <strong>&lt;5 Min</strong>

          <span class="hero-stat-title">
            {{ t.stats.instant }}
          </span>
        </div>

      </article>

    </div>

  </section>
</template>