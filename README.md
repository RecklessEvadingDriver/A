# MoviesMod API

A serverless API for searching and streaming movies & TV shows, deployable on Cloudflare Pages.

## Features

- 🔍 Search movies and TV shows by title
- 📺 Support for TV series with season/episode filtering
- 🎬 Multiple quality options (720p, 1080p, 2160p)
- 🚀 Serverless deployment on Cloudflare Pages
- 📄 JSON response format

## API Endpoint

```
GET /api/moviesmod
```

### Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `title` | Yes | Movie or TV show title to search for |
| `type` | No | `movie` or `tv` (defaults to "movie") |
| `season` | No | Season number for TV shows |
| `episode` | No | Episode number for TV shows |
| `year` | No | Release year to filter results |

### Examples

**Search for a movie:**
```
GET /api/moviesmod?title=Inception
```

**Search with year filter:**
```
GET /api/moviesmod?title=The%20Dark%20Knight&year=2008
```

**Search for a TV show episode:**
```
GET /api/moviesmod?title=Breaking%20Bad&type=tv&season=1&episode=1
```

### Response Format

```json
{
  "success": true,
  "title": "Matched title",
  "url": "Source page URL",
  "streams": [
    {
      "name": "Stream name",
      "title": "Full title",
      "url": "Direct stream URL",
      "quality": "1080p",
      "size": "1.5 GB",
      "headers": {
        "User-Agent": "...",
        "Referer": "..."
      },
      "provider": "moviesmod"
    }
  ]
}
```

### Error Response

```json
{
  "success": false,
  "error": "Error message",
  "streams": []
}
```

## Deployment to Cloudflare Pages

### Prerequisites

1. A Cloudflare account
2. Node.js 18+ installed

### Deploy via Cloudflare Dashboard

1. Fork or clone this repository
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Configure the build settings:
   - **Build command:** (leave empty)
   - **Build output directory:** `public`
6. Click "Save and Deploy"

### Deploy via Wrangler CLI

1. Install dependencies:
   ```bash
   npm install
   ```

2. Login to Cloudflare:
   ```bash
   npx wrangler login
   ```

3. Deploy:
   ```bash
   npx wrangler pages deploy ./public
   ```

### Local Development

Run the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:8788/api/moviesmod`

## Project Structure

```
├── functions/
│   └── api/
│       └── moviesmod.js    # API endpoint handler
├── public/
│   └── index.html          # API documentation page
├── package.json
├── moviesmod.js            # Original scraper (reference)
└── README.md
```

## License

MIT
