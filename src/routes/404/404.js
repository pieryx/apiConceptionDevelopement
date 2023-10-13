const express =require ( 'express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.status(404).send('<h1>404 Error Oops</h1>');
});

module.exports = router;

