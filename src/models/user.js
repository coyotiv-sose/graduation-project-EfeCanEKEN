const RoomOfferListing = require('./roomOfferListing')
const RoomSeekerListing = require('./roomSeekerListing')

class User {
  listings = []

  favorites = []

  constructor(name, email, age, job, budget) {
    this.name = name
    this.email = email
    this.age = age
    this.job = job
    this.budget = budget
  }

  createOfferListing({ location, price, hasDeposit, owner }) {
    const offer = RoomOfferListing.create({ location, price, hasDeposit, owner })
    this.listings.push(offer)

    return offer
  }

  createSeekerListing({ location, price, owner }) {
    const seeker = RoomSeekerListing.create({
      location,
      price,
      owner,
    })
    this.listings.push(seeker)
    return seeker
  }

  static create({ name }) {
    console.log('Creating a new user', name)
    const newUser = new User(name)

    User.list.push(newUser)
    return newUser
  }

  static list = []
}

module.exports = User
