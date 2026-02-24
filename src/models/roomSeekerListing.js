const Listing = require('./listing')

class RoomSeekerListing extends Listing {
  static list = []

  constructor({ location, price, owner }) {
    super({ location, price, owner })
    this.type = 'seeker'
  }

  static create({ location, price, owner }) {
    const seeker = new RoomSeekerListing({
      location,
      price,
      owner,
    })
    RoomSeekerListing.list.push(seeker)
    return seeker
  }
}

module.exports = RoomSeekerListing
