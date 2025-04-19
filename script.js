let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let cardInput = document.getElementById("card");
let detailsForm = document.getElementById("detailsForm");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const cardError = document.getElementById("cardError");

detailsForm.addEventListener("submit", (event) => {
  // if not all the conditions are met
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
  if (!isNameValid()) return false;
  if (!isEmailValid()) return false;
  if (!isCardValid()) return false;

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

function isCardValid() {
  let sumOfNums;
  // if card input is not empty (prevents from calling reduce function on an empty array)
  if (cardInput.value.length >= 1) {
    const arrayOfNums = cardInput.value.split("");
    sumOfNums = arrayOfNums.map(Number).reduce((a, b) => a + b);
  }

  // if card input is not between 11 and 19 characters
  if (cardInput.value.length <= 10 || cardInput.value.length >= 20) {
    cardInput.classList.add("red-border");
    cardError.classList.remove("hidden");
    return false;
  } // if card input is not a number
  else if (isNaN(cardInput.value)) {
    cardInput.classList.add("red-border");
    cardError.classList.remove("hidden");
    return false;
  } else if (sumOfNums === 0) {
    cardInput.classList.add("red-border");
    cardError.classList.remove("hidden");
    return false;
  } else {
    cardInput.classList.remove("red-border");
    cardError.classList.add("hidden");
  }
  return true;
}
