const express = require('express')
const RoomOfferListing = require('../models/roomOfferListing')

const router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(RoomOfferListing.list)
})

module.exports = router
