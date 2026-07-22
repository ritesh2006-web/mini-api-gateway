import rateLimit from 'express-rate-limit';
import {RedisStore} from 'rate-limit-redis';
import redisClient from '../config/redis.js';

export const rateLimiter = rateLimit({
    windowMs: 60 * 1000, //1 minute
    max: 5, // limit each IP to 5 requests per windowMs
    message: {
        message: "Too many requests from this IP, please try again after a minute."
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers

    store: new RedisStore({
        sendCommand: (...args) => redisClient.sendCommand(args),
    })
});