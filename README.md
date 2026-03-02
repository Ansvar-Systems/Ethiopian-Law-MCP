# Ethiopian Law MCP Server

**The Ethiopian Legal Brief alternative for the AI age.**

[![npm version](https://badge.fury.io/js/@ansvar%2Fethiopian-law-mcp.svg)](https://www.npmjs.com/package/@ansvar/ethiopian-law-mcp)
[![MCP Registry](https://img.shields.io/badge/MCP-Registry-blue)](https://registry.modelcontextprotocol.io)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![GitHub stars](https://img.shields.io/github/stars/Ansvar-Systems/Ethiopian-Law-MCP?style=social)](https://github.com/Ansvar-Systems/Ethiopian-Law-MCP)
[![CI](https://github.com/Ansvar-Systems/Ethiopian-Law-MCP/actions/workflows/ci.yml/badge.svg)](https://github.com/Ansvar-Systems/Ethiopian-Law-MCP/actions/workflows/ci.yml)
[![Daily Data Check](https://github.com/Ansvar-Systems/Ethiopian-Law-MCP/actions/workflows/check-updates.yml/badge.svg)](https://github.com/Ansvar-Systems/Ethiopian-Law-MCP/actions/workflows/check-updates.yml)
[![Database](https://img.shields.io/badge/database-pre--built-green)](https://github.com/Ansvar-Systems/Ethiopian-Law-MCP)
[![Provisions](https://img.shields.io/badge/provisions-8%2C723-blue)](https://github.com/Ansvar-Systems/Ethiopian-Law-MCP)

Query **383 Ethiopian laws** -- from the Computer Crime Proclamation and the Criminal Code to the Investment Proclamation, Labour Proclamation, and more -- directly from Claude, Cursor, or any MCP-compatible client.

If you're building legal tech, compliance tools, or doing Ethiopian legal research, this is your verified reference database.

Built by [Ansvar Systems](https://ansvar.eu) -- Stockholm, Sweden

---

## Why This Exists

Ethiopian legal research means navigating ethiopianlegalbrief.com, lo.gov.et (Federal Negarit Gazeta), and scattered PDF publications. Whether you're:

- A **lawyer** validating citations in a brief or contract
- A **compliance officer** checking obligations under the Investment Proclamation or Data Protection framework
- A **legal tech developer** building tools on Ethiopian law
- A **researcher** tracing legislative provisions across federal proclamations

...you shouldn't need dozens of browser tabs and manual PDF cross-referencing. Ask Claude. Get the exact provision. With context.

This MCP server makes Ethiopian law **searchable, cross-referenceable, and AI-readable**.

---

## Quick Start

### Use Remotely (No Install Needed)

> Connect directly to the hosted version -- zero dependencies, nothing to install.

**Endpoint:** `https://ethiopian-law-mcp.vercel.app/mcp`

| Client | How to Connect |
|--------|---------------|
| **Claude.ai** | Settings > Connectors > Add Integration > paste URL |
| **Claude Code** | `claude mcp add ethiopian-law --transport http https://ethiopian-law-mcp.vercel.app/mcp` |
| **Claude Desktop** | Add to config (see below) |
| **GitHub Copilot** | Add to VS Code settings (see below) |

**Claude Desktop** -- add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "ethiopian-law": {
      "type": "url",
      "url": "https://ethiopian-law-mcp.vercel.app/mcp"
    }
  }
}
```

**GitHub Copilot** -- add to VS Code `settings.json`:

```json
{
  "github.copilot.chat.mcp.servers": {
    "ethiopian-law": {
      "type": "http",
      "url": "https://ethiopian-law-mcp.vercel.app/mcp"
    }
  }
}
```

### Use Locally (npm)

```bash
npx @ansvar/ethiopian-law-mcp
```

**Claude Desktop** -- add to `claude_desktop_config.json`:

**macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "ethiopian-law": {
      "command": "npx",
      "args": ["-y", "@ansvar/ethiopian-law-mcp"]
    }
  }
}
```

**Cursor / VS Code:**

```json
{
  "mcp.servers": {
    "ethiopian-law": {
      "command": "npx",
      "args": ["-y", "@ansvar/ethiopian-law-mcp"]
    }
  }
}
```

---

## Example Queries

Once connected, just ask naturally:

- *"What does the Computer Crime Proclamation say about cybercrime offences?"*
- *"Find provisions in the Criminal Code about corruption and bribery"*
- *"What are the requirements under the Investment Proclamation for foreign investors?"*
- *"Is Proclamation No. 1038/2017 still in force?"*
- *"Search for data protection provisions in Ethiopian law"*
- *"What does the Labour Proclamation say about termination of employment?"*
- *"Build a legal stance on intellectual property protection in Ethiopia"*
- *"Validate the citation 'Proclamation No. 810/2013'"*

**In Amharic (ኣማርኛ):**

- *"የኢትዮጵያ የሰራተኛ ህግ ምንድን ነው?"* (What is Ethiopian labour law?)
- *"የወንጀል ህጉ ስለ ሙስና ምን ይላል?"* (What does the Criminal Code say about corruption?)
- *"ስለ ኢንቨስትመንት አዋጅ ድንጋጌዎችን ፈልግ"* (Search for provisions in the Investment Proclamation)

---

## What's Included

| Category | Count | Details |
|----------|-------|---------|
| **Laws / Proclamations** | 383 | Federal proclamations, regulations, and directives |
| **Provisions** | 8,723 sections | Full-text searchable with FTS5 |
| **Legal Definitions** | Included | Extracted from proclamation texts |
| **Database Size** | ~17 MB | Optimized SQLite, portable |
| **Freshness Checks** | Automated | Monitoring against lawethiopia.com and lo.gov.et |

**Verified data only** -- every citation is validated against official sources (Federal Negarit Gazeta, lawethiopia.com). Zero LLM-generated content.

---

## Why This Works

**Verbatim Source Text (No LLM Processing):**
- All statute text is ingested from lawethiopia.com and the Federal Negarit Gazeta (lo.gov.et)
- Provisions are returned **unchanged** from SQLite FTS5 database rows
- Zero LLM summarization or paraphrasing -- the database contains proclamation text, not AI interpretations

**Smart Context Management:**
- Search returns ranked provisions with BM25 scoring (safe for context)
- Provision retrieval gives exact text by proclamation number and article
- Cross-references help navigate without loading everything at once

**Technical Architecture:**
```
lawethiopia.com / lo.gov.et --> Parse --> SQLite --> FTS5 snippet() --> MCP response
                                  ^                        ^
                           Provision parser         Verbatim database query
```

### Traditional Research vs. This MCP

| Traditional Approach | This MCP Server |
|---------------------|-----------------|
| Search lo.gov.et by proclamation number | Search by plain language: *"data protection consent"* |
| Navigate multi-article proclamations manually | Get the exact provision with context |
| Manual cross-referencing between laws | `build_legal_stance` aggregates across sources |
| "Is this proclamation still in force?" --> check manually | `check_currency` tool --> answer in seconds |
| Find international alignment --> dig through AU frameworks | `get_eu_basis` --> linked frameworks instantly |
| No API, no integration | MCP protocol --> AI-native |

**Traditional:** Search Negarit Gazeta --> Download PDF --> Ctrl+F --> Cross-reference proclamations --> Check amendments manually --> Repeat

**This MCP:** *"What does Proclamation No. 1037/2017 say about cybercrime and what are the penalties?"* --> Done.

---

## Available Tools (13)

### Core Legal Research Tools (8)

| Tool | Description |
|------|-------------|
| `search_legislation` | FTS5 full-text search across 8,723 provisions with BM25 ranking. Supports quoted phrases, boolean operators, prefix wildcards |
| `get_provision` | Retrieve specific provision by proclamation number and article (e.g., "Proc. No. 810/2013" + "Article 5") |
| `check_currency` | Check if a proclamation is in force, amended, or repealed |
| `validate_citation` | Validate citation against database -- zero-hallucination check. Supports "Proclamation No. 810/2013", "Art. 5 Proc. 1038/2017" |
| `build_legal_stance` | Aggregate citations from multiple proclamations for a legal topic |
| `format_citation` | Format citations per Ethiopian conventions (full/short/pinpoint) |
| `list_sources` | List all available laws with metadata, coverage scope, and data provenance |
| `about` | Server info, capabilities, dataset statistics, and coverage summary |

### International Law Integration Tools (5)

| Tool | Description |
|------|-------------|
| `get_eu_basis` | Get international frameworks (AU, IGAD, EAC observer) that an Ethiopian law aligns with |
| `get_ethiopian_implementations` | Find Ethiopian laws implementing a specific international framework or convention |
| `search_eu_implementations` | Search international documents with Ethiopian alignment counts |
| `get_provision_eu_basis` | Get international law references for a specific provision |
| `validate_eu_compliance` | Check alignment status of Ethiopian laws against international standards |

---

## International Law Alignment

Ethiopia is not an EU member state. Ethiopian law develops through its own constitutional and federal legislative framework, with international alignment through:

- **African Union (AU)** -- Malabo Convention on Cybersecurity and Personal Data Protection; AU frameworks on digital economy and data governance
- **IGAD** -- Regional integration framework for the Horn of Africa
- **EAC (observer)** -- East African Community regulatory alignment
- **UN Conventions** -- UNCAC (anti-corruption), UNTOC, and international human rights instruments

The international bridge tools allow you to explore these alignment relationships -- checking which Ethiopian provisions correspond to AU or UN requirements, and vice versa.

> **Note:** International cross-references reflect alignment and framework relationships, not direct transposition. Ethiopia develops its own legislative approach, and the alignment tools help identify where Ethiopian and international law address similar domains.

---

## Data Sources & Freshness

All content is sourced from authoritative Ethiopian legal databases:

- **[lawethiopia.com](https://lawethiopia.com/)** -- Comprehensive Ethiopian legislation database (primary source)
- **[Federal Negarit Gazeta](https://lo.gov.et/)** -- Official government gazette (lo.gov.et)

### Data Provenance

| Field | Value |
|-------|-------|
| **Authority** | Federal Democratic Republic of Ethiopia |
| **Primary source** | lawethiopia.com / Federal Negarit Gazeta (lo.gov.et) |
| **Languages** | English (primary legal language) and Amharic |
| **Coverage** | 383 federal proclamations, regulations, and directives |
| **Last ingested** | 2026-02-25 |

### Automated Freshness Checks

A [GitHub Actions workflow](.github/workflows/check-updates.yml) monitors data sources for changes:

| Check | Method |
|-------|--------|
| **Proclamation amendments** | Drift detection against known provision anchors |
| **New proclamations** | Comparison against source index |
| **Repealed instruments** | Status change detection |

**Verified data only** -- every citation is validated against official sources. Zero LLM-generated content.

---

## Security

This project uses multiple layers of automated security scanning:

| Scanner | What It Does | Schedule |
|---------|-------------|----------|
| **CodeQL** | Static analysis for security vulnerabilities | Weekly + PRs |
| **Semgrep** | SAST scanning (OWASP top 10, secrets, TypeScript) | Every push |
| **Gitleaks** | Secret detection across git history | Every push |
| **Trivy** | CVE scanning on filesystem and npm dependencies | Daily |
| **Socket.dev** | Supply chain attack detection | PRs |
| **Dependabot** | Automated dependency updates | Weekly |

See [SECURITY.md](SECURITY.md) for the full policy and vulnerability reporting.

---

## Important Disclaimers

### Legal Advice

> **THIS TOOL IS NOT LEGAL ADVICE**
>
> Statute text is sourced from lawethiopia.com and the Federal Negarit Gazeta. However:
> - This is a **research tool**, not a substitute for professional legal counsel
> - **Court case coverage is not included** -- do not rely solely on this for case law research
> - **Verify critical citations** against primary sources for court filings
> - **International cross-references** reflect alignment relationships, not direct transposition
> - **Amharic-language versions** -- where proclamations exist in both English and Amharic, verify the Amharic text against official Negarit Gazeta publications

**Before using professionally, read:** [DISCLAIMER.md](DISCLAIMER.md) | [SECURITY.md](SECURITY.md)

### Client Confidentiality

Queries go through the Claude API. For privileged or confidential matters, use on-premise deployment.

### Bar Association

For professional legal use in Ethiopia, consult guidance from the **Ethiopian Bar Association** and the **Ethiopian Lawyers Association** regarding professional obligations.

---

## Development

### Setup

```bash
git clone https://github.com/Ansvar-Systems/Ethiopian-Law-MCP
cd Ethiopian-Law-MCP
npm install
npm run build
npm test
```

### Running Locally

```bash
npm run dev                                       # Start MCP server
npx @anthropic/mcp-inspector node dist/index.js   # Test with MCP Inspector
```

### Data Management

```bash
npm run ingest              # Ingest laws from lawethiopia.com
npm run build:db            # Rebuild SQLite database
npm run drift:detect        # Run drift detection against anchors
npm run check-updates       # Check for amendments and new proclamations
npm run census              # Generate coverage census
```

### Performance

- **Search Speed:** <100ms for most FTS5 queries
- **Database Size:** ~17 MB (efficient, portable)
- **Reliability:** 100% ingestion success rate across 383 laws

---

## Related Projects: Complete Compliance Suite

This server is part of **Ansvar's Compliance Suite** -- MCP servers that work together for end-to-end compliance coverage:

### [@ansvar/eu-regulations-mcp](https://github.com/Ansvar-Systems/EU_compliance_MCP)
**Query 49 EU regulations directly from Claude** -- GDPR, AI Act, DORA, NIS2, MiFID II, eIDAS, and more. Full regulatory text with article-level search. `npx @ansvar/eu-regulations-mcp`

### [@ansvar/us-regulations-mcp](https://github.com/Ansvar-Systems/US_Compliance_MCP)
**Query US federal and state compliance laws** -- HIPAA, CCPA, SOX, GLBA, FERPA, and more. `npx @ansvar/us-regulations-mcp`

### [@ansvar/security-controls-mcp](https://github.com/Ansvar-Systems/security-controls-mcp)
**Query 261 security frameworks** -- ISO 27001, NIST CSF, SOC 2, CIS Controls, SCF, and more. `npx @ansvar/security-controls-mcp`

**70+ national law MCPs** covering Australia, Brazil, Canada, Denmark, France, Germany, Ghana, India, Ireland, Japan, Kenya, Malawi, Netherlands, Nigeria, Norway, Singapore, Sweden, Switzerland, UAE, UK, and more.

---

## Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

Priority areas:
- Amharic-language full-text provision ingestion
- Court case law expansion (Federal Supreme Court, Federal High Court)
- Historical proclamation versions and amendment tracking
- Regional state legislation coverage
- AU framework cross-reference expansion

---

## Roadmap

- [x] Core proclamation database with FTS5 search
- [x] Full corpus ingestion (383 laws, 8,723 provisions)
- [x] International law alignment tools
- [x] Vercel Streamable HTTP deployment
- [x] npm package publication
- [ ] Amharic-language provision text
- [ ] Court case law expansion
- [ ] Historical proclamation versions (amendment tracking)
- [ ] Regional state legislation
- [ ] AU Malabo Convention cross-references

---

## Citation

If you use this MCP server in academic research:

```bibtex
@software{ethiopian_law_mcp_2026,
  author = {Ansvar Systems AB},
  title = {Ethiopian Law MCP Server: AI-Powered Legal Research Tool},
  year = {2026},
  url = {https://github.com/Ansvar-Systems/Ethiopian-Law-MCP},
  note = {383 Ethiopian proclamations with 8,723 provisions sourced from lawethiopia.com and Federal Negarit Gazeta}
}
```

---

## License

Apache License 2.0. See [LICENSE](./LICENSE) for details.

### Data Licenses

- **Proclamations & Legislation:** Federal Democratic Republic of Ethiopia (public domain)
- **International Framework Metadata:** AU / UN (public domain)

---

## About Ansvar Systems

We build AI-accelerated compliance and legal research tools for the global market. This MCP server started as our internal reference tool -- turns out everyone building for the Ethiopian or East African market has the same research frustrations.

So we're open-sourcing it. Navigating 383 federal proclamations shouldn't require a law degree.

**[ansvar.eu](https://ansvar.eu)** -- Stockholm, Sweden

---

<p align="center">
  <sub>Built with care in Stockholm, Sweden</sub>
</p>
