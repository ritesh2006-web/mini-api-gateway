import express from 'express';
import {createProxyMiddleware} from 'http-proxy-middleware'
import {verifyToken} from './middleware/auth.js';
import {rateLimiter} from './middleware/rateLimiter.js';
const app = express();

const PORT = 3000;

app.get('/',(req,res)=>{
    res.send('API Gateway is running');
});

//user service
app.use(rateLimiter); //order matters, rateLimiter should be applied before verifyToken

app.use('/user',verifyToken,
    createProxyMiddleware({
        target: 'http://localhost:4001',
        changeOrigin : true,
        pathRewrite: {
            '^/user' : '',
        }
    })
);

//product service

app.use('/products',
    createProxyMiddleware({
        target: 'http://localhost:4002',
        changeOrigin : true,
        pathRewrite: {
            '^/products' : '',
        }
    })
);


app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`);
});


