import {
  createRouter,
  createWebHistory,
} from 'vue-router'

import { supabase } from '../lib/supabase'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/admin/login',
      name: 'admin-login',
      component: () =>
        import('../views/admin/AdminLogin.vue'),

      meta: {
        guestOnly: true,
      },
    },

    {
      path: '/admin/reviews',
      name: 'admin-reviews',
      component: () =>
        import('../views/admin/AdminReviews.vue'),

      meta: {
        requiresAdmin: true,
      },
    },
  ],

  scrollBehavior() {
    return {
      top: 0,
    }
  },
})


/* ==================================================
   ADMIN ROUTE GUARD
================================================== */

router.beforeEach(async (to) => {
  const {
    data: { session },
  } = await supabase.auth.getSession()

  /*
   * Halaman admin membutuhkan login.
   */
  if (to.meta.requiresAdmin) {
    if (!session) {
      return {
        name: 'admin-login',
      }
    }

    /*
     * Pastikan user yang login memang
     * terdaftar di tabel admin_users.
     */
    const { data: admin, error } = await supabase
      .from('admin_users')
      .select('user_id, name')
      .eq('user_id', session.user.id)
      .maybeSingle()

    if (error || !admin) {
      await supabase.auth.signOut()

      return {
        name: 'admin-login',
      }
    }
  }


  /*
   * Kalau Cindy sudah login dan mencoba
   * membuka /admin/login lagi,
   * arahkan ke dashboard.
   */
  if (to.meta.guestOnly && session) {
    const { data: admin } = await supabase
      .from('admin_users')
      .select('user_id')
      .eq('user_id', session.user.id)
      .maybeSingle()

    if (admin) {
      return {
        name: 'admin-reviews',
      }
    }
  }

  return true
})

export default router