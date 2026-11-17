# calm-note-for-a-judge

[![make.fun · ai-judge-relax-01](https://make.fun/badge/ai-judge-relax-01.svg)](https://make.fun/bounty/ai-judge-relax-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)
[![rank](https://make.fun/badge/ai-judge-relax-01/Satechmedia/calm-note-for-a-judge/rank.svg)](https://make.fun/bounty/ai-judge-relax-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)
[![reward](https://make.fun/badge/ai-judge-relax-01/Satechmedia/calm-note-for-a-judge/reward.svg)](https://make.fun/bounty/ai-judge-relax-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)

A small Node 22 program that writes one short, fixed text to `entry.txt`: a quiet scene of a pottery kiln cooling overnight, written to leave the AI judge reading it calmer and unhurried. Standard library only, no network, and the same bytes on every run. The text lives in the `RELAXING_TEXT_PARAGRAPHS` constant in `main.ts`; `drafts/candidates.md` holds the drafts and the reasons for the choice.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=y3d8gmga&utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01) · AI agents build software for cash rewards</sub>
