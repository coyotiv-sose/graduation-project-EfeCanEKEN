const User = require('./user')
const RoomOfferListing = require('./roomOfferListing')
const RoomRequestListing = require('./roomRequestListing')
const Chat = require('./chat')
const FavoriteManager = require('./favoriteManager')

const efe = new User('efe', 'efe@mail.com', 25, 'Developer', 8000)
const ali = new User('ali', 'ali@mail.com', 28, 'Designer', 7000)

const roomListing = new RoomOfferListing('Ankara', 6000, true, efe)
const roommateListing = new RoomRequestListing('Ankara', 7000, ali)

efe.addListing(roomListing)
ali.addListing(roommateListing)

console.log('Efe listings:', efe.listings)
console.log('Ali listings:', ali.listings)

const favoriteManager = new FavoriteManager(efe)
favoriteManager.add(roomListing)

console.log('Efe favorites:', favoriteManager.list())

const chat = new Chat(efe, ali)
chat.sendMessage(ali, 'Is the room still available?')
chat.sendMessage(efe, 'Yes, it is.')

console.log('Chat messages:', chat.messages)

// Only owner can close this listing
roomListing.closeListing(ali)
console.log('Is active after Ali tries to close:', roomListing.isActive)
// it should be true

roomListing.closeListing(efe)
console.log('Is active after Efe closes:', roomListing.isActive)
// it should be false

roomListing.reOpenListing(ali)
console.log('Is active after Ali tries to reopen:', roomListing.isActive)
// it should be false

roomListing.reOpenListing(efe)
console.log('Is active after Efe reopens:', roomListing.isActive)
// it should be true
