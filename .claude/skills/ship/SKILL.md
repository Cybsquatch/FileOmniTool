---
name: ship
description: Typecheck, build, commit, push to main (Vercel production deploy) and verify the change is live on fileomnitool.com. Use when the user says publish/pubblica/deploy/push, or after finishing a change they asked to put online.
---

# Ship FileOmniTool to production

Pushing `main` deploys to production. Only ship when the user asked for the change to go online in this conversation.

1. **Sync first.** Run `git fetch -q && git log --oneline main..origin/main`. If the freshness bot pushed commits, run `git pull --rebase origin main` before going on.
2. **Check, once per batch.** Run from `web/`:
   ```bash
   npx tsc --noEmit -p . && npm run build 2>&1 | grep -iE "error|failed|✓ Generating"
   ```
   Stop and fix anything other than the `✓ Generating static pages … (N/N)` line.
3. **Commit.** Stage only the files you changed; never `.claude/settings.json` or `graphify-out/cache/`. Use a conventional message (`fix(seo): …`, `feat(tools): …`) that says what changed and why, followed by the attribution line the session asks for.
4. **Push.** Run `git push origin main`. If it is rejected, go back to step 1. Never force-push.
5. **Verify live.** Pick a string that exists only in the new build (new text, a new route, a header value) and poll in the background for up to about 7 minutes:
   ```bash
   for i in $(seq 1 30); do curl -s "https://www.fileomnitool.com/<page>?cb=$RANDOM" | grep -q "<marker>" && { echo "LIVE after $((i*15))s"; break; }; sleep 15; done
   ```
   For headers use `curl -sI`. Client-only changes appear in the JS chunks: list the `_next/static/...js` URLs in the page HTML and grep those.
6. **Bot check.** If `web/src/lib/articles-*.ts` changed, wait about 30 seconds, then `git fetch`. A bot commit should only bump articles whose content really changed; if it bumped untouched ones, the hash script is broken.
7. **Refresh the graph.** Run `graphify update .` from the repo root (no API cost).
8. **Report** in one or two lines: the commit hash, live yes or no, and anything you could not verify, such as ad rendering, which only the owner can confirm.
