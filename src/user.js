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

  addListing(listing) {
    this.listings.push(listing)
  }
}

module.exports = User
