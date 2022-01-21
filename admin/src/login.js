import { getCookie, setCookie } from './modules/cookies';
import { getData } from './modules/repuests';

const redirectToAdmin = () => document.location.href = 'table.html';

if (getCookie('access') === 'true') { redirectToAdmin(); }

const form = document.getElementById('form');
const formHandler = async (e) => {
  const loginInput = form.querySelector('#login');
  const passwordInput = form.querySelector('#password');
  const isUserValid = async () => {
    const login = loginInput.value.trim();
    const password = passwordInput.value.trim();

    return await getData(`http://localhost:3000/users?login=${login}&password=${password}`)
      .then(res => res.length ? true : false);
  };
  const showAuthError = () => document.querySelector('.text-warning').classList.remove('d-none');

  e.preventDefault();

  if (await isUserValid()) {
    setCookie('access', 'true');
    redirectToAdmin();
  } else {
    form.reset();
    showAuthError();
  }
};

form.addEventListener('submit', formHandler);