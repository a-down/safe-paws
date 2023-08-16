


document.querySelector("#submit-contact-btn").addEventListener('click', submitContact)




function submitContact (event) {
  event.preventDefault()
  console.log('contact button')
  let queryString = '/'
  location.assign(queryString)
}


