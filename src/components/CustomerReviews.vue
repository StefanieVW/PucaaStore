<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import { supabase } from '../lib/supabase'

const { t } = useLanguage()

/* ==================================================
   TYPES
================================================== */

interface Review {
  id: string
  name: string
  rating: number
  comment: string
  created_at: string
}


/* ==================================================
   STATE
================================================== */

const reviews = ref<Review[]>([])

const loading = ref(true)
const submitting = ref(false)

const isModalOpen = ref(false)

const reviewName = ref('')
const reviewMessage = ref('')
const selectedRating = ref(5)

const submitSuccess = ref(false)
const submitError = ref('')


/* ==================================================
   SLIDER
================================================== */

const hasMultipleReviews = computed(() =>
  reviews.value.length > 1
)

const sliderReviews = computed(() => {
  if (!hasMultipleReviews.value) {
    return reviews.value
  }

  return [
    ...reviews.value,
    ...reviews.value,
  ]
})


/* ==================================================
   MODAL
================================================== */

const openModal = () => {
  reviewName.value = ''
  reviewMessage.value = ''
  selectedRating.value = 5

  submitSuccess.value = false
  submitError.value = ''

  isModalOpen.value = true

  document.body.style.overflow = 'hidden'
}


const closeModal = () => {
  isModalOpen.value = false

  document.body.style.overflow = ''
}


/* ==================================================
   LOAD APPROVED REVIEWS
================================================== */

const loadReviews = async () => {
  loading.value = true

  const { data, error } = await supabase
    .from('reviews')
    .select('id, name, rating, comment, created_at')
    .eq('status', 'approved')
    .order('created_at', {
      ascending: false,
    })

  if (error) {
    console.error('Failed to load reviews:', error)

    loading.value = false
    return
  }

  reviews.value = data ?? []

  loading.value = false
}


/* ==================================================
   SUBMIT REVIEW
================================================== */

const submitReview = async () => {
  // Mencegah double submit
  if (submitting.value) return

  submitError.value = ''
  submitSuccess.value = false

  const name = reviewName.value.trim()
  const comment = reviewMessage.value.trim()

  if (!name || !comment) {
    return
  }

  submitting.value = true

  const { error } = await supabase
    .from('reviews')
    .insert({
      name,
      rating: selectedRating.value,
      comment,
      status: 'pending',
    })

  submitting.value = false

  if (error) {
    console.error('Review submit error:', error)

    submitError.value =
      t.value.reviews.form.error

    return
  }

  // Tampilkan success screen
  submitSuccess.value = true

  // Reset form
  reviewName.value = ''
  reviewMessage.value = ''
  selectedRating.value = 5
}


/* ==================================================
   DATE FORMATTER
================================================== */

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString(
    undefined,
    {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }
  )
}


/* ==================================================
   MOUNT
================================================== */

onMounted(() => {
  loadReviews()
})
</script>


<template>
  <section
    id="reviews"
    class="reviews-section"
  >

    <!-- ==========================================
         HEADER
    =========================================== -->

    <div class="reviews-heading reveal">

      <span class="eyebrow">
        {{ t.reviews.eyebrow }}
      </span>

      <h2>
        {{ t.reviews.titleBefore }}
        <span>
          {{ t.reviews.titleHighlight }}
        </span>
      </h2>

      <p>
        {{ t.reviews.description }}
      </p>

    </div>


    <!-- ==========================================
         LOADING
    =========================================== -->

    <div
      v-if="loading"
      class="reviews-loading"
    >
      Loading reviews...
    </div>


    <!-- ==========================================
         REVIEW SLIDER
    =========================================== -->

    <div
        v-else-if="reviews.length > 0"
        class="reviews-slider-wrapper"
        :class="{
            'single-review': !hasMultipleReviews
        }"
    >

        <div
            class="reviews-slider"
            :class="{
            'is-static': !hasMultipleReviews
            }"
        >

        <article
          v-for="(review, index) in sliderReviews"
          :key="`${review.id}-${index}`"
          class="review-card"
        >

          <!-- TOP -->

          <div class="review-card-top">

            <div
              class="review-stars"
              :aria-label="`${review.rating} out of 5 stars`"
            >

              <span
                v-for="star in 5"
                :key="star"
                :class="{
                  active: star <= review.rating
                }"
              >
                ★
              </span>

            </div>


            <span class="review-quote">
              “
            </span>

          </div>


          <!-- COMMENT -->

          <p class="review-text">
            “{{ review.comment }}”
          </p>


          <!-- AUTHOR -->

          <div class="review-author">

            <div class="review-avatar">
              {{ review.name.charAt(0).toUpperCase() }}
            </div>


            <div class="review-author-info">

              <strong>
                {{ review.name }}
              </strong>

              <span>
                {{ formatDate(review.created_at) }}
              </span>

            </div>


            <div class="verified-badge">

              <span class="verified-icon">
                ✓
              </span>

              {{ t.reviews.verified }}

            </div>

          </div>

        </article>

      </div>

    </div>


    <!-- ==========================================
         EMPTY STATE
    =========================================== -->

    <div
      v-else
      class="reviews-empty"
    >
      <div class="reviews-empty-stars">
        ★★★★★
      </div>

      <p>
        {{ t.reviews.empty }}
      </p>
    </div>


    <!-- ==========================================
         LEAVE REVIEW
    =========================================== -->

    <div class="reviews-action">

      <p>
        {{ t.reviews.question }}
      </p>


      <button
        class="review-button"
        type="button"
        @click="openModal"
      >

        <span class="review-button-icon">
          ＋
        </span>

        {{ t.reviews.button }}

      </button>

    </div>


    <!-- ==========================================
         MODAL
    =========================================== -->

    <Teleport to="body">

      <Transition name="review-modal">

        <div
          v-if="isModalOpen"
          class="review-modal-overlay"
          @click.self="closeModal"
        >

          <div class="review-modal">


            <!-- CLOSE -->

            <button
              class="review-modal-close"
              type="button"
              aria-label="Close"
              @click="closeModal"
            >
              ×
            </button>


            <!-- ==================================
                 SUCCESS SCREEN
            =================================== -->

            <div
              v-if="submitSuccess"
              class="review-success"
            >

              <div class="review-success-icon">
                ✓
              </div>

              <h3>
                {{ t.reviews.form.successTitle }}
              </h3>

              <p>
                {{ t.reviews.form.successDescription }}
              </p>

              <button
                type="button"
                class="review-submit"
                @click="closeModal"
              >
                {{ t.reviews.form.done }}
              </button>

            </div>


            <!-- ==================================
                 REVIEW FORM
            =================================== -->

            <template v-else>

              <div class="review-modal-heading">

                <span class="eyebrow">
                  {{ t.reviews.form.eyebrow }}
                </span>

                <h3>
                  {{ t.reviews.form.title }}
                </h3>

                <p>
                  {{ t.reviews.form.description }}
                </p>

              </div>


              <form @submit.prevent="submitReview">


                <!-- NAME -->

                <div class="review-field">

                  <label for="review-name">
                    {{ t.reviews.form.name }}
                  </label>

                  <input
                    id="review-name"
                    v-model.trim="reviewName"
                    type="text"
                    :placeholder="
                      t.reviews.form.namePlaceholder
                    "
                    maxlength="50"
                    autocomplete="name"
                    required
                  />

                </div>


                <!-- RATING -->

                <div class="review-field">

                  <label>
                    {{ t.reviews.form.rating }}
                  </label>

                  <div
                    class="rating-input"
                    role="radiogroup"
                    :aria-label="
                      t.reviews.form.rating
                    "
                  >

                    <button
                      v-for="star in 5"
                      :key="star"
                      type="button"
                      :class="{
                        active:
                          star <= selectedRating
                      }"
                      :aria-label="
                        `${star} star`
                      "
                      @click="
                        selectedRating = star
                      "
                    >
                      ★
                    </button>

                  </div>

                </div>


                <!-- REVIEW -->

                <div class="review-field">

                  <label for="review-message">
                    {{ t.reviews.form.review }}
                  </label>

                  <textarea
                    id="review-message"
                    v-model.trim="reviewMessage"
                    :placeholder="
                      t.reviews.form.reviewPlaceholder
                    "
                    maxlength="500"
                    rows="5"
                    required
                  ></textarea>

                  <span class="review-character-count">
                    {{ reviewMessage.length }}/500
                  </span>

                </div>


                <!-- ERROR -->

                <p
                  v-if="submitError"
                  class="review-error"
                >
                  {{ submitError }}
                </p>


                <!-- SUBMIT -->

                <button
                  type="submit"
                  class="review-submit"
                  :disabled="submitting"
                >

                  {{
                    submitting
                      ? t.reviews.form.submitting
                      : t.reviews.form.submit
                  }}

                </button>


                <!-- MODERATION NOTE -->

                <p class="review-moderation-note">
                  {{ t.reviews.form.moderation }}
                </p>

              </form>

            </template>

          </div>

        </div>

      </Transition>

    </Teleport>

  </section>
</template>