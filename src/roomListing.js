class RoomListing {
  constructor(location, price, hasDeposit, owner) {
    this.type = "ROOM";
    this.location = location;
    this.price = price;
    this.hasDeposit = hasDeposit;
    this.owner = owner;
    this.isActive = true;
  }

  closeListing() {
    this.isActive = false;
  }
}

module.exports = RoomListing;
