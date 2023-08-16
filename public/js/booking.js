


document.querySelector('#next-booking-btn').addEventListener('click', beginBooking)
document.querySelector('#submit-booking-btn').addEventListener('click', submitBooking)
const dateSelect = document.getElementById("date-select")
const staffSelect = document.getElementById("staff-select")
 
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

let staffArr = []

async function beginBooking (event) {
  event.preventDefault();
  const response = await fetch ('/api/staffservices', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })
  .then(response => {
    return response.json ()
    
    })
    .catch(err => {
    console.error(err);
    });
}

//to create a staff array
for (let key in staffArr) {
  let option = document.createElement('option')
  option.setAttribute('value', staffArr[key])
  let optionText = document.createTextNode(staffArr[key])
  option.appendChild(optionText)
  dateSelect.appendChild(option)
}
console.log(staffArr)



//submits the information from both forms
async function submitBooking (event) {
  event.preventDefault()
  const selectedPet = document.querySelector('#pet-select')
  const petName = selectedPet.value
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

  const response = await fetch ('/api/booking', {
    method: 'POST',
    body: JSON.stringify({
      pet_name: petName,
      service_name: serviceName,
      special_details: specialInst,
      date: date,
      time: time,
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