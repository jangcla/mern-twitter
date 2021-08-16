const express = require("express");
const app = express();
const mongoose = require("mongoose")
const db = require("./config/keys").mongoURI
const users = require("./routes/api/tweets")
const tweets = require("./routes/api/tweets")

mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log(err));

app.get("/", (rew, res) => {
    res.send("Hello John!")
})

app.use("/api/users", users)
app.use("/api/tweets", tweets)

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`listening on port ${port}`)})
