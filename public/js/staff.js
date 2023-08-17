


document.querySelector("#submit-contact-btn").addEventListener('click', submitContact)
const fullName = document.querySelector('#contact-name-input')
const email = document.getElementById('#contact-email-input')
const message = document.getElementById('#contact-message-input')




function submitContact (event) {
  event.preventDefault()
  if (fullName && email && message)
  console.log('contact button')
  let queryString = '/'
  location.assign(queryString)
}


