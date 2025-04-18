let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let cardInput = document.getElementById("card");
let detailsForm = document.getElementById("detailsForm");
const nameError = document.getElementById("nameError");

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

// <------------------------------------------------------------------->

detailsForm.addEventListener("submit", (event) => {
  if (!areConditionsMet()) {
    event.preventDefault();
  } else {
    nameInput.style.border = "white";
    nameError.classList.add("hidden");

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
  return true;
}

function isNameValid() {
  const nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+(-[A-Z][a-z]+)?$/;

  // if name does not match the regex
  if (!nameInput.value.match(nameRegex)) {
    nameInput.style.border = "2px solid red";
    // display name field error
    nameError.classList.remove("hidden");
    return false;
  }
  return true;
}
