# Renew HTTPS Certificate — one-time setup

This workflow checks daily whether the GitHub Pages HTTPS certificate for
`thewealthswitch.com.br` is within 3 days of expiring, and if so, automatically
removes and re-adds the custom domain to force GitHub to re-issue it — the same
manual fix used on 2026-07-30 when the certificate got stuck mid-renewal.

## Why a secret is needed

The default `GITHUB_TOKEN` that Actions provides automatically does **not** have
permission to change repository Pages settings (custom domain, HTTPS enforcement).
That requires a token with **Administration** access, so this workflow needs a
Personal Access Token stored as a repository secret.

## One-time setup (do this once, then it just runs forever)

1. Go to https://github.com/settings/tokens?type=beta and click **"Generate new token"** (fine-grained).
2. Set **Resource owner**: your account. **Repository access**: "Only select repositories" → pick `the-wealth-switch`.
3. Under **Permissions → Repository permissions**, set:
   - **Administration**: Read and write
   - **Pages**: Read and write
4. Generate the token and copy it.
5. Go to `https://github.com/johnsudoski/the-wealth-switch/settings/secrets/actions` → **New repository secret**.
6. Name: `PAGES_ADMIN_TOKEN`. Value: paste the token. Save.

That's it — the workflow runs daily on its own from that point on, no further action needed.
Fine-grained tokens expire (you'll pick an expiration when creating it, e.g. 1 year) — set
a calendar reminder to regenerate it before that date, since a scheduled workflow can't renew
its own access token.
