# Dr. Dilip Hospital Website

Website for **Dr. Dilip Hospital**, a pediatric and neonatal hospital in Faridabad: services, facility, pathology and radiology, panel of doctors, TPA list, policy pages and a contact form that emails the hospital.

It is one Node.js app: an Express server that serves the API **and** the built React website. There is no database.

## Tech stack

- **Frontend:** React 19 (Vite), React Router, Tailwind CSS 4, Base UI components (shadcn style), Lucide icons
- **Backend:** Node.js, Express 5, Nodemailer (SMTP)
- **Security:** helmet, rate limiting, zod validation, HTML-escaped emails
- **Tooling:** ESLint, concurrently

## Folder structure

```
.
├── client/                    React website (Vite)
│   ├── public/                Static files (favicon logo)
│   ├── scripts/               optimize-images.mjs
│   └── src/
│       ├── App.jsx            Root component
│       ├── PublicSite.jsx     Layout + all routes
│       ├── assets/            Images
│       ├── components/        layout/ (Navbar, Footer, FloatingContact, ScrollToTop, ScrollProgressBar)
│       │                      common/ (Reveal, AnimatedCounter)
│       │                      ui/     (buttons, cards, inputs and other building blocks)
│       ├── pages/public/      One file per page
│       ├── services/          API helpers (api.js, contactService.js)
│       └── utils/             cn.js (class name helper)
├── server/
│   ├── server.js              Entry file
│   ├── routes/                index.js + one file per resource (contactRoutes.js)
│   ├── controllers/           Request handlers (contact, seo)
│   ├── middleware/            rateLimit, validate, errorHandler
│   ├── schemas/               zod schemas (contactSchema.js)
│   ├── services/              mailService.js, keepAliveService.js
│   └── utils/                 siteUrl.js
├── .env.example               Every environment variable, with comments
└── package.json               Backend dependencies and all scripts
```

## Requirements

- Node.js 22 or newer
- npm

## Run it locally

1. Install everything (the root install also installs and builds the client):

   ```bash
   npm install
   ```

2. Create your environment file: copy `.env.example` to `.env` (project root) and fill in the values.

   ```powershell
   Copy-Item .env.example .env
   ```

3. Start the website and the server together:

   ```bash
   npm run dev
   ```

   - Website: <http://localhost:5173> (if the port is busy, Vite prints the next free one)
   - API server: <http://localhost:5000> (restarts when you edit `server/`)

   Open the **website** address while developing. Vite forwards `/api` calls to the server, so the contact form works. Press `Ctrl+C` once to stop both.

   The server does not reload when only `.env` changes. Stop and start it again after editing that file.

### Commands

Run these from the project root.

| Command | What it does |
| --- | --- |
| `npm run dev` | Website and server together, with reload |
| `npm run dev:server` | Server only |
| `npm run dev --prefix client` | Website only |
| `npm run build` | Builds the website into `client/dist` |
| `npm start` | Runs the server (serves `client/dist` and the API) |
| `npm run lint` | Lints the client with ESLint |

To try the production setup locally: `npm run build`, then `npm start`, then open <http://localhost:5000>.

## Environment variables (`.env`)

| Variable | Required | Description |
| --- | --- | --- |
| `SMTP_HOST` | yes | Mail server address |
| `SMTP_PORT` | yes | Mail server port, usually `465` or `587` |
| `SMTP_SECURE` | yes | `true` for port 465, `false` for port 587 |
| `SMTP_USER` | yes | Mailbox that sends the emails |
| `SMTP_PASS` | yes | Password for that mailbox |
| `CLIENT_EMAIL` | yes | Inbox that receives contact form messages |
| `PORT` | no | Server port (default `5000`) |
| `SITE_URL` | on the live site | Public address of the site, used in `sitemap.xml`, `robots.txt` and keep-alive |
| `KEEP_ALIVE` | no | Set to `false` to turn keep-alive off |
| `NODE_ENV` | no | `production` on the live site |

`.env` is git-ignored. Never commit it.

If you change `PORT`, start development with a matching `API_PORT` environment variable so Vite forwards to the right place.

## API

| Route | Description |
| --- | --- |
| `GET /api/health` | Returns `{ "status": "ok" }` |
| `POST /api/contact` | Contact form: `{ name, email, message, phone? }` |
| `GET /sitemap.xml`, `GET /robots.txt` | Built from `SITE_URL` |

API errors are returned as `{ "success": false, "message": "..." }`.

The contact route validates input with zod, HTML-escapes everything before it goes into the email, ignores submissions that fill the hidden honeypot field, allows 3 requests per IP per minute (then `429`), and rejects bodies over 10 KB.

## Keep-alive

Hostinger stops an idle Node app after 300 seconds (`lsnode: no request in 300 seconds, exit.` in the runtime logs). To prevent this, the server requests `SITE_URL/api/health` every 4 minutes. It runs only when `NODE_ENV=production` and `SITE_URL` is set.

It cannot start a stopped app. After a deploy or a host restart, one visit is needed before it takes over. Check that your hosting plan allows keeping the app running this way.

## Adding a page

1. Create the page in `client/src/pages/public/`.
2. Add its route in `client/src/PublicSite.jsx`.
3. Add it to the sitemap list in `server/controllers/seoController.js`.
4. Link to it from the Navbar or Footer if needed.

## Deployment

1. Deploy the whole repository, with the project root as the application folder.
2. Set the environment variables on your host (`NODE_ENV=production`, `SITE_URL`, the `SMTP_*` values and `CLIENT_EMAIL`).
3. `npm install`
4. `npm run build`
5. `npm start` (entry file: `server/server.js`)

One Node process serves both the site and the API, so no extra web server is needed. The server expects one proxy in front of it (as on Hostinger) so that the rate limit applies per visitor.
