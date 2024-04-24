import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import express from "express"
const app = express();
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connect to MongoDB")
    } catch (error) {
        throw error
        console.log(" Not connect to MongoDB")
    }
};

app.use(cors())
app.use(express.json())

// Define routes
app.get('/', (req, res) => {
    res.send('Hello Authentication');
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    connect()
    console.log(`Server is running on port ${port}`);
});
