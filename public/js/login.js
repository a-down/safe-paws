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
  const username = document.querySelector('#username-login-input').value.trim()
  const password =document.querySelector('#password-login-input').value.trim()
  // console.log(username, password)
  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username: username, password: password }),
      headers: { 'Content-Type': 'application/json' },
    })
    // console.log(response)
  if (response.ok) {
    alert('Logged in');   
    window.location.href = `/profile`
  } else {
    alert('Failed to sign in.')
  }
  }
}

async function signUpFormHandler (event) {
  event.preventDefault()
  const email = document.querySelector('#email-signup-input').value.trim()
  const username = document.querySelector('#username-signup-input').value.trim()
  const password = document.querySelector('#password-signup-input').value.trim()
  const passwordConfirm = document.querySelector('#password-signup-confirm').value.trim()
  const address = document.querySelector('#address-signup-input').value.trim()
  // console.log(username, password, passwordConfirm, address, email)

  if (password === passwordConfirm && username && address && email){
    const response = await fetch ('/api/users', {
      method: 'POST',
      body: JSON.stringify({email: email, username: username, password: password, address: address }),
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
      alert('Profile created.')
      window.location.href = `/profile`
    } else {
      alert('Failed to sign-up. Please try again.')
    }
  }
}