const express = require('express');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors());


app.use("", require("./routes/movies"));
app.use("/auth", require("./routes/auth"));


app.listen(8080, ()=>{
    console.log('listening on port 8080');
})