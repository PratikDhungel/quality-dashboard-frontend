const loginForm = document.getElementById('login-form');

axios
  .get('http://localhost:5000/api/v1/user/getUsers')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
