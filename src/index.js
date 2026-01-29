const User = require('./user')
const RoomListing = require('./roomListing')
const RoommateListing = require('./roommateListing')
const Chat = require('./chat')
const FavoriteManager = require('./favoriteManager')

const efe = new User('efe@mail.com', 25, 'Developer', 8000)
const ali = new User('ali@mail.com', 28, 'Designer', 7000)

const roomListing = new RoomListing('Ankara', 6000, true, efe)
const roommateListing = new RoommateListing('Ankara', 7000, ali)

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
