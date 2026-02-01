class RoomOfferListing {
  images = []

  constructor(location, price, hasDeposit, owner) {
    this.type = 'ROOM'
    this.location = location
    this.price = price
    this.hasDeposit = hasDeposit
    // images list olarak oluştur.
    this.owner = owner
    this.isActive = true
  }

  closeListing(user) {
    if (user !== this.owner) {
      console.log(`${user.name}: Only owner can close this listing`)

      return
    }

    this.isActive = false
  }

  reOpenListing(user) {
    if (user !== this.owner) {
      console.log(`${user.name}: Only owner can reopen this listing`)
      return
    }

    this.isActive = true
  }
}

module.exports = RoomOfferListing
