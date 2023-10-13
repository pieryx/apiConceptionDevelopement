const express =require ( 'express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>');
});

module.exports = router;

