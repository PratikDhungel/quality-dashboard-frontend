const loginForm = document.getElementById('login-form');
const BASE_URL = 'http://localhost:5001';

// Redirect to Home Page if logged in user visits login page
if (localStorage.getItem('isAuthenticated') === 'true') {
  console.log('isAuthenticated true');
  window.location.replace(`${BASE_URL}/home-page.html`);
} else {
  localStorage.setItem('isAuthenticated', 'false');
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  //   const formData = new FormData(loginForm);
  const userEmail = document.getElementById('login-form-email-input').value;
  const userPassword = document.getElementById('login-form-password-input')
    .value;

  userData = { email: userEmail, password: userPassword };

  //   axios.defaults.withCredentials = true;
  axios
    .post('http://localhost:5000/api/v1/user/login', userData)
    // withCredentials: true,
    .then(function (response) {
      // handle success
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('isAuthenticated', 'true');
      window.location.replace(`${BASE_URL}/home-page.html`);
    })
    .catch(function (error) {
      // handle error
      if (error.response) {
        alert(error.response.data.error);
      }
    });
});
