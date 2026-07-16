import express from 'express';

const app = express();

const PORT = 4002;

app.get('/', (req, res) => {
    res.send('Product Service is running');
})

app.get("/product", (req, res) => {
    res.json([
        {
            id: 1,
            name: 'Laptop',
        },
        {
            id: 2,
            name: 'TV',
        }

    ])
})

app.get("/categories", (req, res) => {
    res.json(["Electronics", "Clothing", "Books"])
})

app.listen(PORT, () => {
    console.log(`Product Service is running on port ${PORT}`);
})
