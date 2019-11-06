const express = require("express");
const app = express();

const apiRoutes = require("./api/routes");
//const connection = require("./database/db");

// TODO include database and open connection

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/", apiRoutes);

// TODO error handling middleware

// TODO POST sanitization

// TODO Error Endpoint

app.get("/", (req, res) => {
    res.status(200).sendFile("/index.html");
});

// TODO set PORT as a variable
app.set("port", process.env.PORT || 8080);
app.listen(app.settings.port, () => {
    console.log(`Listening on port ${app.settings.port}`);
});
