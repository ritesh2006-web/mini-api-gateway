import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const mysecretkey = process.env.JWT_SECRET_KEY;

const token = jwt.sign(
    {
        userId: 1,
        name: "Ritesh"
    },
    mysecretkey,
    {
        expiresIn: "10s"
    }
);

console.log(token);