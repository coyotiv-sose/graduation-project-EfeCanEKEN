class RoomListing {
  constructor(location, price, hasDeposit, owner) {
    this.type = 'ROOM'
    this.location = location
    this.price = price
    this.hasDeposit = hasDeposit
    this.owner = owner
    this.isActive = true
  }

  closeListing(user) {
    // ileri de ayrı bir sınıf olarakta ayrılabilir?

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

module.exports = RoomListing
