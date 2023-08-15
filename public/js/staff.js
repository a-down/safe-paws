


document.querySelector("#submit-contact-btn").addEventListener('click', submitContact)
document.querySelector(".book-service-btn").addEventListener('click', getBookings)


function submitContact (event) {
  event.preventDefault()
  console.log('contact button')
  let queryString = './staff.html'
  location.assign(queryString)
}

function getBookings (event) {
  event.preventDefault()
  console.log('booking button hit')
  let queryString = './booking.html'
  location.assign(queryString)
}
