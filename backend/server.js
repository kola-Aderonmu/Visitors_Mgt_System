const express = require("express");
const morgan = require("morgan")
const mongoose = require('mongoose');
const connectDB = require("./config/db");




const app = express();


//MIDDLEWARE
app.use(express.json());
app.use(morgan('tiny'))



// ROUTES
app.get("/", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});

