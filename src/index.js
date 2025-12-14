// Main Worker entry point for Cloudflare Workers
// This serves as a router for API requests and static assets

import { onRequest as moviesmodHandler } from '../functions/api/moviesmod.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Route API requests to the moviesmod handler
    if (url.pathname === '/api/moviesmod') {
      // Pass context object matching Cloudflare Pages Function signature
      return moviesmodHandler({ request, env, ctx });
    }
    
    // For all other requests, let the assets handler take over
    // This is handled automatically by the assets configuration in wrangler.json
    return env.ASSETS.fetch(request);
  }
};
