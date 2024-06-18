export default defineAppConfig({
  myLayer: {
    name: "Portfolios layer",
  },
});

declare module "@nuxt/schema" {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string;
    };
  }
}
