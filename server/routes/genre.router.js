const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// router.get('/', (req, res) => {
//   // Add query to get all genres
//   res.sendStatus(500)
// });


//this gets the movies from the database to be displayed on the home page
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "movies"`
  pool.query(queryText)
  .then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('error in get request for movies display', error);
    res.sendStatus(500);
  })
})


//this gets the movie genres and details for the details page
router.get('/:id', (req, res) => {
  console.log(req.params.id);
  const queryText = `SELECT * FROM "movies"
  JOIN "movie_genre" ON "movie_genre"."movies_id" = "movies"."id"
  JOIN "genres" ON "movie_genre"."genre_id" = "genres"."id"
  WHERE "movies"."id"=${req.params.id};`
  pool.query(queryText)
  .then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('error in get request for movies display', error);
    res.sendStatus(500);
  })
})



module.exports = router;