import CircuitBreaker from 'opossum';

async function callUserService(){

}

const breaker  =  new CircuitBreaker(callUserService,{
    timeout: 3000,
    errorThresholdPercentage:50,
    resetTimeout: 10000,
});

export default breaker;