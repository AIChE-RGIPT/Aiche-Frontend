require('dotenv').config();

const express = require('express');
const cors = require('cors');
const contactRouter = require('./routes/contact.js');
const registrationRouter = require('./routes/registration.js');
const buyRouter = require('./routes/buy.js');

const app = express();
const port = process.env.PORT || 5000;

// CORS middleware
app.use(cors({
    origin: ["https://www.aichergipt.com"], 
    methods: ["POST", "GET", "OPTIONS"], // Include OPTIONS for preflight requests
    credentials: true
}));

app.use(express.json());

// Apply routers
app.use("/", contactRouter);
app.use("/", registrationRouter);
app.use("/", buyRouter);

app.get("/", (req, res) => {
    res.send("Welcome to Aichergipt");
});

// Start the server
app.listen(port, () => {
    console.log("Server is listening at port", port);
});
