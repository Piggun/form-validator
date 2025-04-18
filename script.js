let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let cardInput = document.getElementById("card");
let detailsForm = document.getElementById("detailsForm");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

detailsForm.addEventListener("submit", (event) => {
  if (!areConditionsMet()) {
    event.preventDefault();
  } else {
    // nameError.classList.add("hidden");

    detailsForm.action =
      "mailto:challenge@dn-uk.com?subject=User Details&body=" +
      nameInput.value +
      encodeURIComponent("\r\n") +
      emailInput.value +
      encodeURIComponent("\r\n") +
      cardInput.value;
  }
});

function areConditionsMet() {
  if (!isNameValid()) {
    return false;
  }
  if (!isEmailValid) {
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
  if (!emailInput.value.match(emailRegex)) {
    emailInput.classList.add("red-border");
    emailError.classList.remove("hidden");
    return false;
  } else {
    emailInput.classList.remove("red-border");
    emailError.classList.add("hidden");
  }
  return true;
}

// <------------------------------------------------------------------->

// detailsForm.addEventListener("submit", (event) => {
//   if (!isConditionMet()) {
//     nameInput.style.border = "2px solid red";
//     event.preventDefault();
//   } else {
//     nameInput.style.border = "white";
//     detailsForm.action =
//       "mailto:challenge@dn-uk.com?subject=User Details&body=" +
//       nameInput.value +
//       encodeURIComponent("\r\n") +
//       emailInput.value +
//       encodeURIComponent("\r\n") +
//       cardInput.value;
//   }
// });

// function isConditionMet() {
//   const nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+(-[A-Z][a-z]+)?$/;

//   // if name does not match the regex
//   if (!nameInput.value.match(nameRegex)) {
//     return false;
//   }
//   return true;
// }
