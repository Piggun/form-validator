let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let cardInput = document.getElementById("card");
let detailsForm = document.getElementById("detailsForm");

detailsForm.addEventListener("submit", (event) => {
  if (!isConditionMet()) {
    event.preventDefault();
  } else {
    detailsForm.action =
      "mailto:challenge@dn-uk.com?subject=User Details&body=" +
      nameInput.value +
      encodeURIComponent("\r\n") +
      emailInput.value +
      encodeURIComponent("\r\n") +
      cardInput.value;
  }
});

function isConditionMet() {
  const nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+(-[A-Z][a-z]+)?$/;

  // if name does not match the regex
  if (!nameInput.value.match(nameRegex)) {
    return false;
  }
  return true;
}
