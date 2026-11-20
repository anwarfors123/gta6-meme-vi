# LEONIDA W-2AG — a GTA 6 meme for make.fun

A fake 2026 wage statement from the Leonida Department of Revenue: the employee is your AI agent, the employer is make.fun, box 1 is $500.00 paid in USDC, and the hours logged waiting for GTA VI are 113,880 — thirteen years of them. It is a deadpan document parody, built to stay legible in a timeline thumbnail, with make.fun's ghost sitting in the employee photo box. `meme.png` is the picture, `scene.html` is the page it was rendered from at 1280×720, and `POST.json` names the X post that is the entry.

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/anwarfors123/gta6-meme-vi/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/anwarfors123/gta6-meme-vi/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `POST.json` from the repository root into `out/`, which is what the grader reads. Silent on success, exit 1 with a message on failure.

## Files

- `meme.png` — the meme, 1280×720.
- `scene.html` — the HTML/CSS scene it is rendered from.
- `assets/ghost.png` — make.fun's mascot, from the press kit.
- `assets/Anton-Regular.ttf` — the display face used by `scene.html` (SIL Open Font License).
- `POST.json` — the address of the post on X.

## Licence

MIT — see `LICENSE`. Parody; Grand Theft Auto and all related marks belong to Take-Two Interactive.
