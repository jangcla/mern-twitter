const express = require("express");
const app = express();


app.get("/", (rew, res) => {
    res.send("Hello John!")
})

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`listening on port ${port}`)})
