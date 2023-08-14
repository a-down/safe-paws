


// const uploader = require('../public/js/uploader')

document.querySelector('#remove-mdl-btn').addEventListener('click', removePet)
document.querySelector('#add-mdl-btn').addEventListener('click', addPet)
document.querySelector('#update-mdl-btn').addEventListener('click', updateAccount)
document.querySelector('.add-booking-btn').addEventListener('click', addBooking)

//fetch call once you hit the remove button on modal
async function removePet (event) {
  event.preventDefault();
  console.log('remove button')
  const petRemoved = 'Skittles' //could use help with this functionality getting value
  console.log(petRemoved)

  const response = await fetch(`/api/remove/`, {
    method: 'DELETE',
    body: JSON.stringify({
      pet_name: petRemoved
    }),
    headers: {'Content-Type': 'application/json'}
  });
  if (response.ok) {
    document.location.replace('/profile/')
  } else {
    alert(response.statusText)
  }
}


//fetch call once you hit the add pet button on modal
async function addPet (event) {
  event.preventDefault();
  console.log('add button')
  const selected = document.querySelector('#pet-type-select')
  const petId = selected.value //this only returns a number not a species name
  const petName = document.querySelector('#pet-name-input').value.trim()
  const specialInst = document.querySelector('#pet-details-input').value.trim()
  console.log(petName, petId, specialInst)

  if (petType && petId) {
    const response = await fetch('/api/add', {
      method: 'POST',
      body: JSON.stringify({
        pet_name: petName,
        pet_type: petId,
        special_details: specialInst
      }),
      headers: {'Content-Type': 'application/json'}
    })
    if (response.ok) {
      console.log('Success!')
      document.location.replace('/profile')
    } else {
      alert(response.statusText) // uploader here or above? do we send img data to db?
    }
  }

}


//fetch call once you hit update account button on modal
async function updateAccount (event) {
  event.preventDefault();
  console.log('update button')
  const email = document.querySelector('#email-input').value.trim()
  const username = document.querySelector('#username-input').value.trim()
  const password = document.querySelector('#password-input').value.trim()
  const address = document.querySelector('#address-input').value.trim()
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  console.log(email, username, password, address)
  
  const response = await fetch(`api/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      username: username,
      password: password,
      address: address,
      email: email
    }),
    headers: {
      'Content-Type' : 'application/json'
    }
  })
  if (response.ok) {
    document.location.replace('/profile')
  } else {
    alert(response.statusText)
  }
}


//takes us to the booking page
function addBooking () {
  console.log('booking button')
  let queryString = './booking.html'
  location.assign(queryString)
}