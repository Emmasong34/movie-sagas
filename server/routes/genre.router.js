const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// router.get('/', (req, res) => {
//   // Add query to get all genres
//   res.sendStatus(500)
// });

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

module.exports = router;