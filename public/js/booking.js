


document.querySelector('#submit-booking-btn').addEventListener('click', submitBooking)
const dateSelect = document.getElementById("date-select")
const staffSelect = document.getElementById("staff-select")
const serviceSelect = document.getElementById("service-select")


var userId = $('#add-booking-id').val()





 
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




//submits the information from both forms
async function submitBooking (event) {
  event.preventDefault()
  const selectedPet = document.querySelector('#pet-select')
  const petId = selectedPet.value
  const selectedService = document.querySelector("#service-select")
  const serviceId = selectedService.value
  const selectedDate = document.querySelector("#date-select")
  const date = selectedDate.value
  const selectedTime = document.querySelector("#time-select")
  const time = selectedTime.value
  const selectedStaff = document.querySelector("#staff-select")
  const staffId = selectedStaff.value
 

  const response = await fetch ('/api/bookings', {
    method: 'POST',
    body: JSON.stringify({
      service_id: serviceId,
      date: date,
      time: time,
      user_id: userId,
      pet_id: petId,
      staff_id: staffId,
      service_received: false
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

$('#next-booking-btn').click(function() {
  $(this).hide()
})

let staffArr = []

const renderStaff = async (staff) => {
  let jsonStaff = await staff.json()
  let serviceStaff = jsonStaff.service.service_staff
  serviceStaff.forEach((staff) => {
    let option = document.createElement('option')
    option.setAttribute('value', staff.id)
    let optionText = document.createTextNode(staff.staff_name)
    option.appendChild(optionText)
    staffSelect.appendChild(option)
  })

  displayForm2()
}


const getAndRenderStaff = (serviceId) => beginBooking(serviceId).then(renderStaff)

function start(e) {
  e.preventDefault()
  console.log(serviceSelect.value)
  getAndRenderStaff(serviceSelect.value)
}

