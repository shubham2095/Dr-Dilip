// SITE_URL is the public address of the website. A missing https:// and trailing slashes are fixed up.
export default function siteUrl() {
  const url = (process.env.SITE_URL || "http://localhost:5000").trim().replace(/\/+$/, "");
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}
