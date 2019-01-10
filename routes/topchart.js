var express = require('express')
var router = express.Router()
const {TopChartController} = require('../controllers')

router.get("/", TopChartController.getTopTracks)
router.get("/:country", TopChartController.getTopTracksCountry)

module.exports = router