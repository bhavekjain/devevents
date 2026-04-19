<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the DevEvent Next.js App Router project. Here is a summary of all changes made:

- **`instrumentation-client.ts`** (created): Client-side PostHog initialization using Next.js 15.3+ instrumentation pattern. Configures a reverse proxy (`/ingest`), exception capture for error tracking, and debug mode in development.
- **`next.config.ts`** (updated): Added PostHog reverse proxy rewrites (`/ingest/static/*` and `/ingest/*`) and `skipTrailingSlashRedirect: true` to support PostHog ingestion through the app's own domain.
- **`.env.local`** (created): PostHog project token and host stored as environment variables (`NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`, `NEXT_PUBLIC_POSTHOG_HOST`). Covered by `.gitignore`.
- **`components/ExploreBtn.tsx`** (updated): Captures `explore_events_clicked` when the user clicks the "Explore Events" CTA button.
- **`components/EventCard.tsx`** (updated): Captures `event_card_clicked` with event title, slug, location, and date properties when a user clicks on a featured event card.
- **`components/Navbar.tsx`** (updated): Captures `nav_link_clicked` with a `label` property when a user clicks any navigation link.

## Events instrumented

| Event Name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicks the "Explore Events" button on the home page | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks on a featured event card to view its detail page | `components/EventCard.tsx` |
| `nav_link_clicked` | User clicks a navigation link in the top navbar | `components/Navbar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/388275/dashboard/1484797
- **Explore Events clicks over time** (line chart): https://us.posthog.com/project/388275/insights/LvO08DS1
- **Event card clicks over time** (line chart): https://us.posthog.com/project/388275/insights/dASIvWKg
- **Explore → Event Card conversion funnel**: https://us.posthog.com/project/388275/insights/OrPTPmSM
- **Most clicked events** (bar chart, by event title): https://us.posthog.com/project/388275/insights/LTdIJFng
- **Nav link clicks by label** (bar chart): https://us.posthog.com/project/388275/insights/i1XN7MeU

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
