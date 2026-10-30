import type { APIRoute } from 'astro';
import { faviconSvg } from '../lib/brand';

export const GET: APIRoute = async () =>
  new Response(await faviconSvg(), { headers: { 'Content-Type': 'image/svg+xml' } });
