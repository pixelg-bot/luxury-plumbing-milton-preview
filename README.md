# Luxury Plumbing of Milton

A dependency-free, responsive, one-page business website. Serve this directory with any static web host. No build or application secrets are required.

## Local development

```sh
cd /workspace/WEB
python3 -m http.server 3000 --bind 0.0.0.0
```

Use the existing checkout; each cloud task is isolated and needs no additional Git worktree. Live processes must be started again in a new task.

## Content and assets

Business details and all three review quotations come from the supplied Google Maps information. Services reflect the supplied reviews. The architectural imagery is generated illustrative imagery, not a photograph of the business or its work. Font licenses are retained in `assets`.

`assets/hero.mp4` is an 8-second, 1920×1080, 24fps, silent H.264 loop made with periodic camera motion over the generated still. It is an interim motion asset. It does **not** satisfy the request for footage from a video-generation model: no video-generation capability was available. Replace it with a vetted model-generated seamless 1080p clip when that capability is connected; retain a matching poster frame.

Motion uses requestAnimationFrame, scroll interpolation, and translate3d across three different depths. Reduced-motion preference avoids loading the video, disables parallax, and uses the poster. The user can pause all decorative motion. Phone links use `tel:` and the address uses Google Maps directions.

## Deployment

Upload `index.html`, `styles.css`, `app.js`, and the full `assets` directory to an authorized static hosting project. Suggested project slug: `luxury-plumbing-milton`. No deployment provider credentials or connected deployment tool were available during implementation, so no public deployment has been performed or URL assigned.

After the actual public URL is assigned, add its canonical link and `og:url` to the document and make `og:image` absolute using that origin. Do not point those fields at the existing business website unless this site is actually deployed there. Verify the public page and video response, mobile navigation, phone/Maps destinations, reduced motion and parallax. Repeat the performance audit against the public URL.

## Verification

Chromium/Playwright exercised desktop and mobile rendering, video decode/playback, parallax transforms, pause controls, reduced-motion handling, font loading, and anchor destinations. Local checks are not evidence of public deployment.

Final local mobile Lighthouse scores: Performance 97, Accessibility 100, Best Practices 100, SEO 100. Largest Contentful Paint 2.3s, Total Blocking Time 0ms, Cumulative Layout Shift 0. Browser viewport checks passed at widths 320, 390, 700, 768, 1024, and 1440px. Mobile autoplay, muted playback, inline playback, looping across the end of the clip, and all three parallax depths were verified. These results are from the local Python server; public hosting has not been tested.
