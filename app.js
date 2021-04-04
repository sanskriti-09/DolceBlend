const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const signup__btn = document.querySelector('#signup__btn')
const signup__uname = document.querySelector('#signup__uname')
const signup__email = document.querySelector('#signup__email')
const signup__pass = document.querySelector('#signup__pass')
const signup__cpass = document.querySelector('#signup__cpass')

form.addEventListener('submit', e => {
  e.preventDefault();

  check();
});

function check() {
  const unameValue = signup__uname.value.trim();
  const emailValue = signup__email.value.trim();
  const passValue = signup__pass.value.trim();
  const cpassValue = signup__cpass.value.trim();

  if (unameValue === '') {
    incorrect_func(signup__uname, 'Please enter username');
  } else {
    correct_func(signup__uname);
  }

  if (emailValue === '') {
    incorrect_func(signup__email, 'Please enter email ID');
  } else if (!isEmail(emailValue)) {
    incorrect_func(signup__email, 'Not a valid email');
  } else {
    correct_func(signup__email);
  }

  if (passValue === '') {
    incorrect_func(signup__pass, 'Please enter password');
  } else {
    correct_func(signup__pass);
  }

  if (cpassValue === '') {
    incorrect_func(signup__cpass, 'Please confirm your password');
  } else if (passValue !== cpassValue) {
    incorrect_func(signup__cpass, 'Passwords do not match');
  } else {
    correct_func(signup__cpass);
  }
}

function incorrect_func(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control incorrect';
  small.innerText = message;
}

function correct_func(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control correct';
}

function isEmail(signup__email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(signup__email);
}