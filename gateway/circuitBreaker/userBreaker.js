import CircuitBreaker from 'opossum';
import axios from 'axios';

async function callUserService() {
    const response = await axios.get(`${process.env.USER_SERVICE_URL}/profile`);

    return response.data;
}

const breaker = new CircuitBreaker(callUserService, {
    timeout: 3000,
    errorThresholdPercentage: 50,
    resetTimeout: 10000,
});

breaker.on("open", () => {
    console.log("🔴 Circuit OPEN");
});

breaker.on("halfOpen", () => {
    console.log("🟡 Circuit HALF-OPEN");
});

breaker.on("close", () => {
    console.log("🟢 Circuit CLOSED");
});

breaker.fallback(() => {
    return {
        message: "User Service is unavailable",
    };
});

export default breaker;