let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let cardInput = document.getElementById("card");
let detailsForm = document.getElementById("detailsForm");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

detailsForm.addEventListener("submit", (event) => {
  if (!areConditionsMet()) {
    // stop the form from being submitted
    event.preventDefault();
  } else {
    detailsForm.action =
      "mailto:challenge@dn-uk.com?subject=User Details&body=" +
      "Name: " +
      nameInput.value +
      encodeURIComponent("\r\n") +
      "Email: " +
      emailInput.value +
      encodeURIComponent("\r\n") +
      "Card Number: " +
      cardInput.value;
  }
});

function areConditionsMet() {
  if (!isNameValid()) {
    return false;
  }
  if (!isEmailValid()) {
    return false;
  }
  return true;
}

function isNameValid() {
  const nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+(-[A-Z][a-z]+)?$/;

  // if name does not match the regex
  if (!nameInput.value.match(nameRegex)) {
    // highlight error field and display name field error
    nameInput.classList.add("red-border");
    nameError.classList.remove("hidden");
    return false;
  } else {
    // remove error border and hide error field
    nameInput.classList.remove("red-border");
    nameError.classList.add("hidden");
  }
  return true;
}

function isEmailValid() {
  const emailRegex = /\.com$/;

  // if email does not match the regex or if it does not pass the 'html tag' validity check
  if (!emailInput.value.match(emailRegex) || !emailInput.checkValidity()) {
    emailInput.classList.add("red-border");
    emailError.classList.remove("hidden");
    return false;
  } else {
    emailInput.classList.remove("red-border");
    emailError.classList.add("hidden");
  }
  return true;
}
