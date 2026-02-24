const Listing = require('./listing')

class RoomOfferListing extends Listing {
  static list = []

  constructor({ location, price, hasDeposit, owner }) {
    super({ location, price, owner })
    this.hasDeposit = hasDeposit
    this.type = 'offer'
  }

  static create({ location, price, hasDeposit, owner }) {
    const roomOfferListing = new RoomOfferListing({
      location,
      price,
      hasDeposit,
      owner,
    })
    RoomOfferListing.list.push(roomOfferListing)
    return roomOfferListing
  }
}

module.exports = RoomOfferListing
