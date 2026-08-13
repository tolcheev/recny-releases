# Recny Releases

Public Recny test build artifacts, update manifest, GitHub Pages landing page, and bug-report forms.

## Public Page

GitHub Pages can serve the repository root:

`https://tolcheev.github.io/recny-releases/`

The landing page reads `latest.json` at runtime, so download buttons follow the same manifest used by the Recny app update checks.

## Update Manifest

`latest.json` is the source of truth for public test builds:

- `macos`: latest macOS DMG release.
- `windows`: latest Windows beta ZIP release.

After uploading artifacts to GitHub Releases, update `latest.json` on `main`.

## Support

Bug reports use `.github/ISSUE_TEMPLATE/bug_report.yml`.

The app opens:

`https://github.com/tolcheev/recny-releases/issues/new?template=bug_report.yml`

Keep this template name stable unless the app support link is updated too.
