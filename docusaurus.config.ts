import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

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
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        href: "/favicon-96x96.png",
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
        href: "/apple-touch-icon.png",
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
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/liambsulliva/dnid-capstone/tree/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "The Invisible Hand of UX",
      logo: {
        alt: "The Invisible Hand of UX Logo",
        src: "img/favicon-96x96.png",
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
              html: `<div class="footer__brand-heading"><img src="/img/favicon-96x96.png" alt="The Invisible Hand of UX logo" width="32" height="32" decoding="async" loading="lazy" /><span>The Invisible Hand of UX</span></div>`,
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
              to: "/docs/Anchoring/highballing",
            },
            {
              label: "Attention",
              to: "/docs/Attention/salience-bias",
            },
            {
              label: "Behavior",
              to: "/docs/behavior/AB-Testing",
            },
            {
              label: "Coercion",
              to: "/docs/Coercion/confirmshaming",
            },
            {
              label: "Priming",
              to: "/docs/Priming/curated-defaults",
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
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
