


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


//this code auto-populates the date select form with the next 14 days (not including current day)
date = dayjs()

let dateArr = []

for (i= 1; i < 15; i++) {
  dates = date.add(i,'day').format('MM/DD/YY') 
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


//hides the next button and appends the rest of the form
async function beginBooking (event) {
  event.preventDefault();

}

//submits the information from both forms
async function submitBooking (event) {
  event.preventDefault()
  const selectedPet = document.querySelector('#pet-select')
  const petName= selectedPet.value
  const selectedService = document.querySelector("#service-select")
  const serviceName = selectedService.value
  const specialInst = document.querySelector('#special-instructions-input').value.trim()
  const selectedDate = document.querySelector("#date-select")
  const date = selectedDate.value
  const selectedTime = document.querySelector("#time-select")
  const time = selectedTime.value
  const selectedStaff = document.querySelector("#staff-select")
  const staff = selectedStaff.value
  console.log(petName, serviceName, specialInst, date, time, staff)

  const response = await fetch ('/api/booking/new', {
    method: 'POST',
    body: JSON.stringify({
      pet_name: petName,
      service_name: serviceName,
      special_details: specialInst,
      date: date,
      time: time, //we dont have a time slot in our booking model
      staff_name: staff
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