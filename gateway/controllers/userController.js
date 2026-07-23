import breaker from "../circuitBreaker/userBreaker.js";

export async function getProfile(req, res) {
    try {
        const result = await breaker.fire();

        res.json(result);

    } catch (err) {

        res.status(503).json({
            message: "Service temporarily unavailable",
        });

    }
}