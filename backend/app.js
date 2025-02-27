const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db"); // Ensure correct function name

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is undefined

// Middlewares
app.use(express.json());
app.use(cors());

const server = async () => {
  await connectDB(); // Call the async function properly
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port: ${PORT}`);
  });
};

server();
