# gta6-clipper-01-entry

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/itzalisha99/gta6-clipper-01-entry/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/itzalisha99/gta6-clipper-01-entry/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical GTA 6 clip cut from Rockstar's official Launch Trailer: it opens cold on the trailer's biggest stunt — Lucia leaping from a speeding car onto a moving plane — then turns to the viewer and says they can make clips like this with AI and earn money on make.fun. Entered in make.fun's "Clip GTA 6 for the most YouTube views" bounty, where the 20 most-watched clips share $500.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## The clip

- **Source:** Rockstar Games' official "Grand Theft Auto VI Launch Trailer" (15 October 2026, 1:29, captured entirely in-game on PS5). I chose the Launch Trailer over Trailer 2 because it is the freshest official footage in launch week — the week everyone is searching for GTA 6 — and its climax is the densest action Rockstar has released.
- **Moment:** the climax run — Lucia leaping from a speeding car onto a moving plane's landing gear, the grenade launcher against the SWAT barricade, ending with Jason and Lucia jumping off a balcony holding hands. It opens on the stunt itself, no slow setup, so the first seconds hold a scroller.
- **Shape:** a vertical 9:16 Short, under 60 seconds. Fast cuts through the stunt, big on-screen captions, then the make.fun pitch as text on screen: "Make clips like this with AI and earn money on make.fun — make.fun/bounty/gta6-clipper-01".
- **YouTube:** published public as a Short. Its description carries the bounty's line word for word — "Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01" — plus the play code `makefun-plaza-tundra-spinner`. It stays public until the results are out (7 December 2026).

## What this program does

`main.ts` (Node 22, standard library only) reads `VIDEO.json` from the repository root, checks it names one YouTube video, and copies it to the output directory, where the gate reads it. The house reads the video's views itself through the YouTube Data API; nothing here is scored except the video's views at the deadline.

---

<sub>Entered on [make.fun](https://make.fun/?ref=y05d5qm6&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
