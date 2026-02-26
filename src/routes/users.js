const express = require('express')
const User = require('../models/user')

const router = express.Router()

/* GET users listing. */
router.get('/', async function (req, res, next) {
  res.send(await User.find())
})
// create a new user
router.post('/', async function (req, res, next) {
  const user = await User.create({ name: req.body.name })
  res.send(user)
})

// create a room offer listing for a user
router.post('/:userId/roomOfferListings', async function (req, res) {
  // const user = User.list.find(u => u.name === req.params.userId)
  const user = await User.findById(req.params.user)

  const roomOfferListing = await user.createOfferListing({
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

// create a room seeker listing for a user
router.post('/:userId/roomSeekerListings', function (req, res) {
  const user = User.list.find(u => u.name === req.params.userId)
  // if (!user) return res.status(404).json({ error: 'User not found' })

  const seekerListing = user.createSeekerListing({
    location: req.body.location,
    price: req.body.price,
    owner: req.body.owner,
  })

  res.send({
    location: seekerListing.location,
    price: seekerListing.price,
    owner: seekerListing.owner,
  })
})

module.exports = router
