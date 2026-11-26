import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import contactRoute from "./routes/contact.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("trust proxy", 1); // needed for correct req.ip behind Hostinger's proxy

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/contact", contactRoute);

// health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// --- Serve React build in production ---
if (process.env.NODE_ENV === "production") {
  const clientDistPath = path.join(__dirname, "dist");
  app.use(express.static(clientDistPath));

  app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(clientDistPath, "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});