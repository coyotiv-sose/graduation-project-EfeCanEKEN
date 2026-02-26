const axios = require('axios')

axios.defaults.baseURL = 'http://localhost:3000'

async function main() {
  // await axios.get('/users').then(response => {
  //   console.log(response.data)
  // })

  // const efe = await axios
  //   .post('/users', {
  //     name: 'Efe',
  //   })
  //   .then(response => {
  //     console.log('User created:', response.data)
  //   })
  //   .catch(error => {
  //     console.error('Error creating user:', error)
  //   })

  try {
    const efe = await axios.post('/users', { name: 'Efe' })
    console.log('User created:', efe.data)
  } catch (err) {
    console.error(err)
  }

  const can = await axios
    .post('/users', {
      name: 'Can',
    })
    .then(response => {
      console.log('User created:', response.data)
    })
    .catch(error => {
      console.error('Error creating user:', error.message)
    })

  const allUsers = await axios.get('/users')

  console.log('List of all users', allUsers.data)

  const efesRoomOfferLing = await axios.post(`/users/${efe.data._id}/roomOfferListings`, {
    location: 'Ankara',
    price: 6000,
    hasDeposit: true,
    owner: efe.data._id,
  })

  console.log('CREATED ROOM OFFER LISTING:', efesRoomOfferLing.data)

  // await axios
  //   .post('http://localhost:3000/users/Can/roomSeekerListings', {
  //     location: 'Istanbul',
  //     price: 4500,
  //     owner: 'Can',
  //   })
  //   .then(response => {
  //     console.log('CREATED ROOM SEEKER LISTING:', response.data)
  //   })
}

main()
