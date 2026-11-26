import rateLimit from "express-rate-limit";

function limiter({ windowMinutes, max, message }) {
  return rateLimit({
    windowMs: windowMinutes * 60 * 1000,
    limit: max,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    message: { success: false, message },
  });
}

// Max 3 contact requests per IP every minute.
export const contactLimiter = limiter({
  windowMinutes: 1,
  max: 3,
  message: "Too many requests. Please try again in a minute.",
});
