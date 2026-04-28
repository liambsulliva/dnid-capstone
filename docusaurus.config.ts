import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type { PrismTheme } from "prism-react-renderer";

const ayuLight: PrismTheme = {
  plain: {
    backgroundColor: "#fafafa",
    color: "#575f66",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "#adb6bf", fontStyle: "italic" },
    },
    {
      types: ["namespace"],
      style: { opacity: 0.7 },
    },
    {
      types: ["string", "attr-value"],
      style: { color: "#86b300" },
    },
    {
      types: ["punctuation", "operator"],
      style: { color: "#575f66" },
    },
    {
      types: [
        "entity",
        "url",
        "symbol",
        "number",
        "boolean",
        "variable",
        "constant",
        "property",
        "regex",
        "inserted",
      ],
      style: { color: "#f2ae49" },
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: { color: "#fa8d3e" },
    },
    {
      types: ["function", "deleted", "tag"],
      style: { color: "#55b4d4" },
    },
    {
      types: ["function-variable"],
      style: { color: "#f2ae49" },
    },
    {
      types: ["tag", "selector", "keyword"],
      style: { color: "#fa8d3e" },
    },
    {
      types: ["builtin", "class-name", "char"],
      style: { color: "#399ee6" },
    },
  ],
};

const ayuDark: PrismTheme = {
  plain: {
    backgroundColor: "#0a0e14",
    color: "#b3b1ad",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "#626a73", fontStyle: "italic" },
    },
    {
      types: ["namespace"],
      style: { opacity: 0.7 },
    },
    {
      types: ["string", "attr-value"],
      style: { color: "#c2d94c" },
    },
    {
      types: ["punctuation", "operator"],
      style: { color: "#b3b1ad" },
    },
    {
      types: [
        "entity",
        "url",
        "symbol",
        "number",
        "boolean",
        "variable",
        "constant",
        "property",
        "regex",
        "inserted",
      ],
      style: { color: "#e6b673" },
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: { color: "#ff8f40" },
    },
    {
      types: ["function", "deleted", "tag"],
      style: { color: "#ffb454" },
    },
    {
      types: ["function-variable"],
      style: { color: "#ffb454" },
    },
    {
      types: ["tag", "selector", "keyword"],
      style: { color: "#39bae6" },
    },
    {
      types: ["builtin", "class-name", "char"],
      style: { color: "#39bae6" },
    },
  ],
};

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "The Invisible Hand of UX",
  tagline: "A comprehensive glossary of example-driven UX design.",
  favicon: "img/favicon.ico",

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@100..800&family=Martian+Mono:wght@700&display=swap",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/webp",
        href: "/img/favicon-96x96.webp",
        sizes: "96x96",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "shortcut icon",
        href: "/favicon.ico",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/img/apple-touch-icon.webp",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    },
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://uxwiki.liambsullivan.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "liambsulliva", // Usually your GitHub org/user name.
  projectName: "dnid-capstone", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/liambsulliva/dnid-capstone/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/print-logo-bg.png",
    metadata: [
      { property: "og:site_name", content: "The Invisible Hand of UX" },
      {
        property: "og:description",
        content: "A comprehensive glossary of example-driven UX design.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      {
        property: "og:image:alt",
        content:
          "The Invisible Hand of UX — cartoon white glove pointing like a hand gun across a cyan background",
      },
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "The Invisible Hand of UX",
      logo: {
        alt: "The Invisible Hand of UX Logo",
        src: "img/favicon-96x96.webp",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "anchoringSidebar",
          position: "left",
          label: "Anchoring",
        },
        {
          type: "docSidebar",
          sidebarId: "attentionSidebar",
          position: "left",
          label: "Attention",
        },
        {
          type: "docSidebar",
          sidebarId: "behaviorSidebar",
          position: "left",
          label: "Behavior",
        },
        {
          type: "docSidebar",
          sidebarId: "coercionSidebar",
          position: "left",
          label: "Coercion",
        },
        {
          type: "docSidebar",
          sidebarId: "primingSidebar",
          position: "left",
          label: "Priming",
        },
        {
          href: "https://github.com/liambsulliva/dnid-capstone",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: null,
          className: "footer__brand-col",
          items: [
            {
              html: `<div class="footer__brand-heading"><img src="/img/favicon-96x96.webp" alt="The Invisible Hand of UX logo" width="32" height="32" decoding="async" loading="lazy" /><span>The Invisible Hand of UX</span></div>`,
            },
            {
              html: `<p class="footer__copyright">Copyright © ${new Date().getFullYear()} Liam Sullivan.</p>`,
            },
          ],
        },
        {
          title: "Docs",
          items: [
            {
              label: "Anchoring",
              to: "/docs/anchoring/highballing",
            },
            {
              label: "Attention",
              to: "/docs/attention/salience-bias",
            },
            {
              label: "Behavior",
              to: "/docs/behavior/AB-Testing",
            },
            {
              label: "Coercion",
              to: "/docs/coercion/confirmshaming",
            },
            {
              label: "Priming",
              to: "/docs/priming/curated-defaults",
            },
          ],
        },
        {
          title: "Links",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/liambsulliva/dnid-capstone",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/liambsulliva/",
            },
            {
              label: "Portfolio",
              href: "https://liambsullivan.com",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "About",
              to: "/about",
            },
            {
              label: "Attribution",
              to: "/attribution",
            },
          ],
        },
      ],
    },
    prism: {
      theme: ayuLight,
      darkTheme: ayuDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
