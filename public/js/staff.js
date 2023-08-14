


document.querySelector("#submit-contact-btn").addEventListener('click', submitConact)

function submitConact (event) {
  event.preventDefault()
  console.log('contact button')
  let queryString = './staff.html'
  location.assign(queryString)
}