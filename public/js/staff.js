


document.querySelector("#submit-contact-btn").addEventListener('click', submitContact)




function submitContact (event) {
  event.preventDefault()
  console.log('contact button')
  let queryString = './staff.html'
  location.assign(queryString)
}


