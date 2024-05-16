const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const users = require("./routes/users");

const deliveryRoutes = require('./routes/deliveryRoutes');

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(cors());

//recieve json format data
app.use(express.json());


app.use("/public", express.static(__dirname + "/public"));

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose.connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

// Routes
app.use("/users", users);
app.use('/api/delivery', deliveryRoutes);


