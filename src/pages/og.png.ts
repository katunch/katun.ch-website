import type { APIRoute } from 'astro';
import { getDictionary } from '../i18n';
import { ogImage } from '../lib/brand';

export const GET: APIRoute = async ({ currentLocale }) =>
  new Response(new Uint8Array(await ogImage(getDictionary(currentLocale))), { headers: { 'Content-Type': 'image/png' } });
