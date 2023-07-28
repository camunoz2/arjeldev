import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  experimental:{
    viewTransitions: true
  },
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark-dimmed"
    }
  },
  integrations: [tailwind(), react(), mdx(), partytown()]
});