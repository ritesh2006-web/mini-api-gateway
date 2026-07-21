import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const SECRET = process.env.JWT_SECRET_KEY;

    if (!authHeader) {
        return res.status(401).json({
            message: "Token missing",
        })
    }
    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, SECRET);
        console.log(decoded);

        next();
    }
    catch (err) {
        return res.status(401).json({
            message: "Invalid token",
        })
    }
}