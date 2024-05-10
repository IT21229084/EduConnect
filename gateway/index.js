import proxy from "express-http-proxy"
import dotenv from "dotenv";
import cors from "cors";
import express from "express"
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello gateway service');
});

app.use("/notification", proxy("http://localhost:4000"));
app.use("/payment", proxy("http://localhost:3003"));
app.use("/learn", proxy("http://localhost:3002"));
app.use("/course", proxy("http://localhost:3001"));
app.use("/auth", proxy("http://localhost:3000"));


app.listen(8000, () => {
  console.log("Gateway is Listening to Port 8000");
});
