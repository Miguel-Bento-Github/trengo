export const notFound = {
  path: "/:catchAll(.*)",
  component: () => import("@/views/NotFound.vue"),
  meta: {
    title: "404",
    metaTags: [
      {
        name: "description",
        content: "Page not found.",
      },
    ],
  },
};
