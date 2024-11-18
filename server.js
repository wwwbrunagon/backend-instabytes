import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"))
routes(app)

app.listen(3000, () => {
    console.log("Hello, World!");
});

app.get("/api", (req, res) => {
    res.status(200).send("200 - OK")
})