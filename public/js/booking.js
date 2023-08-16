



document.querySelector('#submit-booking-btn').addEventListener('click', submitBooking)
const dateSelect = document.getElementById("date-select")
const staffSelect = document.getElementById("staff-select")
const serviceSelect = document.getElementById("service-select")
 
//day population
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


//begin and append staff

const beginBooking = (id) =>
  fetch(`/api/services/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

document.querySelector('#next-booking-btn').addEventListener('click', start)

function displayForm2() {
  $('.booking-form-2').attr('style', 'display: flex')
  $('footer').attr('style', 'position: static')
}



let staffArr = []

const renderStaff = async (staff) => {
  let jsonStaff = await staff.json()
  console.log(jsonStaff)
  let serviceStaff = jsonStaff.service.service_staff
  console.log(serviceStaff)
  serviceStaff.forEach((staff) => {
    let option = document.createElement('option')
    option.setAttribute('value', staff.id)
    let optionText = document.createTextNode(staff.staff_name)
    option.appendChild(optionText)
    staffSelect.appendChild(option)
  })

  displayForm2()
}

console.log(staffArr)

const getAndRenderStaff = (serviceId) => beginBooking(serviceId).then(renderStaff)

function start(e) {
  e.preventDefault()
  console.log(serviceSelect.value)
  getAndRenderStaff(serviceSelect.value)
}