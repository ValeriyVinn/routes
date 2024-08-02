const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    mail,
    password,
  };

  if (mail === "") {
    alert("Email fields should not be empty");
  } else if (password === "") {
    alert("Password fields should not be empty");
  } else {
    alert("This form has been successfully submitted!");
    console.log(formData);
  }
  loginForm.reset();
}
