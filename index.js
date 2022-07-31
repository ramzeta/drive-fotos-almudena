const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/", function (_req, res) {
    res.sendFile("index.html", {
        root: path.join(__dirname, "./pages"),
    });
});

app.get("/lol", function (_req, res) {
    res.sendFile("lol.html", {
        root: path.join(__dirname, "./pages"),
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Listen on the port 3000...");
});
