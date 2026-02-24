const axios = require('axios')

async function main() {
  await axios.get('http://localhost:3000/users').then(response => {
    console.log(response.data)
  })

  await axios
    .post('http://localhost:3000/users', {
      name: 'Efe',
    })
    .then(response => {
      console.log('User created:', response.data)
    })
    .catch(error => {
      console.error('Error creating user:', error)
    })

  await axios
    .post('http://localhost:3000/users', {
      name: 'Can',
    })
    .then(response => {
      console.log('User created:', response.data)
    })
    .catch(error => {
      console.error('Error creating user:', error.message)
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

  await axios
    .post('http://localhost:3000/users/Can/roomSeekerListings', {
      location: 'Istanbul',
      price: 4500,
      owner: 'Can',
    })
    .then(response => {
      console.log('CREATED ROOM SEEKER LISTING:', response.data)
    })
}

main()
