const RoomOfferListing = require('./roomOfferListing')

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

  createListing({ location, price, hasDeposit, owner }) {
    const listing = RoomOfferListing.create({ location, price, hasDeposit, owner })
    this.listings.push(listing)

    return listing
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
