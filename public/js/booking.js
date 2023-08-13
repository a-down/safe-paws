


document.querySelector('#next-booking-btn').addEventListener('click', beginBooking)
document.querySelector('#submit-booking-btn').addEventListener('click', submitBooking)
const dateSelect = document.getElementById("date-select")
/*CLIENT SIDE
- User chooses pet, service, and special instructions
* NEXT BUTTON -> 
  * FETCH for STAFF that provide the requested service
  * Remove Next Button
  * Append '.booking-form-2' to '.booking-form'
- User chooses date and time
- User has the option to request a staff member
  - (The default staff for a new Booking should just be 'staff')
* SUBMIT BUTTON
  * FETCH POST with data from form
  * Send user to profile page
*/


date = dayjs()


let dateArr = []

for (i= 1; i < 15; i++) {
  dates = date.add(i,'day').format(' MM/DD/YY') 
  dateArr.push(dates)
}

for (let key in dateArr) {
  let option = document.createElement('option')
  option.setAttribute('value', dateArr[key])
  let optionText = document.createTextNode(dateArr[key])
  option.appendChild(optionText)
  dateSelect.appendChild(option)
}

console.log(dateArr)


//submit both booking forms and return to homepage
async function beginBooking (event) {
  event.preventDefault();
  const selectedPet = document.querySelector('#pet-select')
  const petId = selectedPet.value
  const selectedService = document.querySelector("#service-select")
  const serviceId = selectedService.value
  const specialInst = document.querySelector('#special-instructions-input').value.trim()
  console.log(petId, serviceId, specialInst)
  //hide next button
  //   const response = await fetch('/api/add', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       pet_name: petName,
  //       pet_type: petId,
  //       special_details: specialInst
  //     }),
  //     headers: {'Content-Type': 'application/json'}
  //   })
  //   if (response.ok) {
  //     console.log('Success!')
  //     document.location.replace('/profile')
  //   } else {
  //     alert(response.statusText) 
  //   }
  // }
}

async function submitBooking (event) {
  event.preventDefault()
//   const dateSelected = document.querySelector('#date-select')
//   const date = dateSelected.innerHTML
//   console.log(date)
}