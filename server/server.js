import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import routes from "./routes/index.js";
import { getSitemap, getRobots } from "./controllers/seoController.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
import { startKeepAlive } from "./services/keepAliveService.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// One .env file at the project root, no matter which folder the command runs from.
dotenv.config({ path: path.join(__dirname, "..", ".env"), quiet: true });

const app = express();
const PORT = process.env.PORT || 5000;
const distPath = path.join(__dirname, "..", "client", "dist");

// Needed for the correct req.ip behind Hostinger's proxy (used by the rate limit).
app.set("trust proxy", 1);

app.use(
  helmet({
    // CSP is off for now: the site embeds Google Maps and uses inline styles.
    contentSecurityPolicy: false,
  }),
);
app.use(express.json({ limit: "10kb" }));

// API
app.use("/api", routes);
app.use("/api", notFound);

// SEO files built from SITE_URL (must come before the static files)
app.get("/sitemap.xml", getSitemap);
app.get("/robots.txt", getRobots);

// Built React app
app.use(express.static(distPath));

// SPA fallback: any other route gets index.html so React Router can handle it.
app.get(/^\/(?!api(?:\/|$)).*/, (req, res, next) => {
  res.sendFile(path.join(distPath, "index.html"), (err) => {
    if (err) next();
  });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  if (!fs.existsSync(path.join(distPath, "index.html"))) {
    console.warn("Warning: client/dist not found, so this port will not show the website. Run `npm run build` before `npm start`.");
  }

  const missing = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "CLIENT_EMAIL"].filter((key) => !process.env[key]);
  if (missing.length) {
    console.warn(`Warning: ${missing.join(", ")} not set. Contact form emails will fail.`);
  }

  if (process.env.NODE_ENV === "production" && !process.env.SITE_URL) {
    console.warn("Warning: SITE_URL is not set, so sitemap.xml and robots.txt point to localhost.");
  }

  startKeepAlive();
});
