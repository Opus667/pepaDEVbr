// @ts-check

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Remark
import remarkMdx from "remark-mdx";
import remarkDirective from "remark-directive";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkToc from "remark-toc";
import remarkEmoji from "remark-emoji";
import remarkGemoji from "remark-gemoji";
import remarkTextr from "remark-textr";
// import remarkTypograf from "@mavrin/remark-typograf";

// Rehype
import rehypeRaw from "rehype-raw";
import rehypeFormat from "rehype-format";

export default defineConfig({
  site: "https://pepa.dev.br",

  integrations: [
    mdx({
      remarkPlugins: [
        remarkMdx,
        remarkFrontmatter,
        remarkDirective,
        remarkGfm,
        remarkMath,
        remarkToc,
        [remarkEmoji, { emoticon: true }],
        remarkGemoji,
        remarkTextr,
        // remarkTypograf,
      ],
      rehypePlugins: [
        rehypeRaw, // Permite HTML dentro do MDX
        rehypeFormat, // Ajusta indentação/saída
      ],
    }),
    sitemap(),
  ],
});
