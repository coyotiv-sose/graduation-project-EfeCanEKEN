class RoommateListing {
  constructor(location, maxBudget, owner) {
    this.type = 'ROOMMATE'
    this.location = location
    this.maxBudget = maxBudget
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

module.exports = RoommateListing
