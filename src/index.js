const User = require('./user')
const RoomOfferListing = require('./roomOfferListing')
const RoomRequestListing = require('./roomRequestListing')
const Chat = require('./chat')
const FavoriteManager = require('./favoriteManager')
const axios = require('axios')

async function main() {
  await axios.get('http://localhost:3000/users').then(response => {
    console.log(response.data)
  })

  await axios
    .post('http://localhost:3000/users', {
      name: 'Efe',
      hacked: true,
    })
    .then(response => {
      console.log('User created:', response.data)
    })
    .catch(error => {
      console.error('Error creating user:', error)
    })

  const allUsers = await axios.get('http://localhost:3000/users')

  const efesRoomOfferLing = await axios.post('http://localhost:3000/users/Efe/roomOfferListings', {
    location: 'Ankara',
    price: 6000,
    hasDeposit: true,
    owner: 'Efe',
  })

  console.log('List of all users', allUsers.data)

  console.log('CREATED ROOM OFFER LISTING:', efesRoomOfferLing.data)
}

main()

// const efe = new User('efe', 'efe@mail.com', 25, 'Developer', 8000)
// const ali = new User('ali', 'ali@mail.com', 28, 'Designer', 7000)

// const roomListing = new RoomOfferListing('Ankara', 6000, true, efe)
// const roommateListing = new RoomRequestListing('Ankara', 7000, ali)

// efe.addListing(roomListing)
// ali.addListing(roommateListing)

// console.log('Efe listings:', efe.listings)
// console.log('Ali listings:', ali.listings)

// const favoriteManager = new FavoriteManager(efe)
// favoriteManager.add(roomListing)

// console.log('Efe favorites:', favoriteManager.list())

// const chat = new Chat(efe, ali)
// chat.sendMessage(ali, 'Is the room still available?')
// chat.sendMessage(efe, 'Yes, it is.')

// console.log('Chat messages:', chat.messages)

// // Only owner can close this listing
// roomListing.closeListing(ali)
// console.log('Is active after Ali tries to close:', roomListing.isActive)
// // it should be true

// roomListing.closeListing(efe)
// console.log('Is active after Efe closes:', roomListing.isActive)
// // it should be false

// roomListing.reOpenListing(ali)
// console.log('Is active after Ali tries to reopen:', roomListing.isActive)
// // it should be false

// roomListing.reOpenListing(efe)
// console.log('Is active after Efe reopens:', roomListing.isActive)
// // it should be true
