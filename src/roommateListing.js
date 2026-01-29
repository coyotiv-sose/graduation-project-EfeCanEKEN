class RoommateListing {
  constructor(location, maxBudget, owner) {
    this.type = 'ROOMMATE'
    this.location = location
    this.maxBudget = maxBudget
    this.owner = owner
    this.isActive = true
  }

  closeListing() {
    this.isActive = false
  }

  reOpenListing() {
    this.isActive = true
  }
}

module.exports = RoommateListing
