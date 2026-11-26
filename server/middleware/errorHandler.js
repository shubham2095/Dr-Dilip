export function notFound(req, res) {
  res.status(404).json({ success: false, message: "Not found." });
}

// Central error handler: client errors (4xx, e.g. bad JSON or a too-large body) are returned as JSON,
// everything else is logged and hidden from the visitor.
export function errorHandler(err, req, res, next) {
  const status = err.status || err.statusCode || 500;

  if (status < 500) {
    return res.status(status).json({ success: false, message: err.message });
  }

  console.error("Unhandled error:", err);
  res.status(500).json({ success: false, message: "Something went wrong. Please try again later." });
}
