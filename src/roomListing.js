class RoomListing {
  constructor(location, price, hasDeposit, owner) {
    this.type = 'ROOM'
    this.location = location
    this.price = price
    this.hasDeposit = hasDeposit
    this.owner = owner
    this.isActive = true
  }

  closeListing() {
    // ileri de ayrı bir sınıf olarakta ayrılabilir?
    this.isActive = false // İleri de user.owner == listing kontrolü yapılacak.
  }

  reOpenListing() {
    this.isActive = true
  }
}

module.exports = RoomListing
