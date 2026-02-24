class Listing {
  createdAt = new Date()

  isActive = true

  constructor({ location, price, owner }) {
    this.location = location
    this.price = price
    this.owner = owner
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

module.exports = Listing
