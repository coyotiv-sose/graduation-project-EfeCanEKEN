class FavoriteManager {
  constructor(user) {
    this.user = user;
  }

  add(listing) {
    this.user.favorites.push(listing);
  }

  list() {
    return this.user.favorites;
  }
}

module.exports = FavoriteManager;
