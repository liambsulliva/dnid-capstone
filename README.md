<div align="center" style="padding: 20px;">

![Banner](./static/img/banner-raster.png)

<div style="padding: 10px;">

![GitHub stars](https://img.shields.io/github/stars/liambsulliva/dnid-capstone)&nbsp;&nbsp;
![GitHub forks](https://img.shields.io/github/forks/liambsulliva/dnid-capstone)&nbsp;&nbsp;
![GitHub watchers](https://img.shields.io/github/watchers/liambsulliva/dnid-capstone)&nbsp;&nbsp;
![GitHub issues](https://img.shields.io/github/issues/liambsulliva/dnid-capstone)

</div>

</div>

# The Invisible Hand of UX

The Invisible Hand of UX is a Docusaurus site that tallies persuasive and manipulative interface patterns and explains them through short blurbs, relevant images, and interactive demos. It organizes examples categorically so readers can quickly understand how specific UX choices influence attention, behavior, decision-making, and autonomy.

## At a Glance

- TypeScript + React + Docusaurus documentation site
- Glossary-style content with interactive component demos (MDX)
- Category-based navigation via a header menu
- Built and deployed through GitHub Actions

## Main Categories

- [Attention](https://uxwiki.liambsullivan.com/docs/attention/introduction)
- [Behavior](https://uxwiki.liambsullivan.com/docs/behavior/introduction)
- [Coercion](https://uxwiki.liambsullivan.com/docs/coercion/introduction)
- [Priming](https://uxwiki.liambsullivan.com/docs/priming/introduction)
- [Anchoring](https://uxwiki.liambsullivan.com/docs/anchoring/introduction)

## Repository Structure

- `docs/`
  - Markdown and MDX-style docs for each pattern category
- `src/components/`
  - Interactive demo components embedded in docs pages
- `src/pages/`
  - Homepage and top-level site pages
- `static/`
  - Static assets (images, icons, manifest files)
- `docusaurus.config.ts`
  - Site metadata, navbar, docs/blog config, theme settings
- `sidebars.ts`
  - Auto-generated sidebar definitions per category

## Development

### To Run Locally

- Install dependencies:
  - `npm install`
- Start local dev server:
  - `npm start`
- Build production bundle:
  - `npm run build`
- Serve built output locally:
  - `npm run serve`
- Type-check TypeScript:
  - `npm run typecheck`

## Contributions

To propose a change:

- Click the "Edit this page" button at the bottom of the page you'd like to edit
- Click "Edit this page" in the top right corner of the markdown file
- Fork the repository and make your changes in a new branch
- Create a pull request for the main repository
- Wait for the pull request to be approved and merged
- View the changes live at [https://uxwiki.liambsullivan.com](https://uxwiki.liambsullivan.com)!
