const signupLink = $('.signup-link');
const loginLink = $('.login-link');
const loginEl = $('.login-wrapper');
const signupEl = $('.signup-wrapper');

signupLink.on('click', () => {
  loginEl.attr('style', 'display: none');
  signupEl.attr('style', 'display: flex');
})

loginLink.on('click', () => {
  signupEl.attr('style', 'display: none');
  loginEl.attr('style', 'display: flex');
})