const loginForm = document.getElementById('login-form');

// console.log('Hello World');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  //   const formData = new FormData(loginForm);
  const userEmail = document.getElementById('login-form-email-input').value;
  const userPassword = document.getElementById('login-form-password-input')
    .value;

  userData = { email: userEmail, password: userPassword };

  axios
    .post('http://localhost:5000/api/v1/user/login', userData)
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      alert(error.response.data.error);
    });
});
