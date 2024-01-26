const express = require('express');
const movies = require('./movies.json');
const cors = require('cors');
const app = express();

 app.use(cors());


app.get("/movies/list", (req, res) =>{
  return res.send(movies);
})

app.get("/movies/:id", (req, res) =>{
  const id = req.params.id;
  const movie = movies.find(m => m.id === id);
  return res.send(movies);
})

app.listen(8080, ()=>{
    console.log('listening on port 8080');
})