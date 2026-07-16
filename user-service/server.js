import express from 'express'

const app = express();

const PORT = 4001;

app.get('/', (req, res) => {
    res.send('User Service is running');
})

app.get("/profile", (req, res) => {
    res.json({
        name: "Ritesh",
        role: "Admin",
    })
})
app.get("/admins", (req, res) => {
    res.json(
        ["Bob", "Alice", "John"]
    )
})


app.listen(PORT, () => {
    console.log(`User Service is running on port ${PORT}`);
})
