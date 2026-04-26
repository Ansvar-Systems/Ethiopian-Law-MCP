# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] - 2026-04-26
### Removed (BREAKING)
- Entire prior data corpus and the ingestion pipeline that produced it. The
  MCP now ships an empty `data/database.db`; `search_legislation` returns
  zero results and `get_provision` returns not-found for any document id.
- `data/census.json`, `fixtures/golden-hashes.json`.
- `scripts/lib/parser.ts`, `scripts/lib/fetcher.ts`, `scripts/census.ts`,
  `scripts/check-updates.ts`, `scripts/drift-detect.ts`. The corresponding
  `npm run` aliases are removed from `package.json`.
- `COVERAGE.md` coverage tables (replaced with a quarantine note).
- `vercel.json`, `api/health.ts`, `api/mcp.ts` — Vercel coupling removed
  per platform deprecation policy.
- `@vercel/node` dev dependency removed; streamable-http transport entry
  removed from `server.json`.

### Changed
- `sources.yml` now declares an empty `sources: []` list and notes the
  quarantine.
- `scripts/ingest.ts` is a stub that exits non-zero with an explanation.
- `fixtures/golden-tests.json` now asserts the empty-corpus contract.
- README rewritten to reflect the quarantine state and Phase 4 backfill plan.
- Package description updated.

### Why
This release executes the Phase 2/3 data-layer scrub of the Red MCP Legal
Remediation program after the 2026-04-26 source-legitimacy audit. The
previous data sourced from lawethiopia.com (383 documents, 8,723 provisions)
was withdrawn; clean primary sources for Ethiopia (Negarit Gazette via
fdre.gov.et, AfricanLII Ethiopia) are under evaluation for backfill in a
future release.

## [1.1.0] - 2026-02-22
### Added
- `data/census.json` — full corpus census (555 laws, 383 ingestable)
- Streamable HTTP transport in `server.json` (public MCP endpoint)
- Keywords array in `server.json` for MCP Registry discoverability

### Changed
- Golden contract tests upgraded to full golden standard — boots real MCP
  server in-process via InMemoryTransport, verifies tool outputs against
  `golden-tests.json` fixture
- Network-dependent assertions (`upstream_text_hash`, `citation_resolves`)
  gated behind `CONTRACT_MODE=nightly` via `it.skipIf` guards
- `server.json` migrated to dual `packages` format (stdio + streamable-http)

## [1.0.0] - 2026-XX-XX
### Added
- Initial release of Ethiopia Law MCP
- `search_legislation` tool for full-text search across all Ethiopian statutes
- `get_provision` tool for retrieving specific articles/sections
- `get_provision_eu_basis` tool for international framework cross-references
- `validate_citation` tool for legal citation validation
- `check_statute_currency` tool for checking statute amendment status
- `list_laws` tool for browsing available legislation
- Contract tests with 12 golden test cases
- Drift detection with 6 stable provision anchors
- Health and version endpoints
- npm package with stdio transport
- MCP Registry publishing

[Unreleased]: https://github.com/Ansvar-Systems/Ethiopian-Law-MCP/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/Ansvar-Systems/Ethiopian-Law-MCP/compare/v1.1.0...v2.0.0
[1.1.0]: https://github.com/Ansvar-Systems/Ethiopian-Law-MCP/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/Ansvar-Systems/Ethiopian-Law-MCP/releases/tag/v1.0.0
