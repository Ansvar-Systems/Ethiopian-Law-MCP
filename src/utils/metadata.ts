/**
 * Response metadata utilities for Ethiopia Law MCP.
 */

import type Database from '@ansvar/mcp-sqlite';

export interface ResponseMetadata {
  data_source: string;
  jurisdiction: string;
  disclaimer: string;
  freshness?: string;
  note?: string;
  query_strategy?: string;
}

export interface ToolResponse<T> {
  results: T;
  _metadata: ResponseMetadata;
}

export function generateResponseMetadata(
  db: InstanceType<typeof Database>,
): ResponseMetadata {
  let freshness: string | undefined;
  try {
    const row = db.prepare(
      "SELECT value FROM db_metadata WHERE key = 'built_at'"
    ).get() as { value: string } | undefined;
    if (row) freshness = row.value;
  } catch {
    // Ignore
  }

  return {
    data_source: 'Federal Negarit Gazette — Ethiopian Laws (chilot.me / negarit.net)',
    jurisdiction: 'ET',
    disclaimer:
      'This data is sourced from the Federal Negarit Gazette under Government Open Data principles. ' +
      'The authoritative versions are published in the Federal Negarit Gazette (Amharic and English). ' +
      'Always verify with the official portals: chilot.me or negarit.net.',
    freshness,
  };
}
