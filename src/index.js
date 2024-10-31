const express = require("express");
const cors = require("./app/middlewares/cors");
require("express-async-errors");
const routes = require("./routes");
const errorHandler = require("./app/middlewares/errorHandler");

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
app.get("*", (req, res) => {
    if (!req.path.startsWith("/api")) {
        res.sendFile(path.join(__dirname, "public", "index.html")); // Certifique-se de que o caminho está correto
    }
});
app.use(errorHandler);

app.listen(3001, () => console.log("Server Started at http://localhost:3001"));
