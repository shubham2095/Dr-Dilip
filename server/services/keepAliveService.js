import siteUrl from "../utils/siteUrl.js";

// Some hosts (Hostinger's "lsnode") stop a Node app after 300 seconds without a request.
// Calling our own public address more often than that keeps the app running.
// It must be the public address: a localhost call does not pass through the host's web server.
const INTERVAL_MS = 4 * 60 * 1000;

// Runs on the live site only. Turn it off with KEEP_ALIVE=false.
function isEnabled() {
  return (
    process.env.NODE_ENV?.toLowerCase() === "production" &&
    Boolean(process.env.SITE_URL) &&
    process.env.KEEP_ALIVE?.toLowerCase() !== "false"
  );
}

export function startKeepAlive({ intervalMs = INTERVAL_MS } = {}) {
  if (!isEnabled()) return null;

  const url = `${siteUrl()}/api/health`;
  let failing = false;

  const ping = async () => {
    try {
      // The timestamp stops a CDN from answering with a cached copy.
      const res = await fetch(`${url}?keepalive=${Date.now()}`, { signal: AbortSignal.timeout(15000) });
      await res.arrayBuffer();
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      failing = false;
    } catch (err) {
      // Log the first failure only, so an outage does not flood the runtime logs.
      if (!failing) console.warn(`Keep-alive request to ${url} failed: ${err.message}`);
      failing = true;
    }
  };

  console.log(`Keep-alive on: requesting ${url} every ${Math.round(intervalMs / 1000)} seconds`);
  return setInterval(ping, intervalMs);
}
