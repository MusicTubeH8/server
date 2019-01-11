var express = require('express');
var router = express.Router();
const youtubeController = require("../controllers/youtubeController")

router.get('/:q', youtubeController.list);

module.exports = router;