require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const contactRouter = require('./routes/contact.js');
const registrationRouter = require('./routes/registration.js');
const buyRouter = require('./routes/buy.js');

let port = process.env.PORT || 5000;

app.use(cors({
    origin: "https://www.aichergipt.com", // Allow the frontend origin
    methods: ["POST", "GET", "OPTIONS"],  // Include OPTIONS method
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"], // Allow necessary headers
}));

app.use(express.json());

// Ensure that OPTIONS requests are handled properly
app.options("*", cors());

// Apply routers
app.use("/", contactRouter);
app.use("/", registrationRouter);
app.use("/", buyRouter);

app.get("/", (req, res) => {
    res.send("Welcome to Aichergipt");
});

app.listen(port, () => {
    console.log("Server is listening at the port", port);
});
