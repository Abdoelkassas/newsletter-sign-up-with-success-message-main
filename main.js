let input = document.getElementById("emailInput");
let submitButton = document.querySelector(".subscribeButton");
let signUpFormContainer = document.querySelector(".signUpFormContainer");
let successContainer = document.querySelector(".successMessage");
let statusElement = document.querySelector(".status");
let emailElement = document.querySelector(".email")
let dismissButton = document.querySelector(".dismiss")
submitButton.addEventListener("click", () => {
  if (input.value.includes("@") && input.value[input.value.indexOf("@") + 1] != undefined) {
    signUpFormContainer.style = "display:none"
    successContainer.style = "display:block; display: flex;"
    emailElement.innerHTML = input.value;
    return
  }
  input.style = 'border-color: red; color: red; background: hsl(var(--clr-primary-hsl), .3);'
  statusElement.style = "display:block;"
});

dismissButton.addEventListener("click", () => {
  signUpFormContainer.style = "display:block; display: flex;"
  successContainer.style = "display:none;"
  statusElement.style = "display:none;"
  emailElement.innerHTML = "";  
  input.style = statusElement.style = input.value = ""
})