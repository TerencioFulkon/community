## Project Context

- **Purpose**: Deliver a calm, inclusive community space tailored for neurodivergent users.
- **Platforms**: Single Expo codebase (React Native + Web) served via Vercel for web and Expo for mobile.
- **Goals**: Maintain accessibility-first experiences, predictable performance, and contributor-friendly code.
- **Maintenance**: Keep documentation and tooling approachable so Terry can collaborate effectively without deep technical setup.

## Core Principles

- **Simplicity & Readability**: Favor clear, self-explanatory TypeScript over cleverness.
- **Consistency & Predictability**: Mirror patterns across mobile and web; align with project-wide styling and naming conventions.
- **Single-Responsibility Modularity**: Each file, function, and component owns one job; compose small pieces instead of growing monoliths.
- **Composable Reusability**: Build primitives that can be combined, especially for layout and state patterns.
- **Accessibility**: Design and engineer for WCAG AA by default; test with assistive tech on every feature.
- **Scalable Performance**: Optimize for responsive interaction, controlled resource usage, and measurable benchmarks.

## Folder Structure

```
/app
  /screens
  /components
  /layouts
  /lib
  /hooks
  /store
  /theme
  /navigation
  /types
/assets
```

- `/app/screens`: Feature-focused routes; one screen per file. Keep screens thin and delegate logic to hooks/lib.
- `/app/components`: Reusable UI primitives and composed widgets. Export via `index.ts`, no direct asset imports.
- `/app/layouts`: Shared wrappers that establish page structure and spacing.
- `/app/lib`: Utilities for data formatting, API helpers, and cross-cutting logic.
- `/app/hooks`: Custom hooks following single responsibility with co-located tests.
- `/app/store`: Zustand slices and related selectors/actions. Keep persistence logic isolated here.
- `/app/theme`: Gluestack theme configuration and typography/color tokens.
- `/app/navigation`: Navigation stacks, tabs, deep linking, and routing rules.
- `/app/types`: Shared TypeScript definitions and interfaces.
- `/assets`: Static images, fonts, and media with descriptive naming.
- **Rules**: Export modules via `index.ts`, forbid circular imports, keep one responsibility per file, and prefer absolute imports anchored at `app`.

## Coding Standards & File Size Limits

| Artifact      | Max Lines |
| ------------- | --------- |
| Component     | ≤300      |
| Hook          | ≤200      |
| Utility       | ≤150      |
| Function      | ≤40       |

- TypeScript everywhere; no `.js` files.
- ≤10 imports per file; consolidate shared exports.
- One default export plus ≤3 named exports per module.
- No inline styles or hard-coded colors; rely on Gluestack tokens.
- Naming: Components in `PascalCase`, hooks in `camelCase` starting with `use`, files in `kebab-case.ts(x)`, constants in `UPPER_SNAKE_CASE`.
- Use async/await consistently; avoid mixing with `.then`.

## Gluestack UI & Theme Rules

- Centralize tokens in `/app/theme/gluestack.config.ts`.
- Reference tokens only; never commit raw hex codes or pixel values inside components.

```tsx
<Box p="$4" bg="$backgroundLight0" rounded="$lg">
  <Text size="lg" color="$textLight0">Hello World</Text>
</Box>
```

- Define font sizing tokens:

```ts
fontSizes: {
  xs: 12, // labels, secondary info
  sm: 14, // captions, timestamps
  md: 16, // body text (minimum for readability)
  lg: 20, // headings
  xl: 24, // titles
}
```

| Text Type            | Example                      | Size   | Requirement                     |
| -------------------- | ---------------------------- | ------ | -------------------------------- |
| Body / Buttons       | Post content, form labels    | 16 px+ | Must meet WCAG AA               |
| Headings             | Section titles               | 20 px+ | Maintain clear hierarchy        |
| Captions / Metadata  | “2 m ago”, “Likes: 5”        | 14 px  | High contrast, ample spacing    |
| Footnotes / Legal    | Optional fine print          | 12–14 px | Not interactive, user-scalable |

- Minimum font size 16 px for interactive text.
- Ensure WCAG AA contrast tokens; verify with VoiceOver/TalkBack manually.
- Visual changes require a “UI Check” PR label plus before/after screenshots for web and mobile.

## Tooling & Enforcement

- ESLint + Prettier enforce style and correctness; lint errors block merges.
- Husky + lint-staged: `npx husky add .husky/pre-commit "npm run lint && npm run test"`.
- GitHub Actions CI runs lint, build, and test jobs on every push and PR.
- Auto-format via Prettier before merging; never bypass CI without maintainer approval.
- After dependency changes, reset the Expo web bundler with `npm run web -- --clear` before testing locally.

## Security

- Supabase Row-Level Security (RLS) must remain enabled; no direct table access without policies.
- Environment keys live only in `.env` files or secure platform secrets; never hard-code.
- Sanitize all inputs before calling Supabase or rendering.
- Rotate secrets quarterly and after any staffing change.
- User-generated uploads ≤5 MB, prefixed with user ID paths for traceability.
- Sample RLS policy:

```sql
create policy "Users can read their own posts"
on posts for select
using (auth.uid() = user_id);
```

## Performance Targets

| Metric             | Target                              |
| ------------------ | ----------------------------------- |
| API response       | ≤300 ms                             |
| Screen load        | ≤500 ms                             |
| Memory usage       | ≤150 MB on mid-range Android        |
| Pagination window  | 20–30 rows per request              |
| JS bundle size     | ≤1 MB (compressed)                  |

- Use `FlatList`/`SectionList` for large collections.
- Memoize heavy components with `React.memo` or `useMemo`.
- Lazy-load or defer images and heavy modules.
- Paginate Supabase queries; avoid fetching unbounded collections.

## Accessibility & UX

- Calm, low-stimulation visuals with spacing in multiples of 4.
- Interactive touch targets ≥44×44 px; maintain consistent focus states.
- Reuse the font sizing rules above; avoid shrinking text for layout.
- Validate web builds with axe DevTools or Lighthouse; run VoiceOver/TalkBack on new screens.
- Provide descriptive alt text, aria labels, and announce dynamic updates.

## Git & Branch Workflow

| Branch    | Purpose                                  |
| --------- | ---------------------------------------- |
| `main`    | Production-ready deployments             |
| `dev`     | Integration of approved features         |
| `feat/*`  | New features or experiments              |
| `fix/*`   | Bug fixes                                |
| `chore/*` | Tooling, maintenance, or documentation   |

- Commit format: `type(scope): message`
  - Examples: `feat(profile): add mood tracker`, `fix(auth): handle token refresh`, `chore(ci): update lint workflow`.
- Commit messages are imperative and descriptive.
- Rebase on `dev` before merging; only `main` deploys to production.

## Exception Process

- Temporary rule exceptions require a PR comment detailing the rationale, a `tech-debt` label, and creation of a Refactor Backlog issue.
- Maintainer approval is required before merging any exception.
- Track deadlines to remove exceptions within the next two sprints.

## Deployment

- Web deploys via Vercel; configure `.env` keys in Vercel dashboard.
- Expo EAS handles mobile builds when ready; keep secrets in Expo config.
- Ensure a 404 fallback route for web.
- Only `main` triggers production deploys; `dev` can deploy to staging previews.

## Testing & QA

- Required commands before merge: `npm run lint`, `npm run test`, `npm run web`.
- Manual QA checklist:
  - Works on both web and mobile.
  - No console or native warnings.
  - Handles slow and offline network states gracefully.
  - Meets accessibility and performance targets above.

## Security Playbook

- Rotate all secrets every three months.
- Schema migration PRs must include RLS impact review.
- Never log PII or auth tokens; redact sensitive data by default.
- Incident response: immediately revoke Supabase keys, assess scope, notify users, and document remediation steps.
- Quarterly audit of Supabase buckets, roles, and service accounts.

## Developer Philosophy

- “Build modular, accessible, and understandable systems. Good code reads like a story, not a puzzle.”
- Comment to explain intent (`why`), not to narrate code (`what`).
- Refactor before adding complexity; keep functions and components small.
- Every unit (component, hook, utility) should stand alone with clear inputs/outputs.
- Treat the Gluestack theme as the source of truth for design decisions.


