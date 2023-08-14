


document.querySelector("#submit-contact-btn").addEventListener('click', submitConact)
document.querySelector(".book-service-butn").addEventListener('click', getBookings)


function submitConact (event) {
  event.preventDefault()
  console.log('contact button')
  let queryString = './staff.html'
  location.assign(queryString)
}

