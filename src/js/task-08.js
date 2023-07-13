const inputForm = document.querySelector('.login-form')

inputForm.addEventListener('submit', function (event) {
  event.preventDefault()

  const emailInput = inputForm.elements.email
  const passwordInput = inputForm.elements.password
  const emailValue = emailInput.value.trim()
  const passwordValue = passwordInput.value.trim()

  if (emailValue === '' || passwordValue === '') {
    alert('заповніть всі поля');
    return
  }

  const inputData = {
    email: emailValue,
    password: passwordValue
  }

  console.log(inputData)
  event.target.reset()
})
