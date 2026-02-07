var express = require('express')
const RoomOfferListing = require('../roomOfferListing')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(RoomOfferListing.list)
})

// router.post('/', (req, res) => {
//   // Creating a new user using the request data
//   // const user = new User(req.body.name)
//   const roomOfferListing = roomOfferListing.create({
//     location: req.body.location,
//     price: req.body.price,
//     hasDeposit: req.body.hasDeposit,
//     owner: req.body.owner,
//   })
//   res.send(roomOfferListing)
// })

module.exports = router
