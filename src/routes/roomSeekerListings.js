const express = require('express')
const RoomSeekerListing = require('../models/roomSeekerListing')

const router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(RoomSeekerListing.list)
})

module.exports = router
