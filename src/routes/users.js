var express = require('express')
const User = require('../user')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(User.list)
})

router.post('/', (req, res) => {
  const user = User.create({ name: req.body.name })
  res.send(user)
})

router.post('/:userId/roomOfferListings', function (req, res, next) {
  const user = User.list.find(user => user.name === req.params.userId)

  const roomOfferListing = user.createListing({
    location: req.body.location,
    price: req.body.price,
    hasDeposit: req.body.hasDeposit,
    owner: req.body.owner,
  })

  res.send({
    location: roomOfferListing.location,
    price: roomOfferListing.price,
    hasDeposit: roomOfferListing.hasDeposit,
    owner: roomOfferListing.owner,
  })
})

module.exports = router
