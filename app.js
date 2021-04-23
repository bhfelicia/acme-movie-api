const express = require("express");
const {
  models: { Movie, Actor, Role },
} = require("./db");
const path = require("path");

const app = express();

app.use(express.json());

app.get("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "index.html"))
);

app.get("/api/movies", async (req, res, next) => {
  try {
    const movies = await Movie.findAll();
    res.send(movies);
  } catch (error) {
    next(error);
  }
});

app.get("/api/actors", async (req, res, next) => {
  try {
    const actors = await Actor.findAll();
    res.send(actors);
  } catch (error) {
    next(error);
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = app;
