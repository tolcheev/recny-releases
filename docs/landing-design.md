# Recny Public Landing Design

Date: 2026-07-02

## Goal

Add a lightweight public entry point for Recny releases without introducing a backend, Telegram bot, mini app, analytics, or paid hosting.

The page should help testers do three things quickly:

- download the latest macOS build;
- see that Windows is an experimental beta;
- report install, recording, update, and playback bugs through GitHub Issues.

## Approach

Use GitHub Pages from the `recny-releases` repository root.

The static page reads `latest.json`, which is already the update manifest used by the apps. That keeps public downloads, in-app update prompts, and the landing page aligned around one source of truth.

## Scope

Included:

- `index.html` static landing page;
- local CSS and JavaScript assets;
- download cards for macOS and Windows;
- support links to GitHub Issues;
- brief local-first/privacy positioning;
- issue template improvements.

Not included:

- Telegram Mini App;
- Telegram bot;
- email capture;
- analytics;
- auto-updating installers;
- separate backend.

## UX Direction

The visual tone is utilitarian and desktop-native: quiet, compact, technical, and trustworthy. The first viewport should communicate the product name, latest macOS download, and local-first recording promise without a marketing-heavy hero.

## Release Flow

When a release is published:

1. Upload release artifacts to GitHub Releases.
2. Update `latest.json`.
3. The landing page automatically reflects the new versions after GitHub Pages serves the updated file.

## Validation

- Static HTML should open directly in a browser.
- JavaScript should tolerate manifest fetch failures and keep fallback download links visible.
- Issue forms should remain compatible with the app's existing `template=bug_report.yml` support link.
