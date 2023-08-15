const signupLink = $('.signup-link');
const loginLink = $('.login-link');
const loginEl = $('.login-wrapper');
const signupEl = $('.signup-wrapper');
document.querySelector('#login-button').addEventListener('click', loginFormHandler)
document.querySelector('#sign-up-button').addEventListener('click', signUpFormHandler)

signupLink.on('click', () => {
  loginEl.attr('style', 'display: none');
  signupEl.attr('style', 'display: flex');
})

loginLink.on('click', () => {
  signupEl.attr('style', 'display: none');
  loginEl.attr('style', 'display: flex');
})


async function loginFormHandler (event) {
  event.preventDefault()
  const email = document.querySelector('#username-signup-input').value.trim()
  const password =document.querySelector('#password-signup-input').value.trim()

  if (email && password) {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email,password }),
      headers: { 'Content-Type': 'application/json' },
    })
  if (response.ok) {
    document.location.replace('/profile')
  } else {
    alert('Failed to sign in.')
  }
  }
  
}

async function signUpFormHandler (event) {
  event.preventDefault()
  const username = document.querySelector('#username-signup-input').value.trim()
  const password = document.querySelector('#password-signup-input').value.trim()
  const passwordConfirm = document.querySelector('#password-signup-confirm').value.trim()
  const address = document.querySelector('#address-signup-input').value.trim()
  console.log(username, password, passwordConfirm, address)

  if (password === passwordConfirm && username && email){
    const response = await fetch ('/api/user', {
      method: 'POST',
      body: JSON.stringify({ username, password, address}),
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
      document.location.replace('/profile')
    } else {
      alert('Failed to sign-up. Please try again.')
    }
  }
}