# Gut Check

A daily ratio guessing game.

**Hook:** Trust your gut. Then watch it get humbled.

Players compare two things, choose which is bigger, then guess how many times bigger. The game scores how close their instinct was and generates a shareable result.

## Current Status

Prototype / MVP.

## Features

- Daily puzzle rotation
- Bigger-side selection
- Log-scale ratio slider from 1x to 1000x
- Scoring tiers
- Streak and played count saved locally
- Share result button
- Sound effects
- Simple animations
- Mobile-first layout

## Run Locally

Open `index.html` in a browser.

## GitHub Pages

You can publish this repo with GitHub Pages:

1. Go to repo Settings
2. Pages
3. Source: Deploy from branch
4. Branch: main
5. Folder: root
6. Save

## iPhone App

The iOS app is a [Capacitor](https://capacitorjs.com) wrapper around the same `index.html`, so the web game and the app share one codebase. The Xcode project lives in `ios/`.

You need a Mac with Xcode 16+ and Node 22+.

```sh
npm install
npm run ios:sync   # copies the game into www/ and syncs it into the Xcode project
npm run ios:open   # opens Xcode
```

In Xcode, pick your team under **Signing & Capabilities**, choose an iPhone or simulator, and press Run. Re-run `npm run ios:sync` after every change to `index.html`.

In the app:

- Sharing uses the native iOS share sheet, and taps/reveals give haptic feedback
- Google sign-in is hidden for now: Google blocks popup sign-in inside app web views, so it needs a native sign-in plugin (see roadmap). The leaderboard still loads.

Every push and PR builds the app for the iOS Simulator in GitHub Actions (`.github/workflows/ios.yml`).

## Roadmap

- More verified daily puzzles
- Firebase login
- Daily leaderboard
- Terms / Privacy page links
- PWA install support
- Native Google / Sign in with Apple in the iOS app
- App Store screenshots
