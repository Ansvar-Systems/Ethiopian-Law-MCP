# Ethiopia Law MCP -- Coverage Report

Generated: 2026-02-27

## Source

| Field | Value |
|-------|-------|
| Portal | [lawethiopia.com](https://www.lawethiopia.com) |
| Authority | Ethiopian Legal Information Portal |
| Jurisdiction | Ethiopia (ET) |
| License | Government Open Data |
| Format | PDF (Federal Negarit Gazette, bilingual Amharic/English) |

## Census

| Metric | Count |
|--------|-------|
| Total laws enumerated | 555 |
| Ingestable (PDF available) | 385 |
| Successfully ingested | 371 |
| Inaccessible (404, no PDF) | 170 |
| Coverage rate (ingested/ingestable) | 96.4% |

## Database

| Metric | Count |
|--------|-------|
| Legal documents | 371 |
| Provisions (articles) | 8,137 |
| Definitions | 306 |
| EU/international references | 2 |
| Database size | 15.2 MB |

## Category Breakdown

The corpus covers Ethiopian federal legislation across all major legal domains:

- Administrative law (ministries, public administration)
- Banking and monetary system (NBE, insurance, microfinance, capital markets)
- Civil law (cooperatives, civil societies)
- Commercial law (trade, business licensing, investment)
- Constitutional law (Constitution of 1995, federalism)
- Criminal law (computer crime, anti-corruption, special offenses)
- Education and culture
- Election law
- Environmental and natural resources
- Health
- Human rights
- Industry and mining
- Intellectual property
- Labor law
- Land administration (urban and rural)
- Media law
- Public finance and tax (income tax, customs, VAT, excise)
- Public utilities (telecommunications, transportation)
- Science and technology
- Social affairs

## Content Quality

- Bilingual PDFs (Amharic + English) are processed with English text extraction
- Amharic-only PDFs are ingested with Amharic text content
- Scanned/image PDFs (no extractable text) are marked as inaccessible
- Article-level provision parsing identifies numbered articles (1., 2., etc.)
- Definition extraction from dedicated definition articles (Article 2 pattern)
- Proclamation dates not always available from PDF text (metadata sparse)

## Known Gaps

1. **Older proclamations (pre-2000)**: Some PDFs have corrupted font encoding, resulting in garbled Amharic text. English text is typically clean.
2. **404 PDFs**: 170 census entries reference PDFs that are no longer available on the server. These are primarily council of ministers regulations, directives, and older amendments.
3. **Scanned PDFs**: A small number of PDFs are scanned images without OCR text layers and cannot be extracted.
4. **Dates**: Issued/in-force dates are not consistently available from the PDF text structure. Most documents are listed as in-force by default.
5. **Regional legislation**: Only federal legislation is covered. Regional constitutions and laws are not included.

## Tools

8 core tools + 5 EU reference tools + 2 metadata tools:

1. `search_legislation` -- Full-text search across all provisions (FTS5/BM25)
2. `get_provision` -- Retrieve specific article from a proclamation
3. `validate_citation` -- Verify a legal citation exists in the database
4. `build_legal_stance` -- Cross-statute research on a legal topic
5. `format_citation` -- Format citations per Ethiopian conventions
6. `check_currency` -- Check if a proclamation is in force
7. `get_eu_basis` -- Get EU/international legal basis for a statute
8. `get_ethiopian_implementations` -- Find Ethiopian statutes aligned with EU law
9. `search_eu_implementations` -- Search EU documents with Ethiopian alignments
10. `get_provision_eu_basis` -- Provision-level EU basis check
11. `validate_eu_compliance` -- EU alignment status check
12. `list_sources` -- Data source metadata and statistics
13. `about` -- Server metadata and provenance
