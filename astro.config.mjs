// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
// import node from "@astrojs/node";
import netlify from "@astrojs/netlify";
import clerk from "@clerk/astro";

// https://astro.build/config

export default defineConfig({
  site: "https://pepa.dev.br",
  integrations: [mdx(), sitemap(), clerk()],

  adapter: netlify(),
});
