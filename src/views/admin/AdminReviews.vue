<script setup lang="ts">
import {
  computed,
  onMounted,
  ref,
} from 'vue'

import { useRouter } from 'vue-router'

import { supabase } from '../../lib/supabase'

import '../../styles/admin-reviews.css'


/* ==================================================
   TYPES
================================================== */

type ReviewStatus =
  | 'pending'
  | 'approved'
  | 'rejected'

interface Review {
  id: string
  name: string
  rating: number
  comment: string
  status: ReviewStatus
  created_at: string
  reviewed_at: string | null
}

interface AdminProfile {
  user_id: string
  name: string
}


/* ==================================================
   STATE
================================================== */

const router = useRouter()

const reviews = ref<Review[]>([])

const adminProfile =
  ref<AdminProfile | null>(null)

const activeTab =
  ref<ReviewStatus>('pending')

const loading = ref(true)

const actionLoading =
  ref<string | null>(null)

const pageError = ref('')

const toastMessage = ref('')

const toastType =
  ref<'success' | 'error'>('success')

const rejectTarget =
  ref<Review | null>(null)

const showMobileMenu = ref(false)


/* ==================================================
   COUNTS
================================================== */

const pendingCount = computed(() =>
  reviews.value.filter(
    review =>
      review.status === 'pending'
  ).length
)

const approvedCount = computed(() =>
  reviews.value.filter(
    review =>
      review.status === 'approved'
  ).length
)

const rejectedCount = computed(() =>
  reviews.value.filter(
    review =>
      review.status === 'rejected'
  ).length
)


/* ==================================================
   FILTERED REVIEWS
================================================== */

const filteredReviews = computed(() =>
  reviews.value.filter(
    review =>
      review.status === activeTab.value
  )
)


/* ==================================================
   LOAD ADMIN
================================================== */

const loadAdmin = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    await router.replace({
      name: 'admin-login',
    })

    return false
  }

  const {
    data,
    error,
  } = await supabase
    .from('admin_users')
    .select('user_id, name')
    .eq('user_id', user.id)
    .maybeSingle()

  if (error || !data) {
    await supabase.auth.signOut()

    await router.replace({
      name: 'admin-login',
    })

    return false
  }

  adminProfile.value = data

  return true
}


/* ==================================================
   LOAD REVIEWS
================================================== */

const loadReviews = async () => {
  pageError.value = ''

  const {
    data,
    error,
  } = await supabase
    .from('reviews')
    .select(`
      id,
      name,
      rating,
      comment,
      status,
      created_at,
      reviewed_at
    `)
    .order('created_at', {
      ascending: false,
    })

  if (error) {
    console.error(
      'Failed to load reviews:',
      error
    )

    pageError.value =
      'Unable to load reviews. Please try again.'

    return
  }

  reviews.value =
    (data ?? []) as Review[]
}


/* ==================================================
   INITIAL LOAD
================================================== */

const initializeDashboard = async () => {
  loading.value = true

  const isAdmin = await loadAdmin()

  if (!isAdmin) {
    loading.value = false
    return
  }

  await loadReviews()

  loading.value = false
}


/* ==================================================
   TOAST
================================================== */

let toastTimer:
  ReturnType<typeof setTimeout> | null =
  null

const showToast = (
  message: string,
  type: 'success' | 'error' = 'success'
) => {
  toastMessage.value = message
  toastType.value = type

  if (toastTimer) {
    clearTimeout(toastTimer)
  }

  toastTimer = setTimeout(() => {
    toastMessage.value = ''
  }, 3000)
}


/* ==================================================
   APPROVE
================================================== */

const approveReview = async (
  review: Review
) => {
  if (actionLoading.value) return

  actionLoading.value = review.id

  const {
    error,
  } = await supabase
    .from('reviews')
    .update({
      status: 'approved',
      reviewed_at:
        new Date().toISOString(),
    })
    .eq('id', review.id)

  if (error) {
    console.error(
      'Approve review error:',
      error
    )

    showToast(
      'Failed to approve review.',
      'error'
    )

    actionLoading.value = null

    return
  }

  const target =
    reviews.value.find(
      item => item.id === review.id
    )

  if (target) {
    target.status = 'approved'
    target.reviewed_at =
      new Date().toISOString()
  }

  showToast(
    'Review approved successfully.'
  )

  actionLoading.value = null
}


/* ==================================================
   OPEN REJECT CONFIRMATION
================================================== */

const askReject = (
  review: Review
) => {
  rejectTarget.value = review

  document.body.style.overflow =
    'hidden'
}


/* ==================================================
   CLOSE REJECT CONFIRMATION
================================================== */

const closeReject = () => {
  if (actionLoading.value) return

  rejectTarget.value = null

  document.body.style.overflow = ''
}


/* ==================================================
   REJECT
================================================== */

const confirmReject = async () => {
  if (
    !rejectTarget.value ||
    actionLoading.value
  ) {
    return
  }

  const review =
    rejectTarget.value

  actionLoading.value = review.id

  const {
    error,
  } = await supabase
    .from('reviews')
    .update({
      status: 'rejected',
      reviewed_at:
        new Date().toISOString(),
    })
    .eq('id', review.id)

  if (error) {
    console.error(
      'Reject review error:',
      error
    )

    showToast(
      'Failed to reject review.',
      'error'
    )

    actionLoading.value = null

    return
  }

  const target =
    reviews.value.find(
      item => item.id === review.id
    )

  if (target) {
    target.status = 'rejected'
    target.reviewed_at =
      new Date().toISOString()
  }

  rejectTarget.value = null

  document.body.style.overflow = ''

  showToast(
    'Review rejected.'
  )

  actionLoading.value = null
}


/* ==================================================
   LOGOUT
================================================== */

const logout = async () => {
  await supabase.auth.signOut()

  await router.replace({
    name: 'admin-login',
  })
}


/* ==================================================
   HELPERS
================================================== */

const setTab = (
  status: ReviewStatus
) => {
  activeTab.value = status
}


const getInitial = (
  name: string
) => {
  return (
    name
      .trim()
      .charAt(0)
      .toUpperCase() || '?'
  )
}


const formatDate = (
  date: string
) => {
  return new Date(
    date
  ).toLocaleDateString(
    'en-US',
    {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }
  )
}


const tabCount = (
  status: ReviewStatus
) => {
  if (status === 'pending') {
    return pendingCount.value
  }

  if (status === 'approved') {
    return approvedCount.value
  }

  return rejectedCount.value
}


onMounted(() => {
  initializeDashboard()
})
</script>


<template>

  <div class="admin-dashboard">


    <!-- =========================================
         BACKGROUND
    ========================================== -->

    <div
      class="admin-dashboard-background"
      aria-hidden="true"
    >
      <div class="admin-dashboard-glow glow-one"></div>
      <div class="admin-dashboard-glow glow-two"></div>
      <div class="admin-dashboard-grid"></div>
    </div>


    <!-- =========================================
         HEADER
    ========================================== -->

    <header class="admin-header">

      <div class="admin-header-inner">


        <!-- BRAND -->

        <div class="admin-header-brand">

          <img
            src="/pucaalogo.png"
            alt="BGL Store"
            class="admin-header-logo"
          />

          <div class="admin-header-brand-text">

            <strong>
              BGL STORE
            </strong>

            <span>
              ADMIN PORTAL
            </span>

          </div>

        </div>


        <!-- DESKTOP USER -->

        <div class="admin-header-user">

          <div class="admin-user-info">

            <span>
              Administrator
            </span>

            <strong>
              {{
                adminProfile?.name
                  || 'Admin'
              }}
            </strong>

          </div>


          <div class="admin-user-avatar">
            {{
              getInitial(
                adminProfile?.name
                  || 'Admin'
              )
            }}
          </div>


          <button
            class="admin-logout-button"
            type="button"
            @click="logout"
          >

            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M10 5H5v14h5M14 8l4 4-4 4M18 12H9"
              />
            </svg>

            Logout

          </button>

        </div>


        <!-- MOBILE MENU -->

        <button
          class="admin-mobile-menu-button"
          type="button"
          aria-label="Open admin menu"
          @click="
            showMobileMenu =
              !showMobileMenu
          "
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </div>


      <!-- MOBILE DROPDOWN -->

      <Transition name="admin-mobile-menu">

        <div
          v-if="showMobileMenu"
          class="admin-mobile-menu"
        >

          <div class="admin-mobile-user">

            <div class="admin-user-avatar">
              {{
                getInitial(
                  adminProfile?.name
                    || 'Admin'
                )
              }}
            </div>

            <div>
              <span>
                Administrator
              </span>

              <strong>
                {{
                  adminProfile?.name
                    || 'Admin'
                }}
              </strong>
            </div>

          </div>

          <button
            type="button"
            @click="logout"
          >
            Logout
          </button>

        </div>

      </Transition>

    </header>


    <!-- =========================================
         MAIN
    ========================================== -->

    <main class="admin-main">

      <div class="admin-content">


        <!-- =========================================
             PAGE HEADING
        ========================================== -->

        <section class="admin-page-heading">

          <div>

            <span class="admin-page-eyebrow">
              CUSTOMER REVIEWS
            </span>

            <h1>
              Review Management
            </h1>

            <p>
              Review and moderate customer
              feedback before it appears on
              BGL Store.
            </p>

          </div>


          <button
            class="admin-refresh-button"
            type="button"
            :disabled="loading"
            @click="initializeDashboard"
          >

            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M20 11a8 8 0 1 0-2 5.3M20 5v6h-6"
              />
            </svg>

            Refresh

          </button>

        </section>


        <!-- =========================================
             LOADING
        ========================================== -->

        <div
          v-if="loading"
          class="admin-dashboard-loading"
        >

          <div class="admin-dashboard-spinner"></div>

          <strong>
            Loading dashboard
          </strong>

          <span>
            Fetching customer reviews...
          </span>

        </div>


        <!-- =========================================
             CONTENT
        ========================================== -->

        <template v-else>


          <!-- ERROR -->

          <div
            v-if="pageError"
            class="admin-page-error"
          >

            <span>!</span>

            <div>
              <strong>
                Something went wrong
              </strong>

              <p>
                {{ pageError }}
              </p>
            </div>

            <button
              type="button"
              @click="initializeDashboard"
            >
              Try Again
            </button>

          </div>


          <template v-else>


            <!-- =====================================
                 STATISTICS
            ====================================== -->

            <section class="admin-stats">


              <!-- PENDING -->

              <button
                class="admin-stat-card"
                :class="{
                  active:
                    activeTab === 'pending'
                }"
                type="button"
                @click="setTab('pending')"
              >

                <div
                  class="
                    admin-stat-icon
                    pending
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="8"
                    />

                    <path
                      d="M12 8v4l2.5 1.5"
                    />
                  </svg>
                </div>

                <div class="admin-stat-content">

                  <span>
                    Pending
                  </span>

                  <strong>
                    {{ pendingCount }}
                  </strong>

                  <small>
                    Awaiting review
                  </small>

                </div>

              </button>


              <!-- APPROVED -->

              <button
                class="admin-stat-card"
                :class="{
                  active:
                    activeTab === 'approved'
                }"
                type="button"
                @click="setTab('approved')"
              >

                <div
                  class="
                    admin-stat-icon
                    approved
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="8"
                    />

                    <path
                      d="m8.5 12 2.2 2.2 4.8-5"
                    />
                  </svg>
                </div>

                <div class="admin-stat-content">

                  <span>
                    Approved
                  </span>

                  <strong>
                    {{ approvedCount }}
                  </strong>

                  <small>
                    Published reviews
                  </small>

                </div>

              </button>


              <!-- REJECTED -->

              <button
                class="admin-stat-card"
                :class="{
                  active:
                    activeTab === 'rejected'
                }"
                type="button"
                @click="setTab('rejected')"
              >

                <div
                  class="
                    admin-stat-icon
                    rejected
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="8"
                    />

                    <path
                      d="m9 9 6 6M15 9l-6 6"
                    />
                  </svg>
                </div>

                <div class="admin-stat-content">

                  <span>
                    Rejected
                  </span>

                  <strong>
                    {{ rejectedCount }}
                  </strong>

                  <small>
                    Hidden reviews
                  </small>

                </div>

              </button>

            </section>


            <!-- =====================================
                 REVIEW PANEL
            ====================================== -->

            <section class="admin-review-panel">


              <!-- PANEL HEADER -->

              <div class="admin-review-panel-header">

                <div>

                  <h2>
                    Customer Reviews
                  </h2>

                  <p>
                    Manage submitted reviews
                    from your customers.
                  </p>

                </div>


                <div class="admin-total-reviews">

                  <span>
                    Total
                  </span>

                  <strong>
                    {{ reviews.length }}
                  </strong>

                </div>

              </div>


              <!-- ===================================
                   TABS
              ==================================== -->

              <div class="admin-review-tabs">

                <button
                  v-for="status in (
                    [
                      'pending',
                      'approved',
                      'rejected'
                    ] as ReviewStatus[]
                  )"
                  :key="status"
                  type="button"
                  :class="{
                    active:
                      activeTab === status
                  }"
                  @click="setTab(status)"
                >

                  <span>
                    {{
                      status
                        .charAt(0)
                        .toUpperCase()
                      + status.slice(1)
                    }}
                  </span>

                  <strong>
                    {{ tabCount(status) }}
                  </strong>

                </button>

              </div>


              <!-- ===================================
                   EMPTY
              ==================================== -->

              <div
                v-if="
                  filteredReviews.length === 0
                "
                class="admin-empty-state"
              >

                <div class="admin-empty-icon">

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 5h14v12H9l-4 3V5Z"
                    />

                    <path
                      d="M8 9h8M8 12h5"
                    />
                  </svg>

                </div>

                <h3>
                  No {{ activeTab }} reviews
                </h3>

                <p v-if="activeTab === 'pending'">
                  You're all caught up. New
                  customer reviews will appear
                  here for moderation.
                </p>

                <p
                  v-else-if="
                    activeTab === 'approved'
                  "
                >
                  Approved customer reviews
                  will appear here.
                </p>

                <p v-else>
                  Rejected customer reviews
                  will appear here.
                </p>

              </div>


              <!-- ===================================
                   REVIEW LIST
              ==================================== -->

              <div
                v-else
                class="admin-review-list"
              >

                <article
                  v-for="
                    review in filteredReviews
                  "
                  :key="review.id"
                  class="admin-review-card"
                >


                  <!-- TOP -->

                  <div class="admin-review-top">

                    <div class="admin-review-customer">

                      <div class="admin-review-avatar">
                        {{
                          getInitial(
                            review.name
                          )
                        }}
                      </div>

                      <div class="admin-review-customer-info">

                        <strong>
                          {{ review.name }}
                        </strong>

                        <span>
                          Submitted
                          {{
                            formatDate(
                              review.created_at
                            )
                          }}
                        </span>

                      </div>

                    </div>


                    <span
                      class="admin-status-badge"
                      :class="review.status"
                    >
                      <i></i>

                      {{ review.status }}
                    </span>

                  </div>


                  <!-- STARS -->

                  <div class="admin-review-stars">

                    <span
                      v-for="star in 5"
                      :key="star"
                      :class="{
                        active:
                          star <= review.rating
                      }"
                    >
                      ★
                    </span>

                    <small>
                      {{ review.rating }}/5
                    </small>

                  </div>


                  <!-- COMMENT -->

                  <p class="admin-review-comment">
                    “{{ review.comment }}”
                  </p>


                  <!-- FOOTER -->

                  <div class="admin-review-footer">

                    <div class="admin-review-date">

                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <rect
                          x="4"
                          y="5"
                          width="16"
                          height="15"
                          rx="2"
                        />

                        <path
                          d="M8 3v4M16 3v4M4 10h16"
                        />
                      </svg>

                      {{
                        formatDate(
                          review.created_at
                        )
                      }}

                    </div>


                    <!-- PENDING ACTIONS -->

                    <div
                      v-if="
                        review.status
                          === 'pending'
                      "
                      class="admin-review-actions"
                    >

                      <button
                        class="admin-reject-button"
                        type="button"
                        :disabled="
                          actionLoading
                            === review.id
                        "
                        @click="
                          askReject(review)
                        "
                      >
                        Reject
                      </button>


                      <button
                        class="admin-approve-button"
                        type="button"
                        :disabled="
                          actionLoading
                            === review.id
                        "
                        @click="
                          approveReview(review)
                        "
                      >

                        <span
                          v-if="
                            actionLoading
                              !== review.id
                          "
                        >
                          ✓ Approve
                        </span>

                        <span
                          v-else
                          class="
                            admin-action-loading
                          "
                        >
                          <i></i>
                          Approving...
                        </span>

                      </button>

                    </div>


                    <!-- ALREADY MODERATED -->

                    <div
                      v-else
                      class="admin-reviewed-info"
                    >

                      <span>
                        {{
                          review.status
                            === 'approved'
                            ? '✓ Published'
                            : '× Hidden'
                        }}
                      </span>

                      <small
                        v-if="
                          review.reviewed_at
                        "
                      >
                        {{
                          formatDate(
                            review.reviewed_at
                          )
                        }}
                      </small>

                    </div>

                  </div>

                </article>

              </div>

            </section>

          </template>

        </template>

      </div>

    </main>


    <!-- =========================================
         REJECT CONFIRMATION
    ========================================== -->

    <Teleport to="body">

      <Transition name="admin-confirm">

        <div
          v-if="rejectTarget"
          class="admin-confirm-overlay"
          @click.self="closeReject"
        >

          <div
            class="admin-confirm-modal"
            role="dialog"
            aria-modal="true"
          >

            <div class="admin-confirm-icon">
              !
            </div>

            <h3>
              Reject this review?
            </h3>

            <p>
              This review from
              <strong>
                {{ rejectTarget.name }}
              </strong>
              will be hidden from the public
              website.
            </p>


            <div class="admin-confirm-preview">

              <div>
                <span
                  v-for="star in 5"
                  :key="star"
                  :class="{
                    active:
                      star
                      <= rejectTarget.rating
                  }"
                >
                  ★
                </span>
              </div>

              <p>
                “{{ rejectTarget.comment }}”
              </p>

            </div>


            <div class="admin-confirm-actions">

              <button
                class="admin-confirm-cancel"
                type="button"
                :disabled="
                  actionLoading
                    === rejectTarget.id
                "
                @click="closeReject"
              >
                Cancel
              </button>


              <button
                class="admin-confirm-reject"
                type="button"
                :disabled="
                  actionLoading
                    === rejectTarget.id
                "
                @click="confirmReject"
              >

                <span
                  v-if="
                    actionLoading
                      !== rejectTarget.id
                  "
                >
                  Reject Review
                </span>

                <span
                  v-else
                  class="admin-action-loading"
                >
                  <i></i>
                  Rejecting...
                </span>

              </button>

            </div>

          </div>

        </div>

      </Transition>

    </Teleport>


    <!-- =========================================
         TOAST
    ========================================== -->

    <Teleport to="body">

      <Transition name="admin-toast">

        <div
          v-if="toastMessage"
          class="admin-toast"
          :class="toastType"
        >

          <span class="admin-toast-icon">
            {{
              toastType === 'success'
                ? '✓'
                : '!'
            }}
          </span>

          {{ toastMessage }}

        </div>

      </Transition>

    </Teleport>

  </div>

</template>