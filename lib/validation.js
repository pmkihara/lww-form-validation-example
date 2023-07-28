const allInputs = document.querySelectorAll('.form-control')
const emailInput = document.getElementById('email')
const tosCheckbox = document.getElementById('tos')
const submitButton = document.querySelector('button')

const enableSubmit = () => {
  submitButton.disabled = false;
  submitButton.innerText = 'Submit';
}

const disableSubmit = () => {
  submitButton.disabled = true;
  submitButton.innerText = 'Please fill all fields';
}

const enableButton = () => {
  const tosIsValid = tosCheckbox.checked;
  const arrayOfInputs = Array.from(allInputs)
  const fieldsAreValid = arrayOfInputs.every(input => input.classList.contains('is-valid'))
  tosIsValid && fieldsAreValid ? enableSubmit() : disableSubmit()
}

const emailIsValid = (input) => {
  return /^[\w\-\.]+@([\w\-]+\.)+\w{2,4}$/.test(input.value)
}

const inputIsValid = (input) => {
  return input.value !== ''
}

const validateInput = (input) => {
  input.classList.add('is-valid');
  input.classList.remove('is-invalid');
}

const invalidateInput = (input) => {
  input.classList.add('is-invalid');
  input.classList.remove('is-valid');
}

const checkInput = (input) => {
  const isValid = input === emailInput ? emailIsValid(input) : inputIsValid(input);
  isValid ? validateInput(input) : invalidateInput(input)
}

tosCheckbox.addEventListener('change', enableButton)

allInputs.forEach((input) => {
  input.addEventListener('blur', () => {
    checkInput(input)
    enableButton();
  })
})
