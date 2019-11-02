const express = require("express");
const app = express();

// TODO include database and open connection

app.use(express.static("public"));

// TODO error handling middleware

// TODO POST sanitization

// TODO Error Endpoint

app.get("/", (req, res) => {
    res.sendFile("/index.html");
});

// TODO set PORT as a variable
app.listen(3000, () => {
    console.log("Listening on port 8080");
});
