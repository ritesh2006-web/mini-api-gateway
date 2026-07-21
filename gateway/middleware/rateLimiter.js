import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
    windowMs: 60 * 1000, //1 minute
    max: 10, // limit each IP to 10 requests per windowMs
    message: {
        message: "Too many requests from this IP, please try again after a minute."
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})