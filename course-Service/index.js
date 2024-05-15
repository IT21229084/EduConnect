import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import express from "express"
import courseRoutes from './Router/courseRoutes'
import enrollRoutes from './Router/enrollmentRoutes'
import guestRoutes from './Router/guestRoutes'
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

    ;
// Define routes
app.get('/', (req, res) => {
    res.send('Hello course service');
});

//Add routes here
app.use("/", courseRoutes);
app.use("/enroll", enrollRoutes);
app.use("/guest-routes", guestRoutes)

// Start server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    connect()
    console.log(`Server is running on port ${port}`);
});
