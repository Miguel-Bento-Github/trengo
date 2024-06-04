import { nextTick } from "vue";
import type { RouterScrollBehavior } from "vue-router";
import {
  createRouter,
  createWebHistory,
  isNavigationFailure,
} from "vue-router";
import { routes } from "@/router/routes";

/**
 * Mimics native browser scroll behavior as much as possible by keeping the page position
 */
export const scrollBehavior: RouterScrollBehavior = (
  to,
  from,
  savedPosition
) => {
  return new Promise((resolve) => {
    if (savedPosition) {
      resolve(savedPosition);
    } else if (to.hash) {
      resolve({
        el: to.hash,
        behavior: "smooth",
      });
    } else {
      resolve({ top: 0 });
    }
  });
};

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
});

router.afterEach((to, from, failure) => {
  if (isNavigationFailure(failure)) return;

  /**
   * Updates page title on route change
   */
  nextTick(() => {
    if (typeof to.name === "string") {
      document.title = to.name;
    }
  });
});
