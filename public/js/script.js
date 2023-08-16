// const { get } = require("../../controllers/api/bookings");



document.querySelector('#remove-mdl-btn').addEventListener('click', removePet)
document.querySelector('#add-mdl-btn').addEventListener('click', addPet)
document.querySelector('#update-mdl-btn').addEventListener('click', updateAccount)
document.querySelector('.add-booking-btn').addEventListener('click', addBooking)

const addImageBtn = $('#add-pet-image-btn');
const uploader = Uploader({apiKey: "free"});

//fetch call once you hit the remove button on modal
async function removePet (event) {
  event.preventDefault();
  console.log('remove button')
  const selected = document.querySelector('#pet-to-remove-select')
  petId = selected.value
  console.log(petId)

  const response = await fetch(`/api/pets/${petId}`, {
    method: 'DELETE',
    body: JSON.stringify({
      pet_id : petId
    }),
    headers: {'Content-Type': 'application/json'}
  });
  if (response.ok) {
    document.location.replace('/profile')
  } else {
    alert(response.statusText)
  }
}


let imageString

addImageBtn.on('click', async (e) => {
  e.preventDefault()

  imageString = await uploader.open({ 
    multi: false,
    mimeTypes: ["image/*"],
    editor: {
      images: {
        crop: true,
        cropShape: "circ",
        cropRatio: 1 / 1 
      },
      styles: {
        colors: {
          primary: '#db7f67',
          active: '#db7f67',
          shade500: '#db7f67', 
        }
    }
    }
   }).then(files => {
    if (files.length === 0) {
      console.log('No files selected.')
    } else {
      console.log('Pet Picture added!');
      const imageUrl = files.map(editedFile => editedFile.fileUrl);
      return imageUrl
    }
  }).catch(err => {
    console.error(err);
  });
})

//fetch call once you hit the add pet button on modal
async function addPet (event) {
  console.log(imageString)
  event.preventDefault();
  console.log('add button')
  const selected = document.querySelector('#pet-type-select')
  const petType = selected.value
  const petName = document.querySelector('#pet-name-input').value.trim()
  const specialDetails = document.querySelector('#pet-details-input').value.trim()
  const petImg = imageString
  console.log(petName, petType, specialDetails, petImg)

  if (petType && petName) {
    const response = await fetch('/api/pets', {
      method: 'POST',
      body: JSON.stringify({
        pet_name: petName,
        pet_type: petType,
        special_details: specialDetails,
        pet_img: petImg
      }),
      headers: {'Content-Type': 'application/json'}
    })
    if (response.ok) {
      console.log('Success!')
      document.location.replace('/profile')
    } else {
      alert(response.statusText) 
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
  console.log(email, username, password, address,id)
  
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

//logout 
const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
};

document.querySelector("#logout").addEventListener('click', logout)


//takes us to the booking page
function addBooking () {
  console.log('booking button')
  let queryString = './booking.html'
  location.assign(queryString)
}


// let userBookings 

// const getAndRenderBookings = () => getUserBookings().then(renderBookings)

// const getUserBookings = () =>
//   fetch(`/api/bookings/user/${id}`, { //is this the correct route? ...ask mroe about this later
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   const renderBookings = async (bookings) => {
//     let jsonBookings = await bookings.json()
//     if (bookings)
//       userBookings.foreach()
// //not done here, 
//   }

// // getAndRenderBookings()


// const getUserProfile = () =>
//   fetch(`/api/user/2`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })

// const renderProfile = async (profile) => {
//   console.log(profile)
// }

// const getAndRenderProfile = () => getUserProfile().then(renderProfile)

// getAndRenderProfile()