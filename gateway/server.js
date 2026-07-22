import express from 'express';
import {createProxyMiddleware} from 'http-proxy-middleware'
import {verifyToken} from './middleware/auth.js';
import {rateLimiter} from './middleware/rateLimiter.js';
import morgan from "morgan";
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(morgan('dev'));

const PORT = 3000;

app.get('/',(req,res)=>{
    res.send('API Gateway is running');
});

//user service
app.use(rateLimiter); //order matters, rateLimiter should be applied before verifyToken

app.get("/health",(req,res)=>{
    res.status(200).json({
        status:"UP",
        service:"API Gateway",
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    })
})

app.use('/user',verifyToken,
    createProxyMiddleware({
        target: process.env.USER_SERVICE_URL,
        changeOrigin : true,
        pathRewrite: {
            '^/user' : '',
        }
    })
);

//product service

app.use('/products',
    createProxyMiddleware({
        target: process.env.PRODUCT_SERVICE_URL,
        changeOrigin : true,
        pathRewrite: {
            '^/products' : '',
        }
    })
);


app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`);
});


